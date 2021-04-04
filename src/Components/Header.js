import React, { useEffect, useState } from 'react' ;
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom' ;

import styled, { css } from 'styled-components' ;
import Typewriter from 'typewriter-effect' ;

import { 
    HOME,
    MY,
    WRITE
} from '../Util/routes' ;
import MenuContent from './Menu' ;

import {
    axiosApi
} from '../Util/api' ;

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

const NullContainer = styled.div`
    width : 100% ;
    height : 70px ;
`;


const Header = ({ location, cookies : { cookies : { token } } }) => {

    const { pathname } = location ;

    const [ data, setData ] = useState([
        {
            path : HOME,
            text : 'HOME',
        },
    ]) ;

    async function checkUser(token) {

        const { 
            data : {
                status
            }
        } = await axiosApi.check(token) ;

        if(status === 'success') {
            if(token && data.length === 1) {
                setData([
                    {
                        path : HOME,
                        text : 'HOME',
                    },
                    {
                        path : MY,
                        text : 'MY'
                    }    
                ]) ;
            }
        }
    }

    useEffect(() => {

        if(!token && data.length !== 3) {
            setData([ ...data.slice(0, data.length) ]) ;
        }else if(token) {
            checkUser(token) ;
        }

    }) ;

    
    const checkPathName = pathname.includes(WRITE) ? false : true ;

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
                        >
                            {menu.text}
                        </MenuContent>
                    ) ;
                })}
            </Menu>
            <ImgContainer>
            {checkPathName ? (
                    <>
                        <Img imgUrl={require("../assets/header_image.jpg").default}/>
                        <TitContainer>
                            <Title>Programer</Title>
                            <br />
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Kim Hee su')
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
                        </TitContainer>
                        <Bright/>
                    </>
                ) : <NullContainer />}
            </ImgContainer>
        </Container>
    );
};

export default withCookies(withRouter(Header)) ;