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

import { 
    coreData, 
    asideTitle 
} from '../Util/util' ;  

const Container = styled.div`
    width : 100% ;

    overflow : hidden ;
    
`;

const AsideMenuContainer = styled.div`
    float : left ;

    width : 18% ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
    }
    @media ${props => props.theme.mobileS} {
       
    }
`;

const MainContainer = styled.div`
    float : left ;
    width : 82% ;
    overflow : hidden ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
    }
    @media ${props => props.theme.mobileS} {
       
    }
`;

const BlogRouter = () => {

    const asideData = asideTitle.map((asideData, index) => {
        return {
            title : asideData,
            menu : coreData[index],
        } ;
    }) ;

    return (
        <Container>
             <AsideMenuContainer>
                <AsideMenu asideData={asideData} />
            </AsideMenuContainer>
            <MainContainer>
                <Route exact path={DOCUMENT} component={Blog} />
                <Route path={`${DOCUMENT}/:id`} component={BlogPage} />
            </MainContainer>
        </Container>
    ) ; 
} ;

export default BlogRouter ;