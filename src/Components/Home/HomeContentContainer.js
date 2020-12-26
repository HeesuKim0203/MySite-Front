import React from 'react' ;
import styled from 'styled-components' ;

import HomeContent from './HomeContent' ;

// 조회수 순
const Container = styled.div`
    float : left ;
    /* display : ${props => props.select} ; */

    /* animation : ${props => props.animation} ;
    animation-fill-mode : forwards ; */

    width : 100% ;

    padding : 0 12px ;

    /* @keyframes fade-in {
        from {
            opacity : 0 ;
        }
        to {
            opacity : 1 ;
        }
    }
    
    @keyframes fade-out {
        from {
            opacity : 1 ;

        }
        to {
            opacity : 0 ;
        }
    } */
`;

const Header = styled.div`
    display : flex ;

    justify-content : center ;
    align-items : center ;

    padding : 30px 0 ;
`;

const Main = styled.div`

    display : grid ;
    
    grid-template-columns : repeat(5, 18%) ;
    grid-row-gap : 35px ;
    padding : 20px 0 ;
`;

const Title = styled.h5`
    font-size : 28px ;
    font-weight : 600 ;

    font-family: 'Roboto', sans-serif ;

    user-select : none ;
`;

const HomeContentContainer = ({ title, select }) => {

    const data = {
        title : 'Top 5 Items Under 20'
    } ;

    const dataArray = [] ;

    for(let i = 0 ; i < 10 ; i++) {
        dataArray[i] = data ;
    }

    return (
        <Container
            // select={select  ? 'block' : 'none' }
            // animation={`${select  ? 'fade-in' : 'fade-out'} 2s`}
        >
            <Header>
                <Title>{title}</Title>
            </Header>
            <Main>
                {dataArray.map((content, index) => (
                    <HomeContent 
                        key={index}
                        content={content}
                    />
                ))}
            </Main>
        </Container>
    );
};

export default HomeContentContainer;