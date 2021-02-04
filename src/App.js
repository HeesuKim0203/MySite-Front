import React, { useEffect } from 'react' ;

import Router from './Components/Router' ;
import GlobalStyle from './Components/GlobalStyle' ;
import { axiosApi } from './Util/api';
import { connect } from 'react-redux';
import { createAction } from './Store/store';

function App({ setContents, setPageContents, setDefaultData }) {

  useEffect(() => {

    async function fetchData() {
        try {
            const { 
                data : { 
                    contents 
                } 
            } = await axiosApi.getContents() ;
            
            setDefaultData(contents) ;
            setContents() ;
            setPageContents(contents) ;

        }catch {
            console.log('error') ;
        }finally {
        }
    }

    fetchData() ;

}, []) ;

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

function mapStateToProps(state) {
  const { 
      content : {
           contentsData, select, defaultData
      } 
  } = state ;

  return {
      contentsData,
      defaultData,
      select
  } ;
} ;

function mapDispatchToProps(dispatch) {
  return {
      setContents : () => 
          dispatch(createAction.setContents()),
      setPageContents : contents => 
          dispatch(createAction.setPageContents(contents)),
      setDefaultData : defaultData =>
          dispatch(createAction.setDefaultData(defaultData))
  }
} ;


export default  connect(mapStateToProps, mapDispatchToProps)(App) ;
