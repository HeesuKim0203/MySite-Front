import React from 'react' ;
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom' ;

import styled, { css } from 'styled-components' ;

import { 
    HOME,
    DOCUMENT,
    PROFILE,
    MY,
    WRITE
} from '../Util/routes' ;
import MenuContent from './Menu' ;

const HeaderImgBright = css`
    height : 550px ;

    @media ${props => props.theme.laptop} {
        height : 445px ;
    }
    @media ${props => props.theme.mobileL} {
        height : 380px ;
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
    background-size : 2000px 1100px ;
    background-position : 0 -190px ;
    background-repeat : no-repeat ;

    width : 100% ;

    ${HeaderImgBright}
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
        margin-top : 130px ;
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
        font-size : 64px ;
    }
`;

const TitleMyName = styled.a`
    box-sizing : content-box ;

    display : inline-block ;

    color : #fff ;

    font-weight : 500 ;
    font-size : 26px ;

    user-select : none ;

    @media ${props => props.theme.laptop} {
        font-size : 24px ;
    } 
    @media ${props => props.theme.mobileL} {
        font-size : 22px ;
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
        font-size : 20px ;
        width : 160px ;
        height : 45px ;
        margin-top : 120px ;
    } 
    @media ${props => props.theme.mobileL} {
        width : 140px ;
        font-size : 18px ;
        height : 40px ;
        margin-top : 90px ;
    }
`;

const NullContainer = styled.div`
    width : 100% ;
    height : 70px ;
`;

const Header = ({ location : { pathname }, cookies }) => {

    const { cookies : { token } } = cookies ;

    function onMy() {
        return token 
        ? {
            path : MY,
            text : 'MY'
        } : null ;
    }

    const data = [
        {
            path : HOME,
            text : 'HOME',
        },
        {
            path : DOCUMENT,
            text : 'DOCUMENT',
        },
        {
            path : PROFILE,
            text : 'PROFILE',
        },
        onMy()
    ] ;
    
    const checkPathName = pathname.includes(WRITE) ? false : true ;

    return (
        <Container>
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
                {checkPathName ? (
                    <>
                        <Img imgUrl={require("../assets/header_image.jpg").default}/>
                        <TitContainer>
                            <Title>Professional</Title>
                            <br />
                            <TitleMyName draggable="false" >Programer.Kim Hee Su</TitleMyName>
                            <br/>
                            <Button>Lean More</Button>
                        </TitContainer>
                        <Bright/>
                    </>
                ) : <NullContainer />}
            </ImgContainer>
        </Container>
    );
};

export default withCookies(withRouter(Header)) ;