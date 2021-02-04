import React, { useEffect, useState } from 'react' ;
import styled from 'styled-components' ;
import { withCookies } from 'react-cookie' ;

import Project from './Project' ;
import UseLanguage from '../Components/Home/UseLanguage' ;

import Slide from '../Components/Slide' ;


const Container = styled.div`
    width : 80% ;

    margin : 0 auto ;        

    overflow : hidden ;     
`;

const ContentContainer = styled.div`
    width : 100% ;

    float : left ;
    
    overflow : hidden ;

    margin-top : 40px ;

    padding : 20px ;
`;

const SlideContainer = styled.div`
    width : 100% ;

    float : left ;

    overflow : hidden ;

    margin-top : 130px ;
`;

const SlideDataContainer = styled.div`
    margin-top : 35px ;

    width : 100% ;

    float : left ;
`;

const SlideTextContainer = styled.div`
    width : 100% ;
    float : left  ;
`;

const DataContainer = styled.div`
    float : left ;

    width : 50% ;
    height : 270px ;

    display : flex ;
    align-items : center ;
    align-items : center ;
    
`;

const TextContainer = styled.div`
    float : left ;

    width : 50% ;
    height : 270px ;
     
    overflow : hidden ;

    display : flex ;
    
    flex-direction : column ;

    justify-content : center ;
    align-items : center ;
`;

const Title = styled.h3`
    width : 100% ;
    font-size : 32px ;

    text-align : center ;
`;

const Text = styled.p`
    font-size : 14px ;

    text-align : center ;
    padding : 5px 3px ;
`;

const ContentWrap = styled.div`
    width : 100% ;           
`;

const Home = (props) => {

    const { cookies } = props ;

    return (
        <>
            <Container>
                <ContentContainer>
                    <TextContainer>
                        <Title>Skills</Title>
                        <Text>제가 현재 쓸 수 있는 개발 스택입니다.</Text>
                    </TextContainer>
                    <DataContainer>
                        <UseLanguage />
                    </DataContainer>
                </ContentContainer>
                <ContentContainer>
                    <DataContainer>
                        <Project />
                    </DataContainer>
                    <TextContainer>
                        <Title>Project</Title>
                        <Text>제가 현재까지 진행한 개인 프로젝트 입니다.</Text>
                    </TextContainer>
                </ContentContainer>
                <SlideContainer>
                    <SlideTextContainer>
                            <Title>Blog</Title>
                            <Text>저의 게시물 입니다.</Text>
                    </SlideTextContainer>
                    <SlideDataContainer>
                        <Slide />
                    </SlideDataContainer>
                </SlideContainer>
                    {/* <ContentWrap>
                        {data.map((container, index) => {
                            return selectContainer === index ? (
                                    <HomeContentContainer 
                                        key={index}
                                        title={container.title}
                                        select={true}
                                    />
                                ) : (
                                    <HomeContentContainer 
                                        key={index}
                                        title={container.title}
                                    />
                                ) ;
                        })}
                    </ContentWrap> */}
            </Container>
        </>
    );
};

export default withCookies(Home) ;