import React from 'react' ;
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom' ;

import styled from 'styled-components' ;

import Header from './Header' ;
import Home from '../Routes/Home' ;
import Blog from '../Routes/BlogRouter' ;
import Profile from '../Routes/Profile' ;
import Write from '../Routes/Write' ;
import Me from '../Routes/Me' ;

import { 
    HOME,
    DOCUMENT,
    PROFILE,
    MY,
    WRITE
} from '../Util/routes' ;
import { withCookies } from 'react-cookie' ;

const Container = styled.div`
    width : 100% ;
    position : relative ;
`;

const TemplateContainer = styled.main`
    width : 80% ;
    margin : 0 auto ;

    background-color : #fff ;
`;

const Footer = styled.footer`

    width : 100% ;
    height : 80px ;
`;

const Template = withCookies(withRouter(({ location : { pathname }}) => {
    return (
        <TemplateContainer position={pathname === HOME ? 'static' : 'absolute'} >
            <Route path={HOME} exact component={Home} />
            <Route path={DOCUMENT} component={Blog} />
            <Route path={MY} component={Me} />
            <Route path={PROFILE} component={Profile} />
            <Route path={WRITE} component={Write} />
            <Redirect path="*" to="/" />
        </TemplateContainer>
    ) ;
})) ;

export default () => (
    <Container>
        <Router>
            <Header />
            <Switch>
                <Template/>
            </Switch>
        </Router>
        <Footer />
    </Container>
) ;

