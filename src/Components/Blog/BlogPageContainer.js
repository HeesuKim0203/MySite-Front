import React, { useEffect } from 'react' ;
import { connect } from 'react-redux';
import styled from 'styled-components' ;

import Content from './BlogPageContent' ;

const Container = styled.div`
    
    width : 100% ;

    display : ${props => props.display} ;
    flex-direction : column ;

    border : 1.3px solid #999 ;
`;

const BlogPageContainer = ({ pageContents, pageSelect }) => {
    console.log(pageContents) ;
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