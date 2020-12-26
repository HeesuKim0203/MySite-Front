import React, { useEffect, useState } from 'react' ;
import styled from 'styled-components' ;
import { withCookies } from 'react-cookie' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons' ;

import Project from './Project' ;
import HomeContentContainer from '../Components/Home/HomeContentContainer' ;
import UseLanguage from '../Components/Home/UseLanguage' ;


const Container = styled.div`
    width : 80% ;

    margin : 0 auto ;        

    overflow : hidden ;     
`;

const ContentContainer = styled.div`
    width : 100% ;

    float : left ;
`;

const ContentWrap = styled.div`
    width : 100% ;           
`;

const Home = (props) => {

    const { cookies } = props ;

    // const [ selectContainer, setSelectContainer ] = useState(0) ;

    // const data = [
    //     {
    //         title : 'Top 10',
    //     },
    // ] ;

    // function onClickLeft() {
    //     return selectContainer === 0 ? null : setSelectContainer(selectContainer - 1) ;
    // }
    
    // function onClickRight() {
    //     return selectContainer === data.length - 1 ? null : setSelectContainer(selectContainer + 1) ;
    // }

    return (
        <>
            <Container>
                <ContentContainer>
                    <UseLanguage cookies={cookies} />
                </ContentContainer>
                <ContentContainer>
                    <ContentContainer>
                        <Project />
                    </ContentContainer>
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
                </ContentContainer>
            </Container>
        </>
    );
};

export default withCookies(Home) ;