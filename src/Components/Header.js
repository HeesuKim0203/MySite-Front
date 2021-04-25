import { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom' ;

import styled, { css } from 'styled-components' ;
import Typewriter from 'typewriter-effect' ;

import { 
    HOME,
    DOCUMENT,
    PROFILE,
} from '../Util/routes' ;
import MenuContent from './Menu' ;

const HeaderImgBright = css`
    height : 550px ;

    @media ${props => props.theme.laptop} {
        height : 445px ;
    }
    @media ${props => props.theme.mobileL} {
        height : 350px ;
    }
    @media ${props => props.theme.mobileS} {
        height : 240px ;
    }
`;

const Container = styled.header`
    width : 100% ;
`;

const Menu = styled.ul`
    width : 100% ;
    position : fixed ;

    top : 0 ;
    left : 0 ; 

    display : flex ;
    
    justify-content : center ;
    align-items : center ;

    background-color : rgba(0, 0, 0, 0.8) ;

    z-index : 11 ;
`;

const ImgContainer = styled.div`

`;

const Bright = styled.div`
    position : absolute ;

    top : 0 ;
    left : 0 ;

    width : 100% ;

    background-color : rgba(0, 0, 0, 0.4) ;

    z-index : 1 ;

    ${HeaderImgBright}
`;

const Img = styled.div`
    background : url(${props => props.imgUrl}) ;
    background-size : 2000px 1000px ;
    background-position : 0 -190px ;
    background-repeat : no-repeat ;

    width : 100% ;

    ${HeaderImgBright}

    @media ${props => props.theme.mobileL} {
        background-size : 1000px 500px ;
        background-position : 0 -100px ;
    }
    @media ${props => props.theme.mobileS} {
        background-size : 500px 250px ;
        background-position : 0 0 ;
    }
`;

const TitContainer = styled.div`
    position : absolute ;

    width : 100% ;

    top : 0 ;
    left : 0 ;

    text-align : center ;

    z-index : 2 ;

    margin-top : 160px ;

    @media ${props => props.theme.laptop} {
        margin-top : 140px ;
    } 
    @media ${props => props.theme.mobileL} {
        margin-top : 100px ;
    }
    @media ${props => props.theme.mobileS} {
        margin-top : 80px ;
    }
`;

const Title = styled.h1`

    display : inline-block ;

    color : #fff ;
    font-weight : 600 ;
    font-size : 82px ;

    font-family : 'Montserrat', sans-serif ;

    user-select : none ;

    @media ${props => props.theme.laptop} {
        font-size : 72px ;
    } 
    @media ${props => props.theme.mobileL} {
        font-size : 58px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 38px ;
    }
`;

const TypewriterStyled = css`

    span.Typewriter__wrapper,
    span.Typewriter__cursor {
        box-sizing : content-box ;

        display : inline-block ;

        color : #fff ;

        font-weight : 500 ;
        font-size : 30px ;

        margin-top : 15px ;

        user-select : none ;
    }
    @media (max-width : 1400px) {
        span.Typewriter__wrapper,
        span.Typewriter__cursor { font-size : 26px ; }
    } 
    @media (max-width : 768px) {
        span.Typewriter__wrapper,
        span.Typewriter__cursor { font-size : 24px ; }
    } 
    @media (max-width : 468px) {
        span.Typewriter__wrapper,
        span.Typewriter__cursor { margin-top : 5px ; font-size : 18px ;}
    } 
`;

const Button = styled.button`
    all : unset ;
    
    display : inline-block ;

    width : 210px ;
    height : 50px ;

    margin-top : 150px ;

    border-radius : 38px ;

    background : linear-gradient(to right, rgb(29, 247, 135), rgb(138, 37, 255)) ;

    font-size : 22px ;
    font-weight : 600 ;

    color : #fff ;

    @media ${props => props.theme.laptop} {
        font-size : 18px ;
        width : 160px ;
        height : 45px ;
        margin-top : 100px ;
    } 
    @media ${props => props.theme.mobileL} {
        width : 140px ;
        font-size : 15px ;
        height : 40px ;
        margin-top : 70px ;
    }
    @media ${props => props.theme.mobileS} {
        font-weight : 0 ;
        width : 80px ;
        font-size : 9px ;
        height : 22px ;
        margin-top : 25px ;
    }
`;

const Header = ({ location }) => {

    const { pathname } = location ;

    const data= [
        {
            path : HOME,
            text : 'INFORMATION',
        },
        {
            path : DOCUMENT,
            text : 'Blog',
        },
        {
            path : PROFILE,
            text : 'PROFILE',
        },
    ] ;

    useEffect(() => {
        const typeCheck = document.querySelector('span.Typewriter__wrapper') ;
        
        typeCheck.className = "Typewriter__wrapper notranslate" ;
    }, []) ;
    
    return (
        <Container>
            <style>
                {TypewriterStyled}
            </style>
            <Menu>
                {data && data.map((menu, index) => {
                    return  (
                        <MenuContent 
                            key={index}
                            path={menu.path}
                            active={menu.path === pathname}
                        >
                            {menu.text}
                        </MenuContent>
                    ) ;
                })}
            </Menu>
            <ImgContainer>
                    <>
                        <Img imgUrl={require("../assets/header_image.webp").default}/>
                        <TitContainer>
                            <Title>Programmer</Title>
                            <br />
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Heesu99')
                                      .changeDelay(800)
                                      .pauseFor(2500)
                                      .deleteAll()
                                      .start()
                                  }}
                                  options={{
                                      autoStart : true,
                                      loop : true,
                                  }}
                                />
                            <br/>
                            <Link to={PROFILE}>
                                <Button>
                                    Lean More
                                </Button>
                            </Link>
                        </TitContainer>
                        <Bright/>
                    </>
            </ImgContainer>
        </Container>
    );
};

export default withRouter(Header) ;