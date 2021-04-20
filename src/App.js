import { useEffect, useState } from 'react' ;

import Router from './Components/Router' ;
import GlobalStyle from './Components/GlobalStyle' ;
import { axiosApi } from './Util/api';
import { connect } from 'react-redux';
import { createAction } from './Store/store';

import { ThemeProvider } from 'styled-components' ;
import theme, { darkMode, lightMode } from './Util/theme' ;
import { mode } from './Util/util' ;
import Message from './Components/Message';

function App({ setContents, setPageContents, setDefaultData, setProjectContents }) {

  const { dark, light } = mode ;

  const [ modeState, setModeState ] = useState(light) ;
  const [ load, setLoadStatus ] = useState(false) ;
  const [ error, setError ] = useState('') ;

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
          setError("서버로부터 데이터를 불러 올 수 없습니다. 새로고침 해주세요!") ;
        }finally {
            setLoadStatus(true) ;
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
      { 
        error ? 
        <Message text={error}/>
        : <Router modeChange={modeChange} modeState={modeState} load={load} /> 
      }
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
