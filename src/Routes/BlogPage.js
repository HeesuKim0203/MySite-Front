import { useEffect, useRef, useState } from 'react' ;
import styled, { css } from 'styled-components' ;

import MDEditor from '@uiw/react-md-editor' ;
import { connect } from 'react-redux';

import ButtonContainer from '../Components/Blog/ButtonContainer' ;
import BlogPageContainer from '../Components/Blog/BlogPageContainer' ;

import { Redirect, withRouter } from 'react-router-dom';

import {
    DOCUMENT, PAGE404
} from '../Util/routes' ;
import CommentContainer from '../Components/Blog/CommentContainer' ;
import { blogPageContentNum, mode, ApiHooks } from '../Util/util' ;
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

    @media ${props => props.theme.mobileL} {
        font-size : 32px ;
    }
`;

const cssTextDark = css`
    h1, h2, h3, h4, h5, h6, a, p {
        color : #e0e0e0 ;
    }
    code {
        background-color : #e0e0e0  !important ;
    }
`;

const cssTextLight = css`
    p {
        color : #424242 ;
    }
`;

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

    const { data, error, load, getData } = ApiHooks(getContent, contentId || -1) ;

    useEffect(() => {

        if (typeof Node === 'function' && Node.prototype) {
            const originalRemoveChild = Node.prototype.removeChild ;
            Node.prototype.removeChild = function(child) {
              if (child.parentNode !== this) {
                if (console) {
                  console.error('Cannot remove a child from a different parent', child, this);
                }
                return child;
              }
              return originalRemoveChild.apply(this, arguments);
            }
          
            const originalInsertBefore = Node.prototype.insertBefore;
            Node.prototype.insertBefore = function(newNode, referenceNode) {
              if (referenceNode && referenceNode.parentNode !== this) {
                if (console) {
                  console.error('Cannot insert before a reference node from a different parent', referenceNode, this);
                }
                return newNode;
              }
              return originalInsertBefore.apply(this, arguments);
            }
        }

        window.scroll({
            top : 0,
        }) ;

        updatePageSelect(pageContentsPosition) ;
        getData() ;


    }, [ updatePageSelect, pageContentsPosition, id ]) ;


    // useEffect(() => {

    //     let lazyLoad ;
    //     let lazyloadImages = document.getElementsByTagName("IMG") ;
    //     console.log(lazyloadImages) ;

    //     if ("IntersectionObserver" in window) {
    //         const imageObserver = new IntersectionObserver((entries, observer) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     const image = entry.target ; 
    //                     image.src = image.dataset.src ;
    //                     image.classList.remove("lazy") ;
    //                     imageObserver.unobserve(image) ;
    //                 }
    //             });
    //         })

    //         Array.prototype.forEach.call(lazyloadImages, image => {
    //             image.className = 'lazy' ;
    //             let url = image.src.split("/")[image.src.split("/").length - 1] ;
    //             image.setAttribute("src", `https://ik.imagekit.io/u1jztfg71ed/${url}?tr=w-1,h-1:w-${Number(image.width)},h-${Number(image.height)}`) ;
    //             image.setAttribute("data-src", `https://ik.imagekit.io/u1jztfg71ed/${url}?tr=w-${Number(image.width)},h-${Number(image.height)}`) ;
    //             imageObserver.observe(image) ;
    //         }) ;
    //     }else {
    //         let lazyloadThrottleTimeout ;
            
    //         let lazyloadImages = document.querySelectorAll(".lazy") ;

    //         lazyLoad = function lazyLoad() {
    //             if(lazyloadThrottleTimeout) {
    //                 clearTimeout(lazyloadThrottleTimeout);
    //               }    
            
    //               lazyloadThrottleTimeout = setTimeout(function() {
    //                 let scrollTop = window.pageYOffset;
    //                 lazyloadImages.forEach(function(img) {
    //                     if(img.offsetTop < (window.innerHeight + scrollTop)) {
    //                       img.src = img.dataset.src ;
    //                       img.classList.remove('lazy') ;
    //                     }
    //                 });
    //                 if( lazyloadImages.length === 0 ) { 
    //                   document.removeEventListener("scroll", lazyLoad ) ;
    //                   window.removeEventListener("resize", lazyLoad ) ;
    //                   window.removeEventListener("orientationChange", lazyLoad );
    //                 }
    //             }, 20) ;
    //         }

    //         document.addEventListener("scroll", lazyLoad);
    //         window.addEventListener("resize", lazyLoad);
    //         window.addEventListener("orientationChange", lazyLoad);
    //     }

    //     return () => {
    //         let lazyloadImages = document.querySelectorAll(".lazy") ;
    //         lazyloadImages.forEach(function(img) {
    //             img.classList.remove('lazy') ;
    //         });
    //         document.removeEventListener("scroll", lazyLoad ) ;
    //         window.removeEventListener("resize", lazyLoad ) ;
    //         window.removeEventListener("orientationChange", lazyLoad ) ;
    //     }
          
    // }, [ load, data ]) ;

    return (
        <>
            <Seo 
                title={title}
                url={`${DOCUMENT}/${content.id}`}
                description={data && data.description}
                type={type}
                image={image_url}
            />
            <style>
                { modeState === mode.dark ? cssTextDark : cssTextLight }
            </style>
            <Container>
                    { id !== -1 ? 
                    load ? <Loder /> : 
                    error ? <Message text="서버로부터 데이터를 받아올 수 없습니다." />  :
                        (
                        <>
                            <Main>
                                <Title>{title}</Title>
                                <MDEditor.Markdown id="content" source={data && data.text} />
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