import React from 'react' ;
import styled from 'styled-components' ;

import AsideContent from './AsideContent' ;

const Title = styled.h6`
    font-size : 28px ;
`;

const Container = styled.div`
    width : 100% ;

    font-family: 'Ubuntu', sans-serif ;

    padding : 15px 5px ;

    ${Title} {
        font-weight : 650 ;
    }
`;

const BigAsideMenuContainer = styled.ul`

`;

const AsideMenu = ({ asideData }) => {
    return (
        <Container>
            <BigAsideMenuContainer>
                {asideData && asideData.map((aside, index) => {
                    return (
                        <AsideContent  
                            key={index}
                            title={aside.title}
                            menu={aside.menu}
                        />
                    ) ;
                })}
            </BigAsideMenuContainer>
        </Container>
    );
};

export default AsideMenu;