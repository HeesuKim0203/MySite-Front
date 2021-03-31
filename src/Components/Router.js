import React from 'react' ;
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;

import styled from 'styled-components' ;

import Header from './Header' ;
import Profile from '../Routes/Profile' ;
import Write from '../Routes/Write' ;
import Me from '../Routes/Me' ;

import { 
    HOME,
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
                        <Route path={MY} component={Me} />
                        <Route path={HOME} exact component={Profile} />
                        <Route path={WRITE} component={Write} />
                    </Switch>
                </TemplateContainer>
            </Router>
            <Footer />
        </Container>
    ) ;
} ;

export default withCookies(Template) ;
