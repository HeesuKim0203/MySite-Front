import React from 'react';
import { Route } from 'react-router-dom' ;
import styled from 'styled-components' ;
import Helmet from 'react-helmet' ;

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

    @media ${props => props.theme.tabletL} {
        width : 100% ;
    }
`;

const MainContainer = styled.div`
    float : left ;
    width : 82% ;
    overflow : hidden ;

    @media ${props => props.theme.tabletL} {
        width : 100% ;
    }
`;

const BlogRouter = (props) => {

    console.log(props) ;

    const asideData = asideTitle.map((asideData, index) => {
        return {
            title : asideData,
            menu : coreData[index],
        } ;
    }) ;

    return (
        <>
            <Helmet>
                <title>Code beginner | Blog</title>
            </Helmet>
            <Container>
                <AsideMenuContainer>
                    <AsideMenu asideData={asideData} />
                </AsideMenuContainer>
                <MainContainer>
                    <Route exact path={DOCUMENT} component={Blog} />
                    <Route path={`${DOCUMENT}/:id`} component={BlogPage} />
                </MainContainer>
            </Container>
        </>
    ) ; 
} ;

export default BlogRouter ;