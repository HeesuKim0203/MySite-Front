import Router from './Components/Router' ;
import GlobalStyle from './Components/GlobalStyle' ;

import { axiosApi } from './Util/api';
import { connect } from 'react-redux';
import { createAction } from './Store/store';
import { useEffect } from 'react';

function App({ setDefaultData }) {

  useEffect(() => {

    async function fetchData() {
      try {
            const { 
                data : { 
                    contents 
                } 
            } = await axiosApi.getContents() ;        
            setDefaultData(contents) ;
        }catch {
            console.log('error') ;
        }finally {
            
        }
    }
    fetchData() ;
  }, [ setDefaultData ]) ;

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
      setDefaultData : defaultData =>
          dispatch(createAction.setDefaultData(defaultData)),
  }
} ;

export default  connect(null, mapDispatchToProps)(App) ;
