import React from 'react' ;
import styled from 'styled-components' ;

import Content from './BlogPageContent' ;

const Container = styled.div`
    
    width : 100% ;

    display : ${props => props.display} ;
    flex-direction : column ;

    @media ${props => props.theme.mobileS} {
        width : 100% ;
    }
`;

const BlogPageContainer = ({ pageContents, pageSelect }) => {
    return (
        <Container
            display={pageSelect ? 'flex' : 'none' }
        >
            { pageContents && pageContents.map((content, index) => (
                <Content 
                    key={index}
                    content={content}
                />
            )) }
        </Container>
    ) ;
} ;


export default BlogPageContainer ;