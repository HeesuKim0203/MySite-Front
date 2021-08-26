import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { useState } from 'react';

const Wrap = styled.div`
    width : 105px ;
    height : 150px ;

    float : left ;

    cursor : pointer ;

    &:not(:last-child) {
        margin-right : 13px ;
    }

    @media ${props => props.theme.mobileL} {
        width : 100px ;
        height : 130px ;
    }

    @media ${props => props.theme.mobileS} {
        width : 70px ;
        height : 90px ;
    }
`;

const Container = styled.div`
    width : 100% ;
    height : 105px ;

    @media ${props => props.theme.mobileL} {
        height : 100px ;
    }

    @media ${props => props.theme.mobileS} {
        height : 70px ;
    }
`;

const Img = styled.div`
    width: 100% ;
    height : 100% ;

    border-radius : 100% ;

    background-color : #eeeeee ;
    box-shadow : #b3e5fc 0px 3px 12px, #bdbdbd 0px 2px 8px 0px  ;

    display : flex ;

    flex-direction : column ;

    justify-content : center ;
    align-items : center ;

    float : left ;
`;

const TextContainer = styled.div`
    width : 100% ;

    margin-top : 12px ;

    float : left ;
    text-align : center ;

    @media ${props => props.theme.mobileL} {
        margin-top : 5px ;
    }
    @media ${props => props.theme.mobileS} {
        margin-top : 0 ;
    }
`;

const Text = styled.span`

    font-weight : 600 ;
    user-select : none ;

    font-family : 'Roboto', sans-serif ;

    color : ${props => props.theme.color.fontColor} ;

    font-size : 14px ;

    @media ${props => props.theme.mobileS} {
        font-size : 11px ;
    }
`;

const TextData = styled.span`
    display : block ;

    font-family : 'Roboto', sans-serif ;

    font-size : 15px ;
    font-weight : 600 ;

    float : left ;

    color : ${ props => props.color || '#111' } ;
    user-select : none ;

    &:first-child {
        font-size : 22px ;
        font-weight : 700 ;
    }

    &:not(:last-child) {
        margin-bottom : 3px ;
    }

    @media ${props => props.theme.mobileS} {
        font-size : 11px ;

        &:first-child {
            font-size : 18px ;
            font-weight : 700 ;
        }
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`

    font-size : 48px ;

    @media ${props => props.theme.mobileL} {
        font-size : 42px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 32px ;
    }
    
`;

const LanguageContent = ({ menu }) => {

    const { text, icon, color, project, rating } = menu ;

    const [ textMode, setTextMode ] = useState(true) ;  

    function onClickLanguage(e) {
        setTextMode(!textMode) ;
    }

    return (
        <Wrap>
            <Container>
                <Img onClick={onClickLanguage}>
                    {textMode ? 
                        <StyledFontAwesomeIcon icon={icon} color={color} /> : 
                        (
                        <>
                            <TextData color={rating[1]} >{rating[0]}</TextData>
                            <TextData>Project {project}</TextData>
                        </>
                        )
                    }
                </Img>
                <TextContainer>
                    <Text>{text}</Text>
                </TextContainer>
            </Container>
        </Wrap>
    );
};

export default LanguageContent;