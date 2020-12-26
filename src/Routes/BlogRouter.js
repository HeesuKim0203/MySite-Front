import React from 'react';
import { Route } from 'react-router-dom' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;
import { fas, faSearch } from '@fortawesome/free-solid-svg-icons' ;

import AsideMenu from '../Components/Blog/AsideMenu' ;
import {
    DOCUMENT
} from '../Util/routes' ;

import Blog from './Blog' ;
import BlogPage from './BlogPage' ;

import { axiosApi } from '../Util/api' ;  

const Container = styled.div`
    width : 100% ;

    overflow : hidden ;
`;

const AsideMenuContainer = styled.div`
    float : left ;

    width : 18% ;
`;

const MainContainer = styled.div`
    float : left ;
    width : 82% ;
    overflow : hidden ;
`;


const SearchContainer = styled.div`
    float : left ;

    margin-top : 30px ;

    width : 100% ;
    height : 60px ;

    display : flex ;
    
    align-items : center ;

    overflow : hidden ;

    @media ${props => props.theme.laptop} {
        height : 40px ;
    }
`;

const FontAwesomeIconContainer = styled.div`
    position : absolute ;

    top : 15px ;
    right : 5px ;

    @media ${props => props.theme.laptop} {
        top : 8px ;
    }
`;

const Form = styled.form`
    float : left ;

    position : relative ;

    width : 100% ;

    margin-right : 50px ;

    font-family: 'Ubuntu', sans-serif ;

    display : flex ;
    
    flex-direction : row-reverse ;
    align-items : center ;

    @media ${props => props.theme.laptop} {
        margin-right : 35px ;
    }
`;

const SearhInput = styled.input`
    all : unset ;

    width : 330px ;
    height : 43px ;

    float : left ;

    font-weight : 700 ;

    font-size : 20px ;
    color : #424242 ;

    border-bottom : 2px solid  #424242 ;
    padding-left : 3px ;

    &:focus {
        background-color : #f5f5f5 ;
    }

    &::placeholder {
        color : #dbdbdb ;
    }

    @media ${props => props.theme.laptop} {
        font-size : 18px ;
        width : 280px ;
        height : 30px ;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size : 16px ;

    color : #9e9e9e ;

    &:hover {
        color : #3949ab ;
    }
`;

const BlogRouter = () => {

    const asideData = [
        {
            title : '프로그래밍 언어',
            menu : [
                { text : 'React' , icon : fab.faReact },
                { text : 'JS' , icon : fab.faJsSquare },
                { text : 'HTML' , icon : fab.faHtml5 },
                { text : 'CSS3' , icon : fab.faCss3Alt },
            ]
        },
        {
            title : '잡담',
            menu : [
                { text : '일상' , icon : fas.faWalking },
                { text : '이모저모' , icon : fas.faComments },
                { text : '여행기' , icon : fas.faHiking },
            ]
        },
    ] ;

    return (
        <Container>
             <AsideMenuContainer>
                <AsideMenu asideData={asideData} />
            </AsideMenuContainer>
            <MainContainer>
                <SearchContainer>
                    <Form>
                        <FontAwesomeIconContainer>
                            <StyledFontAwesomeIcon icon={faSearch}  size="2x" />
                        </FontAwesomeIconContainer>
                        <SearhInput placeholder="게시물 검색.." />
                    </Form>
                </SearchContainer>
                <Route exact path={DOCUMENT} component={Blog} />
                <Route path={`${DOCUMENT}/:id`} component={BlogPage} />
            </MainContainer>
        </Container>
    ) ; 
} ;

export default BlogRouter;