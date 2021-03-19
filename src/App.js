import React, { useEffect } from 'react' ;

import Router from './Components/Router' ;
import GlobalStyle from './Components/GlobalStyle' ;
import { axiosApi } from './Util/api';
import { connect } from 'react-redux';
import { createAction } from './Store/store';

function App({ setContents, setPageContents, setDefaultData, setProjectContents }) {

  useEffect(() => {
    function checkVisitor() {
      axiosApi.checkVisitor() ;
      return ;
    }
    checkVisitor() ;
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

            const {
              data : { 
                  projects
              }
          } = await axiosApi.getProjectList() ;
    
          setProjectContents(projects) ;

        }catch {
            console.log('error') ;
        }finally {

        }
    }
    fetchData() ;
  }, [ setDefaultData, setContents, setPageContents, setProjectContents ]) ;

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
      setContents : () => 
          dispatch(createAction.setContents()),
      setPageContents : contents => 
          dispatch(createAction.setPageContents(contents)),
      setDefaultData : defaultData =>
          dispatch(createAction.setDefaultData(defaultData)),
      setProjectContents : defaultData =>
          dispatch(createAction.setProjectContents(defaultData))
  }
} ;


export default  connect(null, mapDispatchToProps)(App) ;
