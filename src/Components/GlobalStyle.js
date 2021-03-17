import { createGlobalStyle } from 'styled-components' ;
import reset from 'styled-reset' ;

const GlobalStyled = createGlobalStyle`
    ${reset}
    * {
        padding : 0 ;
        margin : 0 ;
        box-sizing : border-box ;
    }
    body {
        font-family : --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
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
        background: rgba(0, 0, 0,.2) ; 
    }
    a {
        color : black ;
        text-decoration : none ;
    }
`;

export default GlobalStyled ;
