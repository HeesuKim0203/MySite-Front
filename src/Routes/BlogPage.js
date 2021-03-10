import React, { useState, useEffect } from 'react' ;
import styled from 'styled-components' ;

import MDEditor from '@uiw/react-md-editor' ;
import { connect } from 'react-redux';

import ButtonContainer from '../Components/Blog/ButtonContainer' ;
import BlogPageContainer from '../Components/Blog/BlogPageContainer' ;

import { Redirect, withRouter } from 'react-router-dom';

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
        updatePageSelect(pageContentsPotition) ;
    }, []) ;

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

function mapStateToProps(state, stateAll) {

    const { 
        content : {
            pageContents, pageSelect, defaultData, pageButtonsData
        }
    } = state ;

    const {
        location : {
            pathname
        }
    } = stateAll ;

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
} ;

function mapDispatchToProps(dispatch) {
    return {
        updatePageSelect : select => dispatch(createAction.updatePageSelect(select))
    }
} ;


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogPage)) ;