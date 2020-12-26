import React from 'react' ;
import styled from 'styled-components' ;

import Content from './Content' ;

const Container = styled.div`
    width : 100% ;
    
    display : ${props => props.display} ;
    
    grid-template-columns : repeat(3, 33.33%) ;
    grid-row-gap : 50px ;

    animation : ${props => props.animation} ;
    animation-fill-mode : forwards ;
    
    @keyframes fade-in {
            from {
                opacity : 0 ;
            }
            to {
                opacity : 1 ;
            }
        }
        
        @keyframes fade-out {
            from {
                opacity : 1 ;

            }
            to {
                opacity : 0 ;
            }
    }
`;

const BlogContainer = ({ content, select }) => {
    return (
        <Container
            display={select ? 'grid' : 'none' }
            animation={`${select  ? 'fade-in' : 'fade-out'} 2s`}
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