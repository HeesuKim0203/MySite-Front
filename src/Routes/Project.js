import React, { useEffect, useState } from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons' ;

import ProjectContent from '../Components/Project/ProjectContent' ;
import { axiosApi } from '../Util/api' ;

const Title = styled.h2`
    font-size : 28px ;
    font-weight : 600 ;

    font-family: 'Roboto', sans-serif ;

    margin-bottom : 40px ;

    user-select : none ;

    @media ${props => props.theme.mobileS} {
        font-size : 18px ;
        margin-bottom : 20px ;
    }
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
    @media ${props => props.theme.mobileS} {
        padding : 10px 10px ;
    }
`;

const ContentContainer = styled.div`
    width : 100% ;

    display : grid ;
    
    grid-template-columns : repeat(2, 50%) ;
    grid-row-gap : 50px ;

    @media ${props => props.theme.mobileL} {
        grid-template-columns : repeat(1, 100%) ;
        grid-row-gap : 20px ;
    }
`;

const Project = () => {

    const [ projectData, setProjectData ] = useState(null) ;

    useEffect(() => {
        async function getProjectList() {
            const {
                data : { 
                    projects
                }
            } = await axiosApi.getProjectList() ;

            setProjectData(projects) ;
        }
        getProjectList() ;
    }, []) ;

    return (
        <Container>
            <Title>Project</Title>
            <ContentContainer>
                {projectData && projectData.map((content, index) => (
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