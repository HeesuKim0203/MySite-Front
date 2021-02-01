import React from 'react' ;
import styled from 'styled-components' ;

import Content from './Content' ;

const Container = styled.div`
    width : 100% ;
    
    display : ${props => props.display} ;
    
    grid-template-columns : repeat(3, 33.33%) ;
    grid-row-gap : 50px ;
`;

const BlogContainer = ({ content, select }) => {
    return (
        <Container
            display={select ? 'grid' : 'none' }
        >
            { content && content.map((content, index) => (
                <Content 
                    key={index}
                    content={content}
                />
            )) }
        </Container>
    );
};

export default BlogContainer;