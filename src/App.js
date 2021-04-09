import { useEffect, useState } from 'react' ;

import Router from './Components/Router' ;
import GlobalStyle from './Components/GlobalStyle' ;
import { axiosApi } from './Util/api';
import { connect } from 'react-redux';
import { createAction } from './Store/store';

import { ThemeProvider } from 'styled-components' ;
import theme, { darkMode, lightMode } from './Util/theme' ;
import { mode } from './Util/util' ;

function App({ setContents, setPageContents, setDefaultData, setProjectContents }) {

  const { dark, light } = mode ;

  const [ modeState, setModeState ] = useState(light) ;

  function modeChange(e) {
    setModeState(modeState === light ? dark : light) ;
  }

  useEffect(() => {

    function checkVisitor() {
      axiosApi.checkVisitor() ;
      return ;
    }

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
    checkVisitor() ;
  }, [ setDefaultData, setContents, setPageContents, setProjectContents ]) ;

  return (
    <ThemeProvider theme={
        (modeState === light ? 
          () => {theme.color=lightMode ; return theme} : 
          () => {theme.color=darkMode ; return theme}
        )()}>
      <GlobalStyle modeState={modeState} />
      <Router modeChange={modeChange} modeState={modeState} />
    </ThemeProvider>
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
  }
} ;


export default  connect(null, mapDispatchToProps)(App) ;
