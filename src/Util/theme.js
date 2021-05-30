export const size = {
    laptop : 1400,
    tabletL : 1220,
    tabletS : 1024,
    mobileL : 768,
    mobileS : 468  
}

const WHITE = '#eeeeee' ; 
const BLACK = '#222' ;
const SELECTCOLOR = '#fb9300' ;

const theme = { selectColor : SELECTCOLOR } ;
 
export const darkMode = {
    backgroundColor : BLACK,
    profileBackgroundColor : '#424242',
    fontColor : WHITE,
    aisdeMenuColor : WHITE,
    buttonFontColor : WHITE,
    profileBorderColor : WHITE,
    mobileContentColor : BLACK
} ;
export const lightMode = {
    backgroundColor : WHITE,
    profileBackgroundColor : '#fff',
    fontColor : BLACK,
    aisdeMenuColor : '#424242',
    buttonFontColor : '#343f56',
    profileBorderColor : BLACK,
    mobileContentColor : WHITE
} ;

for( const key in size ) {
    theme[key] = `(max-width : ${size[key]}px)` ;
}

export default theme ;