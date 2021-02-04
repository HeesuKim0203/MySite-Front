import { fab } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react' ;
import styled from 'styled-components' ;

import LanguageContent from './LanguageContent' ;

import { language } from '../../Util/util'

const Container = styled.div`
    width : 100% ;

    overflow : hidden ;
`;

const UseLanguageContentContainer = styled.div`
    float : left  ;
    width : 100% ;
    
    display : flex ;

    justify-content : center ;
    align-items : center ;
`;

const GridDiv = styled.div`
    width : 95% ;

    margin : 0 auto ;

    display : flex ;

    justify-content : center ;
    align-items : center ;
    
`;

const UseLanguage = () => {

    const menu = language ;

    return (
        <Container>
            <UseLanguageContentContainer>
                <GridDiv>
                    {menu.map((data, index) => <LanguageContent key={index} menu={data} />)}
                </GridDiv>
            </UseLanguageContentContainer>
        </Container>
    );
};

export default UseLanguage;