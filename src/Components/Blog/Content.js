import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;

import { faSquareFull } from '@fortawesome/free-solid-svg-icons' ;

import { searchCoreData } from '../../Util/util' ;

const Title = styled.h5`
    font-size : 16px ;
    font-weight : 550 ;

    width : 100% ;
    height : 40px ;

    margin-top : 15px ;

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    user-select : none ;

    font-family : 'Montserrat', sans-serif ;

    @media ${props => props.theme.laptop} {
        font-size : 16px ;
        margin-top : 10px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 14px ;
    }
`;

const Container = styled.div`
    width : 70% ;
    overflow : hidden ;

    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);

    cursor : pointer ;

    &:hover {
        ${Title} { 
            color : rgb(138, 37, 255) ;
            text-decoration : underline ;
        }
    }

    &:nth-child(3n-2) {
        margin-left : 10% ;
        @media ${props => props.theme.mobileS} {
            margin-left : 0 ;
        }
    }
    &:nth-child(3n - 1) {
        margin-left : 5% ;
        @media ${props => props.theme.mobileS} {
            margin-left : 0 ;
        }
    }

    @media ${props => props.theme.mobileS} {
        width : 100% ;
        height : 140px ;

        box-shadow: none ;
        padding : 8px 8px 0 5px ;
       
        border-bottom : 1px solid #999 ;
        border-top : 1px solid #999 ;

        &:hover {
            ${Title} { 
                color : #111 ;
                text-decoration : none ;
            }
        }
    }
`;

const Img = styled.div`
    width : 100% ;
    height : 220px ;

    background-image : url(${props=>props.url}) ;
    background-repeat : no-repeat ;
    background-position : center center ;
    background-size : cover ;

    float : left ; 

    @media ${props => props.theme.laptop} {
        height : 160px ;
    }
    @media ${props => props.theme.mobileS} {
        border : 1px solid #eeeeee ;
        border-radius : 7px ;
        
        width : 40% ;

        float : right ;

        height : 120px ;
    }
`;

const Code = styled.div`
    position : absolute ;
    top : 0 ;
    right : 0 ;

    @media ${props => props.theme.mobileS} {

        top : 45px ;
        left : 2px ;
    }
`;

const TextContainer = styled.div`
    width : 100% ;

    padding : 12px ;

    float : left ;

    @media ${props => props.theme.laptop} {
        padding : 10px 7px ;
    }
    @media ${props => props.theme.mobileS} {
        padding : 8px 7px ;

        width : 50% ;
    }

`;

const HeadContainer = styled.div`
    width : 100% ;

    position : relative ;
`;

const Date = styled.span`
    color : #bdbdbd ;
    font-size : 11px ;

    padding-left : 5px ;

    user-select : none ;

    font-family : 'Montserrat', sans-serif ;

    @media ${props => props.theme.laptop} {
        font-size : 7px ;
    }
    @media ${props => props.theme.mobileS} {
        padding-left : 3px ;
    }
`;

const TitleContainer = styled.div`
    width : 100% ;
    float : left ;
`;


const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size : 20px ;

    @media ${props => props.theme.laptop} {
        font-size : 18px ;
    }
`;

const Content = ({ content }) => {
    const { id, title, image_url, created_at, type } = content ;

    const core = searchCoreData.filter(data => data.text === type)[0] ;

    return (
            <Container>
                <Img url={image_url} />
                <TextContainer>
                    <HeadContainer>
                        <Date draggable="false">{created_at && created_at.substring(0, 10)}</Date>
                        <Code>
                            <StyleFontAwesomeIcon icon={ core !== undefined ? core.icon : faSquareFull} />
                        </Code>
                    </HeadContainer>
                    <TitleContainer>
                        <Title draggable="false">{title}</Title>
                    </TitleContainer>
                </TextContainer>
            </Container>
    );
};
  
export default  Content ; 