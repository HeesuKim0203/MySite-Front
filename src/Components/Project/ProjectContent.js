import React, { useState } from 'react' ;
import styled from 'styled-components' ;

const Container = styled.div`

    float : left ;

    width : 95% ;
    overflow : hidden ;

    &:nth-child(2n) {
        margin-left : 5% ;

        @media ${props => props.theme.tabletS} {
            margin-left : 0 ;
        }
    }

    @media ${props => props.theme.tabletS} {
        width : 100% ;
    }
`;

const Img = styled.div`
    width : 100% ;
    height : 300px ;

    float : left ;

    background-image : url(${props => props.src}) ;

    background-size : cover ;
    background-repeat : no-repeat ;
    background-position : 0 0 ;

    @media ${props => props.theme.laptop} {
        height : 260px ;
    }
    @media ${props => props.theme.laptop} {
        height : 180px ;
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

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    user-select : none ;

    text-align : center ;

    padding : 6px 2px 0 2px ;

    @media ${props => props.theme.mobileL} {
        font-size : 18px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 14px ;
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

const DescriptionContainer  = styled.div`
    width : inherit ;
    height : inherit ;
    
    display : ${props => props.display} ;

    background-color : rgba(0, 0, 0, 0.85) ;

    padding : 20px 10px ;

    align-items : center ;
`;

const Description = styled.p`
    display : inline-block ;

    color : #fff ;
    
    padding : 30px 5px 0 5px ;

    line-height : 18px ;
`;

const ProjectContent = ({ content }) => {

    const { image, period, title, url, description } = content ;

    const [ display, setDisplay ] = useState(false) ;
    // const [ mouseEvent, setMouseEvent ] = useState() ;

    function onClickContent() {
        window.location.href = url ;
    }

    function imgMouseOver(e) {

        // e.currentTarget.addEventListener('mouesmove', checkValidityMouseMove, false) ;

        // setMouseEvent(e.currentTarget) ;

        return display ? null :  setDisplay(true) ;
    }

    // function checkValidityMouseMove(e) {
    //    const { nativeEvent : { offsetX, offsetY}, currentTarget } = e ;
       
    //    const { x, y, width, height } = currentTarget.getBoundingClientRect() ;


    //    if(x > offsetX && offsetX < x + width && y < offsetY && y + height < offsetY) {
    //         return setDisplay(true) ;
    //    }
    //    return setDisplay(false) ;
    // }

    function descriptionContainerMouseLeave(e) {

        // mouseEvent.removeEventListener('mouesmove', checkValidityMouseMove, false) ;

        return display ? setDisplay(false) : null ;
    }

    return (
        <Container onClick={onClickContent}>
            <Img 
                src={image} 
                onMouseOver={imgMouseOver} 
            >
                <DescriptionContainer
                    display={display ? 'flex' : 'none' } 
                    onMouseLeave={descriptionContainerMouseLeave}
                >
                    <Description>
                        { description }
                    </Description>
                </DescriptionContainer>
            </Img>
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