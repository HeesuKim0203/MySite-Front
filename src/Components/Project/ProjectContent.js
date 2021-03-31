import React from 'react' ;
import styled from 'styled-components' ;

const Container = styled.div`

    float : left ;

    width : 80% ;
    overflow : hidden ;

    &:nth-child(2n) {
        margin-left : 9.5% ;

        @media ${props => props.theme.tabletS} {
            margin-left : 14.5% ;
        }
        @media ${props => props.theme.mobileS} {
            margin-left : 0 ;
        }
    }
    &:nth-child(2n - 1) {
        margin-left : 9.5% ;

        @media ${props => props.theme.tabletS} {
            margin-left : 14.5% ;
        }
        @media ${props => props.theme.mobileS} {
            margin-left : 0 ;
        }
    }

    @media ${props => props.theme.tabletS} {
        width : 70% ;
    }

    @media ${props => props.theme.mobileS} {
        width : 100% ;
    }
`;

const DescriptionContainer  = styled.div`
    width : inherit ;
    height : inherit ;
    
    display : flex ;
    color : #fff ;

    background-color : rgba(0, 0, 0, 0.85) ;

    font-size : 13px ;

    padding : 20px 10px ;

    align-items : center ;

    opacity : 0 ;

    @media ${props => props.theme.mobileS} {
        height  : 100px ;
        opacity : 1 ;

        padding : 5px 3px ;
        font-size : 11px ;
        color : #111 ;
        
        background-color : #fff ;

        position : absolute ;

        z-index : 2 ;
        top : 240px ;
    }
`;

const Img = styled.div`
    width : 100% ;
    height : 270px ;

    position : relative ;
    float : left ;

    background-image : url(${props => props.src}) ;

    background-size : 100% 270px ;
    background-repeat : no-repeat ;
    background-position : 0 0 ;

    &:hover { 
        ${DescriptionContainer} {
            opacity : 0.9 ;
        }
    }

    @media ${props => props.theme.laptop} {
        height : 260px ;
    }
    @media ${props => props.theme.tabletS} {
        &:hover {
            ${DescriptionContainer} {
                opacity : 1 ;
            }
        }
    }
    @media ${props => props.theme.mobileL} {
        height : 250px ;
    }
    @media ${props => props.theme.mobileS} {
        margin-bottom : 80px ;
    }
`;

const TextContainer = styled.div`
    position : relative ;
    width : 100% ;

    float : left ;
    overflow : hidden ;

    margin-bottom : 20px ;
`;

const TitleContainer = styled.div`
    width : 100% ;
    float : flex ;
`;

const Title = styled.h5`
    box-sizing : content-box ;

    height : 23px ;

    font-size : 17px ;

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    user-select : none ;

    text-align : center ;

    padding : 6px 2px 0 2px ;

    @media ${props => props.theme.mobileS} {
        font-size : 15px ;
    }

`;

const DateContainer = styled.div`
    width : 100% ;

    text-align : center ;
`;

const Date = styled.span`
    
    display : inline-block ;

    padding : 10px 1px 6px 1px ;
    font-size : 12px ;

    user-select : none ;

    @media ${props => props.theme.mobileL} {
        font-size : 10px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 8px ;
    }
`;

const Description = styled.p`
    display : inline-block ;
    
    padding : 30px 5px 0 5px ;

    line-height : 18px ;

    @media ${props => props.theme.tabletS} {
        padding : 5px 10px ;
        line-height : 15px ;
    }

    @media ${props => props.theme.mobileS} {
        padding : 5px 10px ;
        line-height : 15px ;
    }
`;

const ProjectContent = ({ content }) => {
    
    const { image, period, title, url, description } = content ;

    function onClickContent() {
        window.open(url, '_blank') ;
    }

    return (
        <Container onClick={onClickContent}>
            <TextContainer>
                <DateContainer>
                    <Date draggable="false">{period}</Date>
                </DateContainer>
                <TitleContainer>
                    <Title draggable="false">{title}</Title>
                </TitleContainer>
            </TextContainer>
            <Img 
                src={image.split(' ')[0]} 
            >
             <DescriptionContainer>
                    <Description>
                        { description }
                    </Description>
                </DescriptionContainer>
            </Img>
        </Container>
    );
};

export default ProjectContent;