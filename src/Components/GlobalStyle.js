import { createGlobalStyle } from 'styled-components' ;
import reset from 'styled-reset' ;

import { lightMode, darkMode } from '../Util/theme' ;

const GlobalStyled = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap') ;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap') ;
    // link로 변경
    * {
        padding : 0 ;
        margin : 0 ;
        box-sizing : border-box ;
    }
    body {
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
