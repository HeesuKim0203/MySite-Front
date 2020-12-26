import React, { useState, useEffect } from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons' ;

import { axiosApi, api } from '../Util/api' ;
import { withCookies } from 'react-cookie';

const Container = styled.div`
    width : 100% ;

    padding : 70px 0 ;
`;

const MyContainer = styled.div`

    width : 60% ;
    height : 580px ;

    margin : 0 auto ;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) ;
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
`;

const Icon = styled(FontAwesomeIcon)`

    box-sizing : content-box ;
    cursor : pointer ;
    font-size : 28px ;

    transition : 0.3 font-size ease-in ;

    &:hover {
        font-size : 32px ;
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
`;

const MyIntroductionLi = styled.li`
    &:not(:last-child) {
        margin-bottom : 50px ;
    }
`;

const TitleText = styled.span`
    display : inline-block ;

    font-size : 22px ;

    padding-bottom : 8px ;
`;

const Text = styled.span`
    display : inline-block ;

    padding-bottom : 8px ;

    font-weight : 550 ;
`;

const Content = styled.span`

`;

const LoginContainer = styled.div`
    
    width : 60% ;
    
    margin : 0 auto ;

    margin-top : 100px ;

    display : flex ;
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

const Profile = ({ location : { pathname }, cookies }) => {

    const [ email, setEmail ] = useState('') ;
    const [ pw, setPw ] = useState('') ;
    const [ login, setLogin ] = useState(false) ;

    useEffect(() => {

        const { cookies : { token } } = cookies ;

        if(token)
            setLogin(true) ;
        else 
            setLogin(false) ;

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

        const { data : { Authorization } } = await axiosApi.login(userData) ;
    
        return  Authorization ? cookies.set('token', Authorization) : null ;
    }

    function onLogout(e) {
        e.preventDefault() ;

        const token = cookies.get('token') ;

        console.log(token) ;

        console.log('logout')

        const logoutData = new FormData() ;

        // const data = await axiosApi.logout(logoutData, token) ;
        // console.log(data) ;

        api.post('http://54.145.229.76:80/api/auth/logout', logoutData, {
            headers : {
                'Authorization' : 'Bearer ' + token
            }
        }).then(response => {
            console.log(response) ;
        }).catch(err => {
            console.log(err) ;
        }) ;
    }

    return (
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
            <LoginContainer>
                <Form onSubmit={ login ? onLogout : onLogin}>
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
    );
};

export default withCookies(Profile) ;