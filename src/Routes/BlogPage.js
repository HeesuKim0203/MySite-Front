import { useEffect } from 'react' ;
import styled, { css } from 'styled-components' ;

import MDEditor from '@uiw/react-md-editor' ;
import { connect } from 'react-redux';

import ButtonContainer from '../Components/Blog/ButtonContainer' ;
import BlogPageContainer from '../Components/Blog/BlogPageContainer' ;

import { withRouter } from 'react-router-dom';

import {
    DOCUMENT
} from '../Util/routes' ;
import CommentContainer from '../Components/Blog/CommentContainer';
import { blogPageContentNum, mode } from '../Util/util';
import { createAction } from '../Store/store';
import Message from '../Components/Message';
import Seo from '../Components/Seo';

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

    @media ${props => props.theme.mobileL} {
        font-size : 32px ;
    }
`;

const cssText = css`
    h1, h2, h3, h4, h5, h6, a, p {
        color : #e0e0e0 ;
    }
    code {
        background-color : #e0e0e0  !important ;
    }
`;

const BlogPage = ({ 
    pageContents, 
    pageSelect, 
    text, 
    id, 
    title,
    type,
    url,
    pageContentsPotition, 
    updatePageSelect, 
    modeState,
    description
}) => {

    useEffect(() => {

        window.scroll({
            behavior : 'smooth',
            top : 0
        }) ;
        
        updatePageSelect(pageContentsPotition) ;

    }, [ updatePageSelect, pageContentsPotition, id ]) ;

    return (
        <>
            <Seo 
                title={title}
                url={`${DOCUMENT}/${id}`}
                description={description}
                type={type}
                image={url}
            />
                {modeState === mode.dark ? (
                    <style>
                        {cssText}
                    </style>) : null 
                }
            <Container>
                    {
                        id !== -1 ? (
                        <>
                            <Main>
                                <Title>{title}</Title>
                                <MDEditor.Markdown id="content" source={ text } />
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
                                    <CommentContainer contentId={id} />
                                </CommentWrap>
                            </Footer>
                        </>
                        ) : <Message mode={'error'} text={"게시물이 없습니다."}/>
                    }
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
        return content ? {
            pageContents,
            pageSelect,
            text : content.text ,
            id : content.id,
            pageContentsPotition : position,
            title : content.title,
            description : content.description,
            type : content.type,
            url : content.image_url,
        } : {
            pageContents,
            pageSelect,
            pageContentsPotition : position,
            id : -1
        } ;
    }, 
    dispatch => ({
        updatePageSelect : (select) => dispatch(createAction.updatePageSelect(select))
    })
)(BlogPage)) ;