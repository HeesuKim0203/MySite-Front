import React from 'react' ;
import styled from 'styled-components' ;
import { Link } from 'react-router-dom' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;


const Container = styled.div`

    width : 97% ;
    overflow : hidden ;

    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ;

    &:nth-child(2n) {
        margin-left : 3% ;
    }

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        &:nth-child(2n) {
            margin-left : 0 ;
        }
    }
`;

const Img = styled.div`
    width : 100% ;
    height : 260px ;

    border-bottom : 1.5px solid #999 ;
    float : left ;

    padding : 10px ;

    background-image : url(${props => props.src}) ;

    background-size : cover ;
    background-repeat : no-repeat ;
    background-position : 0 -100px ;


    @media ${props => props.theme.laptop} {
        background-position : 0 0 ;
    } 

    @media ${props => props.theme.mobileL} {
        height : 180px ;
    }
    @media ${props => props.theme.mobileS} {
        height : 130px ;
    }
`;

const TextContainer = styled.div`
    position : relative ;
    width : 100% ;

    float : left ;
    display : flex ;
    
    align-items : center ;
    justify-content : center ;

    padding : 0 20px ;

    @media ${props => props.theme.mobileL} {
        padding : 0 10px ;
    }
    @media ${props => props.theme.mobileS} {
        padding : 0 5px ;

        flex-direction : column ;
    }
`;

const Date = styled.span`
    color : #bdbdbd ;
    font-size : 12px ;

    user-select : none ;

    @media ${props => props.theme.mobileL} {
        font-size : 9px ;
    }
    @media ${props => props.theme.mobileS} {
        display : block ;
        font-size : 9px ;
        padding-bottom : 4px ;
    }
`;

const TitleContainer = styled.div`
    width : 100% ;
    flex : 1 ;
`;

const Title = styled.h5`
    box-sizing : content-box ;

    font-size : 20px ;
    font-weight : 600 ;

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    padding : 5px 3px ;

    user-select : none ;

    @media ${props => props.theme.mobileL} {
        font-size : 16px ;
    }
    @media ${props => props.theme.mobileS} {
        text-align : center ;
        font-size : 12px ;
    }
`;

const DateContainer = styled.div`
`;

const ProjectContent = ({ content }) => {
    const { image, period, title, url } = content ;

    function onClickContent() {
        window.location.href = url ;
    }

    return (
        <Container onClick={onClickContent}>
            <Img src={image} />
            <TextContainer>
                <TitleContainer>
                    <Title draggable="false">{title}</Title>
                </TitleContainer>
                <DateContainer>
                    <Date draggable="false">{period}</Date>
                </DateContainer>
            </TextContainer>
        </Container>
    );
};

export default ProjectContent;