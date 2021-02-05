import React from 'react' ;
import styled from 'styled-components' ;

const Container = styled.div`

    width : 97% ;
    overflow : hidden ;

    cursor: pointer ;

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
    height : 200px ;

    float : left ;

    background-image : url(${props => props.src}) ;

    background-size : cover ;
    background-repeat : no-repeat ;
    background-position : 0 0 ;

    @media ${props => props.theme.mobileL} {
        height : 150px ;
    }
    @media ${props => props.theme.mobileS} {
        height : 110px ;
    }
`;

const TextContainer = styled.div`
    position : relative ;
    width : 100% ;

    float : left ;
    overflow : hidden ;
`;

const TitleContainer = styled.div`
    width : 100% ;
    float : flex ;
`;

const Title = styled.h5`
    box-sizing : content-box ;

    font-size : 20px ;
    font-weight : 500 ;

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    user-select : none ;

    text-align : center ;

    padding : 10px 2px 5px 2px ;

    @media ${props => props.theme.mobileL} {
        font-size : 16px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 12px ;
    }
`;

const DateContainer = styled.div`
    width : 100% ;

    text-align : center ;

    padding : 8px 1px 5px 1px ;
`;

const Date = styled.span`
    font-size : 12px ;

    user-select : none ;
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