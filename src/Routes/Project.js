import React, { useEffect, useState } from 'react' ;
import styled from 'styled-components' ;

import ProjectContent from '../Components/Project/ProjectContent' ;
import { axiosApi } from '../Util/api' ;


const Container = styled.div`
    width : 100% ;

    display : flex ;
    flex-direction : column ;
    align-items : center ;
`;

const ContentContainer = styled.div`
    width : 100% ;

    display : grid ;
    
    grid-template-columns : repeat(2, 50%) ;
    grid-row-gap : 10px ;

    @media ${props => props.theme.mobileL} {
        grid-template-columns : repeat(1, 100%) ;
        grid-row-gap : 10px ;
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