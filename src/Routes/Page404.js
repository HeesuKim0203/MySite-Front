import styled from 'styled-components' ;

const Container = styled.div`
    width : 100% ;
    height : 500px ;
`;

const Img = styled.div`
    position : relative ;

    margin : 0 auto ;

    width : 450px ;
    height : 350px ;

    background-image : url(${props => props.url}) ;
    background-size : 450px 350px ;
    background-repeat : no-repeat ;
`;

const Text = styled.div`
    position : absolute ;

    background-color : ${props => props.theme.color.backgroundColor} ;
    color : ${props => props.theme.color.fontColor} ;

    font-size : 70px ;
    font-weight : 700 ;

    bottom : 60px ;
    left : 147px ;

    user-select : none ;
`;

const Page404 = () => {
    return (
        <Container>
            <Img url={require('../assets/404.png').default}>
                <Text>4 0 4</Text>
            </Img>
        </Container>
    );
};

export default Page404;