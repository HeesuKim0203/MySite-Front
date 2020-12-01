import React from 'react' ;
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom' ;

import Home from '../Routes/Home' ;
import Blog from '../Routes/Blog' ;
import Project from '../Routes/Project' ;
import Profile from '../Routes/Profile' ;
import Header from './Header' ;

import { 
    HOME,
    DOCUMENT,
    PROJECT,
    PROFILE,
    MY
} from '../Util/routes' ;

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path={HOME} exact component={Home} />
            <Route path={DOCUMENT} component={Blog} />
            <Route path={PROJECT} component={Project} />
            <Route path={PROFILE} component={Profile} />
            <Route path={MY} component={Profile} />
            <Redirect path="*" to="/" />
        </Switch>
    </Router>
) ;

