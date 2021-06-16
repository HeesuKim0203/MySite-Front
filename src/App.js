import { useEffect, useState } from 'react' ;

import Router from './Components/Router' ;
import GlobalStyle from './Components/GlobalStyle' ;

import { ThemeProvider } from 'styled-components' ;
import theme, { darkMode, lightMode } from './Util/theme' ;
import { mode, ApiHooks } from './Util/util' ;
import { getContents, checkVisitor } from './Util/api' ;
import { connect } from 'react-redux' ;
import { createAction } from './Store/store' ;
import Message from './Components/Message';

function App({ contentsData, setDefaultData, setPageContents }) {

  const { dark, light } = mode ;
  const cookieViewMode = window.localStorage.getItem('view_mode') ;
  const seessionStorage = window.sessionStorage.getItem('visited') ;
  const { data, error, load, getData } = ApiHooks(getContents) ;

  const [ modeState, setModeState ] = useState(light) ;

  function modeChange(e) {
    setModeState(modeState === light ? dark : light) ;
  }

  useEffect(() => {

    if(!seessionStorage) getData() ;
    else getData(false) ;

    if(cookieViewMode)
      cookieViewMode === dark ? setModeState(dark) : setModeState(light) ;
    else
      window.localStorage.setItem('view_mode', modeState) ;

    checkVisitor() ;
  }, []) ;

  useEffect(() => {
    window.localStorage.setItem('view_mode', modeState) ;
  }, [ modeState ]) ;

  useEffect(() => {
    
  if(!contentsData.length && data.length && !seessionStorage) {
    window.sessionStorage.setItem('visited', true) ;
    window.sessionStorage.setItem('content_data', JSON.stringify(data)) ;
    setDefaultData(data) ;
    setPageContents(data) ;
  } else if(seessionStorage) {
    const data = JSON.parse(window.sessionStorage.getItem('content_data')) ;
    setDefaultData(data) ;
    setPageContents(data) ;
  }

  }, [ data ]) ;

  return (
    <ThemeProvider theme={
        (modeState === light ? 
          () => {theme.color=lightMode ; return theme} : 
          () => {theme.color=darkMode ; return theme}
        )()}>
      <GlobalStyle modeState={modeState} />
      { 
        error ? <Message text={"서버로 부터 데이터를 불러올 수 없습니다."}/>
        : <Router modeChange={modeChange} modeState={modeState} load={load}/> 
      }
    </ThemeProvider>
  );
}


export default connect( 
  ({ 
  content : { contentsData }
  }) => ({
    contentsData
  }), dispatch => ({
  setPageContents : contents => 
      dispatch(createAction.setPageContents(contents)),
  setDefaultData : defaultData =>
      dispatch(createAction.setDefaultData(defaultData)),
}))(App) ;
