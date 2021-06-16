import { createGlobalStyle } from 'styled-components' ;
import reset from 'styled-reset' ;

import { lightMode, darkMode } from '../Util/theme' ;

const GlobalStyled = createGlobalStyle`
    ${reset}
    * {
        padding : 0 ;
        margin : 0 ;
        box-sizing : border-box ;
    }
    body {
        font-family : --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
        background-color : ${props => props.modeState === 'light' ? lightMode.backgroundColor : darkMode.backgroundColor }  ;
    }
    body::-webkit-scrollbar {
        width : .4em ;  
        margin : 0 ;
        padding : 0 ;
    }
    body::-webkit-scrollbar,
    body::-webkit-scrollbar-thumb {
        overflow : visible ;
        border-radius : 4px ;
    }
    body::-webkit-scrollbar-thumb {
        background: ${props => props.modeState === 'dark' ? '#dbdbdb' : 'rgba(0, 0, 0,.2)' }  ;
    }
    a {
        color : black ;
        text-decoration : none ;
    }

    .dark {
        color : #e0e0e0 !important ;
        code {
            background-color : #e0e0e0 !important ;
            color : #111 !important ;
        }
    }

`;

export default GlobalStyled ;
