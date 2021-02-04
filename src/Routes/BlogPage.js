import React from 'react' ;
import styled from 'styled-components' ;

import MDEditor from '@uiw/react-md-editor' ;
import { connect } from 'react-redux';

import ButtonContainer from '../Components/Blog/ButtonContainer' ;
import BlogPageContainer from '../Components/Blog/BlogPageContainer' ;

import { withRouter } from 'react-router-dom';

import {
    DOCUMENT
} from '../Util/routes' ;

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

const BlogPage = ({ location : { pathname }, pageContents, pageSelect, defaultData }) => {

    return (
        <Container>
            <Main>
                <MDEditor.Markdown source={ defaultData[pathname.replace(`${DOCUMENT}/`, "")].text || "" } />
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
                <ButtonContainer />
            </Footer>
        </Container>
    );
};

function mapStateToProps(state) {
    const { 
        content : {
            pageContents, pageSelect, defaultData
        } 
    } = state ;

    return {
        pageContents,
        pageSelect,
        defaultData
    } ;
} ;


export default withRouter(connect(mapStateToProps, null)(BlogPage)) ;