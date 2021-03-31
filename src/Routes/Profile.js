import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons' ;

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
        font-size : 12px ;
        padding-bottom : 3px ;
    }
`;

const Content = styled.span`
    @media ${props => props.theme.mobileS} {
        font-size : 10px ;
    }
`;

const Profile = () => {

    return (
        <>
            <Helmet>
                <title>Profile | Beginner</title>
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
            </Container>
        </>
    );
};

export default Profile ;