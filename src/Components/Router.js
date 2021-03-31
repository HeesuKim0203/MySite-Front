import React from 'react' ;
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom' ;

import styled from 'styled-components' ;

import Header from './Header' ;
import Home from '../Routes/Home' ;
import BlogRouter from '../Routes/BlogRouter' ;
import Profile from '../Routes/Profile' ;

import { 
    HOME,
    DOCUMENT,
    PROFILE,
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

    @media ${props => props.theme.mobileS} {
        width : 100% ;
    }
`;

const Footer = styled.footer`

    width : 100% ;
    height : 80px ;
`;

const Template = () => {
    return (
        <Container>
            <Router>
                <Header />
                <TemplateContainer>
                    <Switch>
                        <Route path={HOME} exact component={Home} />
                        <Route path={DOCUMENT} component={BlogRouter} />
                        <Route path={PROFILE} component={Profile} />
                        <Redirect path="*" to={HOME} />
                    </Switch>
                </TemplateContainer>
            </Router>
            <Footer />
        </Container>
    ) ;
} ;

export default withCookies(Template) ;
