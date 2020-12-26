import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;


const Container = styled.div`

    width : 97% ;
    height : 300px ;
    overflow : hidden ;

    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23) ;

    &:nth-child(2n) {
        margin-left : 3% ;
    }
`;

const Img = styled.div`
    width : 100% ;
    height : 260px ;

    border-bottom : 1.5px solid #999 ;
    float : left ;

    padding : 10px ;
`;

const TextContainer = styled.div`
    position : relative ;
    width : 100% ;
    height : 40px ;

    float : left ;
    display : flex ;
    
    align-items : center ;
    justify-content : center ;

    padding : 0 20px ;
`;

const Date = styled.span`
    color : #bdbdbd ;
    font-size : 12px ;

    user-select : none ;
`;

const TitleContainer = styled.div`
    width : 100% ;
    flex : 1 ;
`;

const Title = styled.h5`
    font-size : 20px ;
    font-weight : 600 ;

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    user-select : none ;
`;

const LanguageContainer = styled.div`
`;

const Language = styled.div`
`;

const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
    display : inline-block ;

    margin-right : 5px ;
    font-size : 20px ;
`;

const ProjectContent = ({ content }) => {
    const { date, title, description } = content ;
    return (
        <Container>
            <Img>
                <Date draggable="false">{date}</Date>
            </Img>
            <TextContainer>
                <TitleContainer>
                    <Title draggable="false">{title}</Title>
                </TitleContainer>
                <LanguageContainer>
                    <Language>
                        <StyleFontAwesomeIcon icon={fab.faReact} />
                        <StyleFontAwesomeIcon icon={fab.faJsSquare} />
                        <StyleFontAwesomeIcon icon={fab.faHtml5} />
                        <StyleFontAwesomeIcon icon={fab.faCss3Alt} />
                    </Language>
                </LanguageContainer>
            </TextContainer>
        </Container>
    );
};

export default ProjectContent;