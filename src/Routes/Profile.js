import React, { useState, useEffect } from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons' ;

import { axiosApi } from '../Util/api' ;
import { withCookies } from 'react-cookie';

import { size } from '../Util/theme' ;
import Helmet from 'react-helmet' ;

const Container = styled.div`
    width : 100% ;

    padding : 70px 0 ;

    @media ${props => props.theme.mobileS} {
        padding : 20px 0 ;
    }
`;

const MyContainer = styled.div`

    width : 60% ;
    height : 580px ;

    margin : 0 auto ;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) ;

    @media ${props => props.theme.mobileS} {
        width : 100% ;
        height : 300px ;
    }
`;

const MainContainer = styled.div`
    width : 100% ;
    height : 100% ;
    
    overflow : hidden ;
`;

const Main = styled.div`
    height : 87% ;
    float : left ;
`;

const Main1 = styled(Main)`
    width : 50% ;
`;

const Main2 = styled(Main)`   
    
    width : 50% ;

    border-left : 1px solid #111 ;
`;

const Footer = styled.ul`
    width : 100% ;
    height : 13% ;

    border-top : 1px solid #111 ;
    float : left ;

    display : flex ;

    justify-content : center ;
    align-items : center ;
`;

const IconBox = styled.li`
    width : 50px ;
    &:not(:last-child) {
        margin-right : 20px ;
    }

    @media ${props => props.theme.mobileS} {
        width : 30px ;
    }
`;

const Icon = styled(FontAwesomeIcon)`

    box-sizing : content-box ;
    cursor : pointer ;
    font-size : 28px ;

    transition : 0.3 font-size ease-in ;

    &:hover {
        font-size : 32px ;
    }

    @media ${props => props.theme.mobileS} {
        font-size : 18px ;
        &:hover {
        }
    }
`;

const MyImg = styled.div`
    width : 100% ;
    height : 100% ;
`;

const MyIntroduction = styled.ul`
    padding-right : 30px ;
    margin-top : 10% ;
    margin-left : 18% ;

    @media ${props => props.theme.mobileS} {
        padding-right : 0 ;
        margin-left : 8% ;
    }
`;

const MyIntroductionLi = styled.li`
    &:not(:last-child) {
        margin-bottom : 50px ;
    }

    @media ${props => props.theme.mobileS} {
        &:not(:last-child) {
            margin-bottom : 10px ;
        }
    }
`;

const TitleText = styled.span`
    display : inline-block ;

    font-size : 22px ;

    padding-bottom : 8px ;

    &:not(:last-child) {
        margin-bottom : 14px ;
        padding-bottom : 3px ;
    }

    @media ${props => props.theme.mobileS} {
        font-size : 15px ;

        padding-bottom : 3px ;

        &:not(:last-child) {
            margin-bottom : 3px ;
        }
    }
`;

const Text = styled.span`
    display : inline-block ;

    padding-bottom : 8px ;

    font-weight : 550 ;

    @media ${props => props.theme.mobileS} {
        font-size : 10px ;
        padding-bottom : 3px ;
    }
`;

const Content = styled.span`
    @media ${props => props.theme.mobileS} {
        font-size : 6px ;
    }
`;

const LoginContainer = styled.div`
    
    width : 60% ;
    
    margin : 0 auto ;

    margin-top : 100px ;

    display : ${props => props.display} ;
    justify-content : center ;
    align-items : center ;
`;

const Form = styled.form`
    display : flex ;

    flex-direction : column ;
`;

const Input = styled.input`
    all : unset ;

    width : 250px ;
    height : 35px ;

    border : 1px solid #111 ;
    border-radius : 10px ;

    padding-left : 5px ; 
    
`;

const Label = styled.label`
    padding : 10px 0 10px 5px ;
`;

const LoginButton = styled.button`
    all : unset ;

    margin-top : 50px ;
    margin-left : 50px ;

    width : 150px ;
    height : 30px ;

    border : 1px solid #111 ;
    border-radius : 10px ;

    text-align : center ; 
`;

const Profile = ({ cookies }) => {

    const [ email, setEmail ] = useState('') ;
    const [ pw, setPw ] = useState('') ;
    const [ login, setLogin ] = useState(false) ;

    const [ showLogin, setShowLogin ] = useState(true) ;

    const { mobileS } = size ;

    const viewContentNumCheck = innerWidth => {
        if( innerWidth <= mobileS ) {
            setShowLogin(false) ;
        }else if( innerWidth > mobileS ) {
            setShowLogin(true) ;
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

    useEffect(() => {
        const token = cookies.get('token') ;

        if(token) {
            setLogin(true) ;
        }else {
            setLogin(false) ;
        }
    }) ;

    function onChange(e) {
        switch(e.target.name) {
            case 'email' :
                return setEmail(e.target.value) ;
            case 'password' :
                return setPw(e.target.value) ;
            default :
                return console.log('onChange 함수를 변경하세요') ;
        }
    }

    async function onLogin(e) {
        e.preventDefault() ;

        const userData = new FormData() ;
        userData.append('email', email) ;
        userData.append('password', pw) ;

        try {
            const { 
                data : { 
                    Authorization 
                } 
            } = await axiosApi.login(userData) ;

            if(Authorization) {
                cookies.set('token', Authorization) ;
                setLogin(true) ;
            }

        }catch {

        }

        return ;
    }

    async function onLogout(e) {
        e.preventDefault() ;

        const token = cookies.get('token') ;

        const logoutData = new FormData() ;

        try {
            const { 
                data : { 
                    status 
                } 
            } = await axiosApi.logout(logoutData, token) ;

            if(status === "success") {
                cookies.remove('token') ;
                setLogin(false) ;
                setEmail('') ;
                setPw('') ;
            }
        }catch {
            
        }

        return ;
    }

    return (
        <>
            <Helmet>
                <title>Code beginner | Profile</title>
            </Helmet>
            <Container>
                <MyContainer>
                    <MainContainer>
                        <Main1>
                            <MyImg />
                        </Main1>
                        <Main2>
                            <MyIntroduction>
                                <MyIntroductionLi>
                                    <TitleText>김희수</TitleText><br/>
                                    <Content>Front Programer</Content>
                                </MyIntroductionLi>
                                <MyIntroductionLi>
                                    <Text>전화번호</Text><br/>
                                    <Content>010-5293-8620</Content>
                                </MyIntroductionLi>
                                <MyIntroductionLi>
                                    <Text>이메일</Text><br/>
                                    <Content>rlagmltn456@naver.com</Content>
                                </MyIntroductionLi>
                                <MyIntroductionLi>
                                    <Text>주소</Text><br/>
                                    <Content>대구 광역시 수성구</Content>
                                </MyIntroductionLi>
                                <MyIntroductionLi>
                                    <Text>홈페이지</Text><br/>
                                    <Content>http://127.0.0.1</Content>
                                </MyIntroductionLi>
                            </MyIntroduction>
                        </Main2>
                        <Footer>
                            <IconBox>
                                <Icon icon={faFacebookF} color="#111" />
                            </IconBox>
                            <IconBox>
                                <Icon icon={faGithub} color="#111" />
                            </IconBox>
                            <IconBox>
                                <Icon icon={faInstagram} color="#111" />
                            </IconBox>
                        </Footer>
                    </MainContainer>
                </MyContainer>
                <LoginContainer display={showLogin ? 'flex' : 'none'}>
                    <Form onSubmit={ login ? onLogout : onLogin} action="POST">
                    {login ? null : ( 
                            <>
                                <Label name="email">아이디</Label>
                                <Input 
                                    type="text"
                                    name="email" 
                                    value={email} 
                                    onChange={onChange}
                                />
                                <Label name="password">비밀번호</Label>
                                <Input 
                                    type="password" 
                                    name="password"
                                    value={pw} 
                                    onChange={onChange}
                                />
                            </>
                            ) }
                        <LoginButton type="submit">{ login ? "로그아웃" : "로그인"}</LoginButton>
                    </Form> 
                </LoginContainer>
            </Container>
        </>
    );
};

export default withCookies(Profile) ;