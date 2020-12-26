import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;

const Container = styled.div`
    position : fixed ;
    
    top : 60% ;
    right : 4% ;

    width : 110px ;
    box-sizing : content-box ;

`;

const MenuContainer = styled.ul`
    width : 100% ;

    padding : 2px 10px ;

    background-color : #f4f4f2 ;

    border-radius : 10px ;
`;

const Menu = styled.li`
    width : 100% ;
    padding : 5px 0 ;

    user-select : none ;
    cursor : pointer ;

    &:hover {
        color : #495464 ;
    }
`;

const MenuText = styled.span`
    font-size : 12px ;
`;

const UpContainer = styled.div`
    /* width : 60% ; */

    margin-left : 40% ;
    margin-top : 10px ;
/* 
    padding : 5px 0 ;

    background-color : #f4f4f2 ;

    border : 2px solid #f4f4f2 ;
    border-radius : 10px ;

    text-align : center ; */
`;

// const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
//     font-size : 20px ;
// `;

const CheckBox = styled.input`
    
    padding-right : 10px ;
`;

const FixedMenu = () => {
    const data = [
        {
            text : 'HTML'
        },
        {
            text : 'CSS'
        },
        {
            text : 'JAVASCRIPT'
        },
        {
            text : 'REACT'
        },
    ]
    return (
        <Container>
            <MenuContainer>
                {data.map((obj, index) =>(
                    <Menu key={index}>
                        <MenuText>
                            <CheckBox type="checkbox" />
                            {obj.text}
                        </MenuText>
                    </Menu>
                ))}
            </MenuContainer>
            <UpContainer>
                {/* <StyleFontAwesomeIcon icon={fas.faArrowCircleUp} /> */}
            </UpContainer>
        </Container>
    );
};

export default FixedMenu;