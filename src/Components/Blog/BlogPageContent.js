import React from 'react' ;
import styled from 'styled-components' ;

const Container = styled.div`
    padding : 10px 20px ;

    display : flex ;
    justify-content : center ;
    align-items : center ;

    cursor : pointer ;

    &:hover {
        background-color : #f5f5f5 ;
    }
`;

const Title = styled.span`
    font-size : 15px ;
    flex : 1 ;

    font-weight : 800 ;

    color : #9e9e9e ;
`;

const Date = styled.span`
    font-size : 12px ;

    color : #cfd8dc ;
`;

const BlogPageContent = ({ content }) => {
    const { title, updated_at } = content ;

    return (
        <Container>
            <Title>{title}</Title>
            <Date>{updated_at}</Date>
        </Container>
    );
};  
export default BlogPageContent;