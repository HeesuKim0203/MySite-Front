import { createGlobalStyle } from 'styled-components' ;
import reset from 'styled-reset' ;

const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
    ${reset}
    * {
        padding : 0 ;
        margin : 0 ;
        box-sizing : border-box ;
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
