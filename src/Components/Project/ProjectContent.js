import React, { useState, useEffect } from 'react' ;
import styled from 'styled-components' ;

import { size } from '../../Util/theme' ;

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

const Img = styled.div`
    width : 100% ;
    height : 270px ;

    float : left ;

    background-image : url(${props => props.src}) ;

    background-size : cover ;
    background-repeat : no-repeat ;
    background-position : 0 0 ;

    @media ${props => props.theme.laptop} {
        height : 260px ;
    }
    @media ${props => props.theme.mobileL} {
        height : 180px ;
    }
    @media ${props => props.theme.mobileS} {
        height : 140px ;
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

    @media ${props => props.theme.mobileS} {
        padding : 5px 10px ;
        line-height : 15px ;
    }
`;

const DescriptionContainer  = styled.div`
    width : inherit ;
    height : inherit ;
    
    display : ${props => props.display} ;
    color : #fff ;

    background-color : rgba(0, 0, 0, 0.85) ;

    font-size : 13px ;

    padding : 20px 10px ;

    align-items : center ;

    @media ${props => props.theme.mobileS} {
        padding : 5px 3px ;
        font-size : 11px ;
        color : #111 ;
        
        background-color : #fff ;
    }
`;

const ProjectContent = ({ content }) => {
    
    const { mobileS } = size ;
    const { image, period, title, url, description } = content ;

    const [ display, setDisplay ] = useState(false) ;
    const [ showDescription, setShowDescription ] = useState(false) ;

    const viewContentNumCheck = innerWidth => {
        if(innerWidth <= mobileS) {
            setShowDescription(true) ;       
        }else if( innerWidth > mobileS ) {
            setShowDescription(false) ;
        }
      }
    
      const onResize = (e) => {
        const { currentTarget : { innerWidth } } = e ;
    
        viewContentNumCheck(innerWidth) ;
      }
    
      useEffect(() => {
    
        const { innerWidth } = window ;
    
        viewContentNumCheck(innerWidth) ;
    
        window.addEventListener('resize', onResize, false) ;
    
        return () => {
          window.removeEventListener('resize', onResize, false) ;
        }
      }, [])

    function onClickContent() {
        window.location.href = url ;
    }

    function imgMouseOver(e) {

        return display ? null :  setDisplay(true) ;
    }

    function descriptionContainerMouseLeave(e) {

        return display ? setDisplay(false) : null ;
    }

    return (
        <Container onClick={onClickContent}>
            <Img 
                src={image} 
                onMouseOver={ showDescription ? null : imgMouseOver} 
            >
                {showDescription ? null : (<DescriptionContainer
                    display={display || showDescription ? 'flex' : 'none' } 
                    onMouseLeave={ showDescription ? null :descriptionContainerMouseLeave}
                >
                    <Description>
                        { description }
                    </Description>
                </DescriptionContainer>)}
            </Img>
            <TextContainer>
                <TitleContainer>
                    <Title draggable="false">{title}</Title>
                </TitleContainer>
                <DateContainer>
                    <Date draggable="false">{period}</Date>
                </DateContainer>
            </TextContainer>
            {showDescription ? (<DescriptionContainer
                    display={display || showDescription ? 'flex' : 'none' } 
                    onMouseLeave={ showDescription ? null :descriptionContainerMouseLeave}
                >
                    <Description>
                        { description }
                    </Description>
                </DescriptionContainer>) : null}
        </Container>
    );
};

export default ProjectContent;