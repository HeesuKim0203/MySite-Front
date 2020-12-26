const size = {
    laptop : '1400px',
    tabletL : '1220px',
    tabletS : '1024px',
    mobileL : '768px',
    mobileS : '468px'  
}

const theme = {
    mobileS : `(max-width : ${size.mobileS})`,
    mobileL : `(max-width : ${size.mobileL})`,
    tabletS : `(max-width : ${size.tabletS})`,
    tabletL : `(max-width : ${size.tabletL})`,
    laptop : `(max-width : ${size.laptop})`,
} ;

export default theme ;