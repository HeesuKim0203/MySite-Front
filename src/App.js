import React, { useEffect } from 'react' ;

import Router from './Components/Router' ;
import GlobalStyle from './Components/GlobalStyle' ;
import { axiosApi } from './Util/api';
import { connect } from 'react-redux';
import { createAction } from './Store/store';

function App() {

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default  App ;
