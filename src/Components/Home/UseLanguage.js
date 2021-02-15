import { fab } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react' ;
import styled from 'styled-components' ;

import LanguageContent from './LanguageContent' ;

import { language, LanguageContentNum } from '../../Util/util'
import UseLanguageContainer from './UseLanguageContainer';

const Container = styled.div`
    width : 100% ;
`;

const UseLanguageContentContainer = styled.div`
    float : left  ;
    width : 100% ;
    
    display : flex ;

    justify-content : center ;
    align-items : center ;
`;

const UseLanguageWrap = styled.div`

    margin : 0 auto ;

    display : flex ;
    
    flex-direction : column ;

    overflow : hidden ;
`;

const UseLanguage = () => {

    let num = 0 ;

    const menu = language.reduce((prev, item, index ) => {
        if(index === num) {
            prev.push([]) ;
            num += LanguageContentNum ;
        }
        prev[num / LanguageContentNum - 1][index % LanguageContentNum] = item ;
        return prev ;
    }, []) ;

    return (
        <Container>
            <UseLanguageContentContainer>
                <UseLanguageWrap>
                    {menu && menu.map((menuArray, index) => (
                        <UseLanguageContainer key={index} content={menuArray}/>
                    ))}
                </UseLanguageWrap>
            </UseLanguageContentContainer>
        </Container>
    );
};

export default UseLanguage;