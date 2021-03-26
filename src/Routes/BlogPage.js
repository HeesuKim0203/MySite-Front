import React, { useEffect } from 'react' ;
import styled from 'styled-components' ;

import MDEditor from '@uiw/react-md-editor' ;
import { connect } from 'react-redux';

import ButtonContainer from '../Components/Blog/ButtonContainer' ;
import BlogPageContainer from '../Components/Blog/BlogPageContainer' ;

import { withRouter } from 'react-router-dom';

import {
    DOCUMENT
} from '../Util/routes' ;
import CommentContainer from '../Components/Blog/CommentContainer';
import { blogPageContentNum } from '../Util/util';
import { createAction } from '../Store/store';

const Container = styled.div`
    width : 100% ;
    
    overflow : hidden ;
`;

const Main = styled.div`
    width : 100% ;

    float : left ;

    padding : 50px 20px ;
`;

const ContentBox = styled.div`
    
`;

const Footer = styled.div`
    width : 100% ;

    float : left ;
`;

const ButtonWrap = styled.div`
    margin-top : 40px ;
`;

const CommentWrap= styled.div`
    width : 100% ;
`;

const BlogPage = ({ pageContents, pageSelect, text, id, pageContentsPotition, updatePageSelect }) => {

    useEffect(() => {

        window.scroll({
            behavior : 'smooth',
            top : 0
        }) ;
        
        updatePageSelect(pageContentsPotition) ;

    }, [ updatePageSelect, pageContentsPotition, id ]) ;

    return (
        <>
            <Container>
                <Main>
                    <MDEditor.Markdown source={ text } />
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
            text : content ? content.text : "",
            id : content ? content.id : -1,
            pageContentsPotition : position 
        } ;
    }, 
    dispatch => ({
        updatePageSelect : (select) => dispatch(createAction.updatePageSelect(select))
    })
)(BlogPage)) ;