import React from 'react' ;
import { Link } from 'react-router-dom' ;

import styled from 'styled-components' ;

const Container = styled.li`
    width : 200px ;
    height : 58px ;

    display : flex ;
    
    justify-content : center ;
    align-items : center ;
    
    box-sizing : content-box ;

    &:not(:last-child) {
        padding-right : 2% ;
    }

    @media ${props => props.theme.mobileL} {
        width : 150px ;
        font-size : 14px ;
        height : 45px ;
    }
    @media ${props => props.theme.mobileS} {
        width : 80px ;
        font-size : 13px ;
        height : 40px ;
    }
`;

const StyledLinked = styled(Link)`
    text-align : center ;


    user-select : none ;

    color : #fff ;
`;

const Menu = ({ children, path }) => {

    return (
        <Container>
            <StyledLinked 
                to={path}
                draggable="false"
            >
                {children}
            </StyledLinked>
        </Container>
    );
};

export default Menu ;