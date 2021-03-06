import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons' ;
import { Suspense, lazy } from 'react' ;
import Loder from './Loder' ;

import styled from 'styled-components' ;

import Header from './Header' ;

import { 
    HOME,
    DOCUMENT,
    PROFILE,
    PAGE404
} from '../Util/routes' ;
import { darkMode, lightMode } from '../Util/theme' ;
import { mode } from '../Util/util' ;

const { light } = mode ;

const Container = styled.div`
    width : 100% ;
    position : relative ;
`;

const TemplateContainer = styled.div`
    width : 80% ;
    margin : 0 auto ;

    @media ${props => props.theme.tabletS} {
        width : 100% ;
    }
`;

const Footer = styled.footer`

    width : 100% ;
    height : 80px ;
`;

const ModeButton = styled.div`

    width : 35px ;
    height : 35px ;
    
    border-radius : 35px ;

    display : flex ;
    align-items : center ;
    justify-content  : center ;

    position : fixed ;

    z-index : 50 ;
    
    right : 10px ;  
    bottom : 10px ;

    transition : 0.5s all ease-in-out ;

    background-color : ${props => props.modeState === light ? darkMode.backgroundColor : lightMode.backgroundColor} ;
    color : ${props => props.modeState === light ? darkMode.fontColor : lightMode.fontColor} ;

    font-size : 1.3rem ;
`;

const Home = lazy(() => import('../Routes/Home')) ;
const BlogRouter = lazy(() => import('../Routes/BlogRouter')) ;
const Profile = lazy(() => import('../Routes/Profile')) ;
const Page404 = lazy(() => import('../Routes/Page404')) ;

const Template = ({ modeChange, modeState, load }) => {
    return (
        <Container>
            <Router>
                <Header />
                { load ? <Loder /> : <TemplateContainer>
                    <Suspense fallback={<Loder />}>
                        <Switch>
                            <Route path={HOME} exact render={() => <Home modeState={modeState} />} />
                            <Route path={DOCUMENT} render={() => <BlogRouter modeState={modeState} />} />
                            <Route path={PROFILE} component={Profile} />
                            <Route path={PAGE404} component={Page404} />
                            <Redirect path="*" to={PAGE404} />
                        </Switch>
                    </Suspense>
                </TemplateContainer>}
            </Router>
            <ModeButton onClick={modeChange} modeState={modeState}>
                <FontAwesomeIcon icon={modeState === light ? faMoon : faSun } color={ modeState === light ? '#ffee58' : '#ff9800' } />
            </ModeButton>
            <Footer />
        </Container>
    ) ;
} ;

export default Template ;
