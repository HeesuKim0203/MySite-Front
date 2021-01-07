import React, { useContext } from 'react' ;
import styled from 'styled-components' ;

import MDEditor from '@uiw/react-md-editor' ;
import { connect } from 'react-redux';

import ButtonContainer from '../Components/Blog/ButtonContainer' ;
import BlogPageContainer from '../Components/Blog/BlogPageContainer' ;

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

const ContentTextBox = styled.div`
    
    width : 100% ;

    display : flex ;
    flex-direction : column ;
`;

const ContentText = styled.div`
    padding : 10px 20px ;

    display : flex ;
    justify-content : center ;
    align-items : center ;

    cursor : pointer ;

    &:hover {
        background-color : #f5f5f5 ;
    }
`;

const Title = styled.span`
    font-size : 15px ;
    flex : 1 ;

    font-weight : 800 ;

    color : #9e9e9e ;
`;

const Date = styled.span`
    font-size : 12px ;

    color : #cfd8dc ;
`;

const Footer = styled.div`
    width : 100% ;

    float : left ;
`;

const Button = styled.button`
    all : unset ;

    padding : 15px 20px ;

    font-size : 18px ;
    font-weight : 900 ;

    color : ${props => props.select ? '#3949ab' : '#cfd8dc'} ;
    background-color : ${props => props.select ? '#e8eaf6' : '#fff'} ;

    &:hover {
        background-color : #e8eaf6 ;
        color : #3949ab ;
    }
`;

const BlogPage = ({ location : { state }, pageContents,
    pageSelect,
    updatePageSelect }) => {
    const { text : html } = state ;
    console.log(pageContents) ;
    return (
        <Container>
            <Main>
                <MDEditor.Markdown source={ html || null } />
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
                <ButtonContainer 
                    contents={pageContents}
                    select={pageSelect}
                    updateSelect={updatePageSelect}
                />
            </Footer>
        </Container>
    );
};

function mapStateToProps(state) {
    const { pageContents, pageSelect } = state ;
    return {
        pageContents,
        pageSelect
    } ;
} ;

function mapDispatchToProps(dispatch) {
    return {
        updatePageSelect : select => dispatch(createAction.updatePageSelect(select))
    }
} ;

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage) ;