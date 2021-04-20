import styled from 'styled-components' ;
import Seo from '../Components/Seo';
import { PAGE404 } from '../Util/routes';

const Container = styled.div`
    width : 100% ;
    height : 500px ;

    display : flex ;
    flex-direction : column ;
    justify-content : center ;
    align-items : center ;

    @media ${props => props.theme.mobileS} {
        height : 300px ;
    }
`;

const Img = styled.div`
    position : relative ;

    margin : 0 auto ;

    width : 450px ;
    height : 400px ;

    background-image : url(${props => props.url}) ;
    background-size : 450px 400px ;
    background-repeat : no-repeat ;


    @media ${props => props.theme.mobileS} {
        width : 250px ;
        height : 200px ;
        background-size : 250px 200px ;
    }
`;

const Title = styled.div`
    position : absolute ;

    background-color : ${props => props.theme.color.backgroundColor} ;
    color : #9575cd ;

    font-size : 70px ;
    font-weight : 500 ;

    bottom : 70px ;
    left : 147px ;

    user-select : none ;

    @media ${props => props.theme.mobileS} {
        bottom : 35px ;
        left : 82px ;

        font-size : 40px ;
    }
`;

const Text = styled.span`
    display : block ;
    
    font-weight : 650 ;
    color : ${props => props.theme.color.fontColor} ;

    margin-bottom : 10px ;

    user-select : none ;

    @media ${props => props.theme.mobileS} {
        font-size : 12px ;
    }
`;

const Page404 = () => {
    return (
        <>
            <Seo 
                title={"URL에 맞는 페이지를 찾을 수 없습니다."}
                url={PAGE404}
                description={"없는 URL 접속시 에러 방지 페이지"}
            />
            <Container>
                <Img url={require('../assets/404.webp').default}>
                    <Title>4  0  4</Title>
                </Img>
                <Text>이 페이지는 없는 페이지 입니다.</Text>
                <Text>다른 페이지로 이동해 주세요</Text>
            </Container>
        </>
    );
};

export default Page404;