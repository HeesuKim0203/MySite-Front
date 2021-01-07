import React, { useEffect } from 'react' ;
import { connect } from 'react-redux';
import styled from 'styled-components' ;

import Content from './BlogPageContent' ;

const Container = styled.div`
    
    width : 100% ;

    display : ${props => props.display} ;
    flex-direction : column ;

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

const BlogPageContainer = ({ pageContents, pageSelect }) => {
    return (
        <Container
            display={pageSelect ? 'flex' : 'none' }
            animation={`${pageSelect  ? 'fade-in' : 'fade-out'} 2s`}
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

export default  BlogPageContainer ;