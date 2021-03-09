import React from 'react' ;
import styled from 'styled-components' ;

import BlogContainer from '../Components/Blog/BlogContainer' ; 
import { connect } from 'react-redux';
import ButtonContainer from '../Components/Blog/ButtonContainer' ;


const Container = styled.div`
    width : 100% ;

    overflow : hidden ;
`;

const ContentContainer = styled.div`
    float : left ;

    width : 100% ;
    padding : 40px 10px ;

    margin-top : 68px ;

    @media ${props => props.theme.mobileL} {
        padding : 20px 5px ;
    }
    @media ${props => props.theme.mobileS} {
        margin-top : 30px ;
        padding : 0 ;
    }
`;

const Blog = ({ contentsData, select }) => {
    return (
        <Container>
            <ContentContainer>
                { contentsData && contentsData.map((content, index) => {
                    return select === index ? (
                        <BlogContainer 
                            key={index}
                            content={content}
                            select={true}
                        />
                    ) : (
                        <BlogContainer 
                            key={index}
                            content={content}
                        />
                    )
                })}
            </ContentContainer>
            <ButtonContainer />
        </Container>
    );
};

function mapStateToProps(state) {
    const { 
        content : {
             contentsData, select
        } 
    } = state ;

    return {
        contentsData,
        select
    } ;
} ;


export default  connect(mapStateToProps, null)(Blog);