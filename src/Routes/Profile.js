import styled from 'styled-components' ;
import Seo from '../Components/Seo';
import { PROFILE } from '../Util/routes';

const Container = styled.div`
    width : 100% ;

    color : ${props => props.theme.color.fontColor} ;

    padding : 70px 0 ;

    @media ${props => props.theme.mobileS} {
        padding : 20px 0 ;
    }
`;

const MyContainer = styled.div`

    width : 60% ;
    height : 500px ;

    background-color : ${props => props.theme.color.profileBackgroundColor} ;
    border-radius : 20px ;

    margin : 0 auto ;

    @media ${props => props.theme.mobileL} {
        border-radius : 0 ;
        width : 100% ;
        height : 450px ;
    }

    @media ${props => props.theme.mobileS} {
        height : 300px ;
    }
`;

const MainContainer = styled.div`
    width : 100% ;
    height : 100% ;
    
    overflow : hidden ;
`;

const Main = styled.div`
    height : 100% ;
    float : left ;
`;

const Main1 = styled(Main)`
    width : 50% ;

    @media ${props => props.theme.tabletS} {
        width : 100% ;
        height : 50% ;
    }
`;

const Main2 = styled(Main)`   
    
    width : 50% ;

    border-left : 1px solid ${props => props.theme.color.profileBorderColor} ;

    @media ${props => props.theme.tabletS} {
        width : 100% ;
        height : 50% ;

        border-left : none ;
        border-top : 1px solid ${props => props.theme.color.profileBorderColor} ;
    }
`;

const MyImg = styled.div`
    width : 100% ;
    height : 100% ;
`;

const MyIntroduction = styled.ul`
    padding : 20px 30px ;
    margin-top : 10% ;

    @media ${props => props.theme.tabletS} {
        margin-top : 0% ;

        padding : 10px 15px ;
    }
`;

const MyIntroductionLi = styled.li`
    &:not(:last-child) {
        margin-bottom : 50px ;
    }

    @media ${props => props.theme.tabletS} {
        &:not(:last-child) {
            margin-bottom : 25px ;
        }
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

    font-family : 'Noto Sans KR', sans-serif ;

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

    font-family : 'Noto Sans KR', sans-serif ;

    font-weight : 550 ;

    @media ${props => props.theme.mobileS} {
        font-size : 12px ;
        padding-bottom : 3px ;
    }
`;

const Content = styled.span`
    font-family : 'Noto Sans KR', sans-serif ;
    @media ${props => props.theme.mobileS} {
        font-size : 10px ;
    }
`;

const Profile = () => {

    return (
        <>
            <Seo
                title="Profile"
                url={PROFILE}
                description="heesu99의 정보입니다."
            />
            <Container>
                <MyContainer>
                    <MainContainer>
                        <Main1>
                            <MyImg />
                        </Main1>
                        <Main2>
                            <MyIntroduction>
                                <MyIntroductionLi>
                                    <TitleText>Heesu99</TitleText><br/>
                                    <Content>Programer</Content>
                                </MyIntroductionLi>
                                <MyIntroductionLi>
                                    <Text>이메일</Text><br/>
                                    <Content>rlagmltn456@gmail.com</Content>
                                </MyIntroductionLi>
                                <MyIntroductionLi>
                                    <Text>홈페이지</Text><br/>
                                    <Content>https://blog.heesu99.site</Content>
                                </MyIntroductionLi>
                            </MyIntroduction>
                        </Main2>
                    </MainContainer>
                </MyContainer>
            </Container>
        </>
    );
};

export default Profile ;