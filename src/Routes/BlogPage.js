import React from 'react' ;
import styled from 'styled-components' ;

import MDEditor from '@uiw/react-md-editor' ;

const Container = styled.div`
    width : 100% ;
    
    overflow : hidden ;
`;

const Main = styled.div`
    width : 100% ;

    float : left ;
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

const ButtonContainer = styled.div`

    float : left ;
    width : 100% ;

    display : flex ;
    
    justify-content : center ;
    align-items : center ;
`;

const BlogPage = ({ location : { state : { css, html } } }) => {
    console.log(html) ;
    return (
        <Container>
            <style>
                {css}
            </style>
            <Main>
                <MDEditor.Markdown source={ html || null } />
            </Main>
            <Footer>
                <ContentBox>
                    <ContentTextBox>
                        <ContentText>
                            <Title>이전 글...</Title>
                            <Date>2020-05-23</Date>
                        </ContentText>
                        <ContentText>
                            <Title>지금 글...</Title>
                            <Date>2020-05-23</Date>
                        </ContentText>
                        <ContentText>
                            <Title>다음 글...</Title>
                            <Date>2020-05-23</Date>
                        </ContentText>
                    </ContentTextBox>
                </ContentBox>
                <ButtonContainer>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                </ButtonContainer>
            </Footer>
        </Container>
    );
};

export default BlogPage ;