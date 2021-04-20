import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faSpinner } from '@fortawesome/free-solid-svg-icons' ;

const Container = styled.div`
    height : 100vh ;
    width : 100vw ;
    display : flex ;
    justify-content : center ;
    margin-top : 40px ;
`;

const Loder = () => (
    <Container>
        <span role="img" aria-label="Loading">
            <FontAwesomeIcon icon={faSpinner} pulse size="2x"/>
        </span>
    </Container>
) ;

export default Loder ;