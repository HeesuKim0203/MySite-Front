import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;

const Container = styled.div`
    width : 80px ;
    height : 120px ;

    float : left ;

    &:not(:last-child) {
        margin-right : 20px ;

        @media ${props => props.theme.mobileL} {
            margin-right : 10px ;
        }
    }

    @media ${props => props.theme.mobileL} {
        width : 65px ;
        height : 100px ;
    }

    @media ${props => props.theme.mobileS} {
        width : 60px ;
        height : 90px ;
    }
`;

const Img = styled.div`
    width: 100% ;
    height : 80px ;

    margin : 5px auto 0 auto ;

    border-radius : 100px ;

    background-color : #dbdbdb ;

    display : flex ;

    justify-content : center ;
    align-items : center ;

    float : left ;

    @media ${props => props.theme.mobileL} {
        height : 60px ;
    }
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

    font-size : 14px ;

    @media ${props => props.theme.mobileL} {
        font-size : 11px ;
        font-weight : 500 ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 10px ;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`

    font-size : 52px ;

    @media ${props => props.theme.mobileL} {
        font-size : 38px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 34px ;
    }
    
`;

const LanguageContent = ({ menu }) => {

    const { text, icon, color } = menu ;

    return (
        <Container>
            <Img>
                <StyledFontAwesomeIcon icon={icon} color={color} />
            </Img>
            <TextContainer>
                <Text>{text}</Text>
            </TextContainer>
        </Container>
    );
};

export default LanguageContent;