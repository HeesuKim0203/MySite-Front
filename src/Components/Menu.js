import React from 'react' ;
import { Link } from 'react-router-dom' ;

import styled from 'styled-components' ;

const GRAY_1 = '#bdbdbd' ;

const Container = styled.li`
    width : 130px ;
    height : 58px ;

    display : flex ;
    
    justify-content : center ;
    align-items : center ;
    
    box-sizing : content-box ;

    &:not(:last-child) {
        padding-right : 2% ;
    }
`;

const StyledLinked = styled(Link)`
    text-align : center ;

    color : ${props => props.active} ;
    user-select : none ;
`;

const Menu = ({ children, active, path }) => {

    return (
        <Container>
            <StyledLinked 
                to={path}
                active={active? GRAY_1 : '#fff' }
                draggable="false"
            >
                {children}
            </StyledLinked>
        </Container>
    );
};

export default Menu ;