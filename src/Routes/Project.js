import React, { useEffect, useState } from 'react' ;
import { connect } from 'react-redux';
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