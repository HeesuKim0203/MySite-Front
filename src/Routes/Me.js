import React from 'react' ;
import styled from 'styled-components' ;
import { Link } from 'react-router-dom' ;

import {
    WRITE
} from '../Util/routes' ;

const Container = styled.div`

`;

const Button = styled.button`
    all : unset ;
    
    width : 150px ;
    height : 40px ;
    
    border-radius : 20px ;
    border : 1px solid #111 ;

    text-align : center ;
`;

const Me = () => {
    return (
        <Container>
            <Link to={WRITE}>
                <Button>Write</Button>
            </Link>
        </Container>
    );
};

export default Me;