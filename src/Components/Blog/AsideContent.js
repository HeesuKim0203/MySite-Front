import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;

const Title = styled.h6`
    font-size : 22px ;
    font-weight : 700 ;

    color : #424242 ;

    user-select : none ;

    @media ${props => props.theme.laptop} {
        font-size : 20px ;
    }
`;

const BigAisdeMenu = styled.li`
    margin-top : 40px ;

    color : #9e9e9e ;

    user-select : none ;

    cursor : pointer ; 
`;

const AsideMenu = styled.ul`

`;

const Menu = styled.li`
    width : 100% ;

    padding : 15px ;

    display : flex ;

    align-items : center ;

    &:first-child {
        margin-top : 20px ;
    }

    &:hover {
        background-color : #e8eaf6 ;
        color : #3949ab ;
    }
`;

const FontContainer = styled.div`
    width : 30px ;
    height : 30px ;

    display : flex ;

    align-items : center ;
    justify-content : center ;

    @media ${props => props.theme.laptop} {
        height : 25px ;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`

    font-size : 28px ;

    font-weight : 700 ;
`;

const Text = styled.span`
    display : inline-block ;

    padding-left : 20px ;

    font-size : 16px ;

    font-weight : 650 ;
`;

const AsideContent = ({ title, menu }) => {
    
    return (
        <BigAisdeMenu>
            <Title>{title}</Title>
            <AsideMenu>
                { menu && menu.map((menu, index) => 
                    <Menu key={index}>
                        <FontContainer>
                            <StyledFontAwesomeIcon icon={menu.icon}/>
                        </FontContainer>
                        <Text>{menu.text}</Text>
                    </Menu>
                )}
            </AsideMenu>
            
        </BigAisdeMenu>
    );
};

export default AsideContent;