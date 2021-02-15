export const size = {
    laptop : 1400,
    tabletL : 1220,
    tabletS : 1024,
    mobileL : 768,
    mobileS : 468  
}

const theme = {} ;

for( const key in size ) {
    theme[key] = `(max-width : ${size[key]}px)` ;
}

export default theme ;