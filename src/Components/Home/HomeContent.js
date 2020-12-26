import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;

const Container = styled.div`
    width : 90% ;
    height : 280px ;

    overflow : hidden ;

    margin-right : 10% ;

    box-shadow : 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23) ;
`;

const Img = styled.div`
    width : 100% ;
    height : 240px ;
    float : left ;
`;

const DescriptionContainer = styled.div`
    float : left ;
    width : 100% ;

    border-top : 1.5px solid #999 ;

    overflow : hidden ;
`;

const TextContainer = styled.div`

    position : relative ; 

    float : left ;
    width : 100% ;
    height : 100% ;
    

    padding : 8px ;
`;

const Title = styled.h6`
    float : left ;
    width : 100% ;
    height : 30px ;

    font-weight : 600 ;
    font-size : 18px ;

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    user-select : none ;
`;

const LanguageContainer = styled.div`
    position : absolute ;
    top : 7px ;
    right : 5px ;
`;

const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size : 22px ;
`;

const HomeContent = ({ content }) => {
    const { title } = content ;
    return (
        <Container>
            <Img />
            <DescriptionContainer>
                <TextContainer>
                    <Title>
                        {title}
                    </Title>
                    <LanguageContainer>
                        <StyleFontAwesomeIcon icon={fab.faReact} />
                    </LanguageContainer>
                </TextContainer>
            </DescriptionContainer>
        </Container>
    );
};

export default HomeContent;