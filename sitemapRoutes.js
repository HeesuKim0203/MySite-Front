import React from 'react' ;
import { BrowserRouter as Route } from 'react-router-dom' ;

import { 
    HOME,
    DOCUMENT,
    PROFILE,
} from './src/Util/routes' ;

export default (ldList) => {
    return (
        <Route>
            <Route path={HOME} />
            <Route path={DOCUMENT}  />
            {
                ldList.map((id, index) => <Route key={index} path={`${DOCUMENT}/${id}`} />)
            }
            <Route path={PROFILE}  />
        </Route>
    )
} ;
