import { memo, useEffect } from 'react' ;
import styled from 'styled-components' ;

import MarkdownPreview from '@uiw/react-markdown-preview' ;
import { connect } from 'react-redux';

import ButtonContainer from '../Components/Blog/ButtonContainer' ;
import BlogPageContainer from '../Components/Blog/BlogPageContainer' ;

import { Redirect, withRouter } from 'react-router-dom';

import {
    DOCUMENT, PAGE404
} from '../Util/routes' ;
import CommentContainer from '../Components/Blog/CommentContainer' ;
import { blogPageContentNum, ApiHooks, LazyImageObserver } from '../Util/util' ;
import { getContent } from '../Util/api' ;
import { createAction } from '../Store/store' ;
import Message from '../Components/Message' ;
import Seo from '../Components/Seo' ;
import Loder from '../Components/Loder' ;

const Container = styled.main`
    width : 100% ;
    
    overflow : hidden ;
`;

const Main = styled.section`
    width : 100% ;

    float : left ;

    padding : 50px 20px ;
`;

const ContentBox = styled.div`
    
`;

const Footer = styled.section`
    width : 100% ;

    float : left ;
`;

const ButtonWrap = styled.div`
    margin-top : 40px ;
`;

const CommentWrap= styled.div`
    width : 100% ;
`;

const Title = styled.h1`
    font-size : 40px ;
    
    margin-bottom : 40px ;

    line-height : 43px ;
    color : ${props => props.theme.color.fontColor} ;

    @media ${props => props.theme.mobileL} {
        font-size : 32px ;
    }
`;

const LazyImage = memo((props) => {

    const { className, src, alt, width, height, style } = props ;
    const { imageSrc, imageRef } = LazyImageObserver({ src, dataSrc : props["data-src"] }) ;

    return (
        <img 
            className={className} 
            ref={imageRef} 
            src={imageSrc} 
            alt={alt}
            width={width}
            height={height}
            style={style}
         />
    )
}) ;

const BlogPage = ({ 
    pageContents, 
    pageSelect, 
    content,
    id,
    pageContentsPosition, 
    updatePageSelect, 
    modeState,
}) => {

    const { id : contentId, title, type, image_url } = content || {} ;
    const { data, error, load, getData, setLoad } = ApiHooks(getContent, contentId || -1) ;

    function markDownlinkTarget(e) {
        e.preventDefault() ;
        window.open(e.target.href, '_blank') ;
    }
    
    useEffect(() => {

        if (typeof Node === 'function' && Node.prototype) {
            const originalRemoveChild = Node.prototype.removeChild ;
            Node.prototype.removeChild = function(child) {
              if (child.parentNode !== this) {
                if (console) {
                //   console.error('Cannot remove a child from a different parent', child, this) ;
                }
                return child;
              }
              return originalRemoveChild.apply(this, arguments);
            }
          
            const originalInsertBefore = Node.prototype.insertBefore;
            Node.prototype.insertBefore = function(newNode, referenceNode) {
              if (referenceNode && referenceNode.parentNode !== this) {
                if (console) {
                //   console.error('Cannot insert before a reference node from a different parent', referenceNode, this);
                }
                return newNode ;
              }
              return originalInsertBefore.apply(this, arguments) ;
            }
        }

        window.scroll({
            top : 0,
        }) ;

        updatePageSelect(pageContentsPosition) ;
        setLoad(true) ;
        getData() ;

    }, [ updatePageSelect, pageContentsPosition, id ]) ;

    return (
        <>
            <Seo 
                title={title}
                url={`${DOCUMENT}/${content.id}`}
                description={data && data.description}
                type={type}
                image={image_url}
            />
            <Container>
                    { id !== -1 ? 
                    load ? <Loder /> : 
                    error ? <Message text="서버로부터 데이터를 받아올 수 없습니다." />  :
                        (
                        <>
                            <Main>
                                <Title>{title}</Title>
                                <MarkdownPreview
                                    className={modeState}
                                    source={data && data.text}
                                    components={{
                                        a : ({ node, ...props }) =>  
                                            <a 
                                                onClick={markDownlinkTarget}  
                                                {...props}
                                            />,
                                        img : ({node, ...props}) => 
                                            <LazyImage 
                                                {...props} 
                                            />
                                    }}
                                />
                            </Main>
                            <Footer>
                                <ContentBox>
                                { pageContents && pageContents.map((content, index) => {
                                    return pageSelect === index ? (
                                        <BlogPageContainer 
                                            key={index}
                                            pageContents={content}
                                            pageSelect={true}
                                        />
                                    ) : (
                                        <BlogPageContainer 
                                            key={index}
                                            pageContents={content}
                                        />
                                    )
                                })}
                                </ContentBox>
                                <ButtonWrap>
                                    <ButtonContainer />
                                </ButtonWrap>
                                <CommentWrap>
                                    <CommentContainer contentId={contentId} />
                                </CommentWrap>
                            </Footer>
                        </>
                        ) : <Redirect to={PAGE404}/> }
            </Container>
        </>
    );
};

export default withRouter(connect(
    ({ 
        content : {
            pageContents, pageSelect, defaultData, pageButtonsData
        }
    },
    {
        location : {
            pathname
        }
    }) => {
        const findId = pathname.replace(`${DOCUMENT}/`, "") ;

        const id = defaultData.findIndex(content => content.id === Number(findId)) ;
        const content = defaultData[id] ;

        let position ;

        pageButtonsData.forEach(buttons => {
            if(buttons * blogPageContentNum <= id && id <= (buttons + 1) * blogPageContentNum)
                position = buttons ;
        }) ;
        return {
            pageContents,
            pageSelect,
            pageContentsPosition : position,
            content,
            id
        } ;
    }, 
    dispatch => ({
        updatePageSelect : (select) => dispatch(createAction.updatePageSelect(select))
    })
)(BlogPage)) ;