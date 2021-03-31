import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faSpinner } from '@fortawesome/free-solid-svg-icons' ;

const Container = styled.div`
    position : absolute ;
    
    top : 0 ;
    left : 0 ;
    
    background-color : white ;

    width : 100% ;
    height : 100% ;

    display : flex ;
    
    justify-content : center ;
    align-items : center ;

    z-index : 999 ;
`;

const LoaderDiv = styled.div`
    position : relative ;
    
    z-index : 1000 ;
`;

const Loader = () => {
    return (
        <Container>
            <LoaderDiv>
                <FontAwesomeIcon icon={faSpinner} pulse size="3x" color="#fff" />
            </LoaderDiv>
        </Container>
    );
};

export default Loader;