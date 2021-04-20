import React from 'react' ;
import { BrowserRouter as Route, Switch } from 'react-router-dom' ;

import { 
    HOME,
    DOCUMENT,
    PROFILE,
    PAGE404,
} from './src/Util/routes' ;

export default (ldList) => {
    return (
        <Switch>
            <Route path={HOME} />
            <Route path={DOCUMENT}  />
            {
                ldList.map((id, index) => <Route key={index} path={`${DOCUMENT}/${id}`} />)
            }
            <Route path={PROFILE}  />
            <Route path={PAGE404} />
        </Switch>
    )
} ;
