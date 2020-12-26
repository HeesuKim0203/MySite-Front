import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons' ;

import ProjectContent from '../Components/Project/ProjectContent' ;

const Title = styled.h2`
    font-size : 28px ;
    font-weight : 600 ;

    font-family: 'Roboto', sans-serif ;

    margin-bottom : 40px ;

    user-select : none ;
`;

const Container = styled.div`
    width : 100% ;

    padding : 50px 30px ;

    display : flex ;
    flex-direction : column ;
    align-items : center ;

    @media ${props => props.theme.laptop} {
        padding : 30px 30px ;
    }
`;

const ContentContainer = styled.div`
    width : 100% ;

    display : grid ;
    
    grid-template-columns : repeat(2, 50%) ;
    grid-row-gap : 50px ;
`;

const Project = () => {
    const data = {
        date : '2020.12.03',
        title : 'Top 5 Items Under 20',
        description : 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your'
    } ;

    const dataArray = [] ;

    for(let i = 0 ; i < 4 ; i++) {
        dataArray[i] = data ;
    }
    return (
        <Container>
            <Title>Project</Title>
            <ContentContainer>
                {dataArray.map((content, index) => (
                    <ProjectContent 
                        key={index}
                        content={content}
                    />
                ))}
            </ContentContainer>
        </Container>
    );
};

export default Project ;