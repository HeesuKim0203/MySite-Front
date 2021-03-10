import React from 'react' ;
import { connect } from 'react-redux';
import styled from 'styled-components' ;

import ProjectContent from '../Components/Project/ProjectContent' ;

const Container = styled.div`
    width : 70% ;

    margin : 0 auto ;

    display : flex ;
    flex-direction : column ;
    align-items : center ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
    }
`;

const ContentContainer = styled.div`
    width : 100% ;

    display : grid ;
    
    grid-template-columns : repeat(2, 50%) ;
    grid-row-gap : 30px ;

    @media ${props => props.theme.tabletS} {
        grid-template-columns : repeat(1, 100%) ;
    }
`;

const Project = ({ projectsData }) => {

    return (
        <Container>
            
            <ContentContainer>
                {projectsData && projectsData.map((content, index) => (
                    <ProjectContent 
                        key={index}
                        content={content}
                    />
                ))}
            </ContentContainer>
        </Container>
    );
};

function mapStateToProps(state) {
    const { 
        project : { projectsData }
    } = state ;
  
    return {
        projectsData
    } ;
  } ;

export default connect(mapStateToProps, null)(Project) ;