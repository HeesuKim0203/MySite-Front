import { fab } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react' ;
import styled from 'styled-components' ;

import LanguageContent from './LanguageContent' ;

const Container = styled.div`
    margin-top : 20px ;
    width : 100% ;

    overflow : hidden ;

    @media ${props => props.theme.mobileS} {
        margin-top : 4px ;
    }
`;

const UseLanguageContentContainer = styled.div`
    float : left  ;
    width : 100% ;

    padding : 20px 0 ;
    
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

const UseLanguageFooter = styled.div`
    float : left ;
    width : 100% ;

    overflow-y : hidden ;

    margin-top : 30px ;

    display : flex ;

    justify-content : center ;
    align-items : center ;

    padding-bottom : 15px ;

`;

const Button = styled.button`
    all : unset ;
    
    width : 80px ;
    height : 30px ;

    text-align : center ;

    border : 1px solid #111 ;
    border-radius : 20px ;
`;

const UseLanguage = () => {

    const [ login, setLogin ] = useState(false) ;

    const menu = [
        { text : 'React' , icon : fab.faReact },
        { text : 'JS' , icon : fab.faJsSquare },
        { text : 'HTML' , icon : fab.faHtml5 },
        { text : 'CSS3' , icon : fab.faCss3Alt },
        { text : 'Laravel', icon : fab.faLaravel },
        // { text : 'NodeJs', icon : fab.faNode },
        { text : 'AWS', icon : fab.faAws },
        // { text : 'Android', icon : fab.faAndroid }
    ] ;

    function onClickCreate() {
        
    }

    return (
        <Container>
            <UseLanguageContentContainer>
                <GridDiv>
                    {menu.map((data, index) => <LanguageContent key={index} data={data} token={login} />)}
                </GridDiv>
            </UseLanguageContentContainer>
            { login ? (
                <UseLanguageFooter>
                    <Button>Add</Button>
                </UseLanguageFooter>
            ) : null }
        </Container>
    );
};

export default UseLanguage;