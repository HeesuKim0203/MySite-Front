import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faTimes } from '@fortawesome/free-solid-svg-icons' ;

const Container = styled.div`
    width : 130px ;

    border-radius : 20px ;

    &:not(:last-child) {
        margin-right : 20px ;
    }

    @media ${props => props.theme.laptop} {
        width : 110px ;
        &:not(:last-child) {
            margin-right : 20px ;
        }
    }
    @media ${props => props.theme.mobileL} {
        width : 40px ;
        &:not(:last-child) {
            margin-right : 8px ;
        }
    }
    @media ${props => props.theme.mobileS} {
        width : 35px ;
        &:not(:last-child) {
            margin-right : 6px ;
        }
    }
`;

const Img = styled.div`
    width: 100% ;
    height : 100px ;

    margin : 5px auto 0 auto ;

    border-radius : 100px ;

    background-color : #dbdbdb ;

    display : flex ;

    justify-content : center ;
    align-items : center ;

    @media ${props => props.theme.laptop} {
        height : 80px ;
        border-radius : 80px ;
    }
    @media ${props => props.theme.mobileL} {
        height : 40px ;
        border-radius : 40px ;
    }
    @media ${props => props.theme.mobileS} {
        height : 35px ;
        border-radius : 35px ;
    }
`;

const TextContainer = styled.div`
    margin-top : 12px ;

    text-align : center ;

    /* @media ${props => props.theme.mobileL} {
        font-size : 11px ;
    } */
    @media ${props => props.theme.mobileS} {
        font-size : 7px ;
    }
`;

const Text = styled.span`
    font-weight : 700 ;

    user-select : none ;
`;

const XIconContainer = styled.div`
    text-align : right ;
    padding-right : 30px ;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`

    font-size : 56px ;

    @media ${props => props.theme.laptop} {
        font-size : 45px ;
    }
    @media ${props => props.theme.mobileL} {
        font-size : 30px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 16px ;
    }
`;

const DeleteIcon = styled(FontAwesomeIcon)`
    font-size : 10px ;
`;

const LanguageContent = ({ data, token }) => {

    const { text, icon } = data ;

    function onClickDelete() {
        // delete ;
    }

    return (
        <Container>
            <XIconContainer>
                {token ?  <DeleteIcon icon={faTimes} /> : null }
            </XIconContainer>
            <Img>
                <StyledFontAwesomeIcon icon={icon} />
            </Img>
            <TextContainer>
                <Text>{text}</Text>
            </TextContainer>
        </Container>
    );
};

export default LanguageContent;