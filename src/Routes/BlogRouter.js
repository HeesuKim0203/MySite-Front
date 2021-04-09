import { Route } from 'react-router-dom' ;
import styled from 'styled-components' ;
import Helmet from 'react-helmet' ;

import AsideMenu from '../Components/Blog/AsideMenu' ;
import {
    DOCUMENT,
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
`;

const MainContainer = styled.div`
    float : left ;
    width : 82% ;
    overflow : hidden ;

    @media ${props => props.theme.tabletL} {
        width : 100% ;
    }
`;

const BlogRouter = ({ modeState }) => {

    const asideData = asideTitle.map((asideData, index) => {
        return {
            title : asideData,
            menu : coreData[index],
        } ;
    }) ;

    return (
        <>
            <Helmet>
                <title>Blog | Beginner</title>
            </Helmet>
            <Container>
                <AsideMenuContainer>
                    <AsideMenu asideData={asideData} />
                </AsideMenuContainer>
                <MainContainer>
                    <Route exact path={DOCUMENT} component={Blog} />
                    <Route path={`${DOCUMENT}/:id`} render={() => <BlogPage modeState={modeState} />} /> 
                </MainContainer>
            </Container>
        </>
    ) ; 
} ;

export default BlogRouter ;