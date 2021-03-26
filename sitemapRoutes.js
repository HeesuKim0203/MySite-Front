import React from 'react' ;
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom' ;

import { 
    HOME,
    DOCUMENT,
    PROFILE,
    MY,
    WRITE
} from './src/Util/routes' ;

const Template = () => {
    return (
            <Router>
                    <Switch>
                        <Route path={HOME} />
                        <Route path={DOCUMENT}  />
                        <Route path={MY} />
                        <Route path={PROFILE}  />
                        <Route path={WRITE} />
                        <Redirect path="*" to={HOME} />
                    </Switch>
            </Router>
    ) ;
} ;

export default Template ;
