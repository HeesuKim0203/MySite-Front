import React, { useState, useEffect } from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;
import { fas, faSearch } from '@fortawesome/free-solid-svg-icons' ;

import AsideMenu from '../Components/Blog/AsideMenu' ;
import BlogContainer from '../Components/Blog/BlogContainer' ;
import { axiosApi } from '../Util/api' ;  

const Container = styled.div`
    width : 100% ;

    overflow : hidden ;
`;

const ContentContainer = styled.div`
    float : left ;

    width : 100% ;
    padding : 40px 10px ;
`;

const Button = styled.button`
    all : unset ;

    padding : 15px 20px ;

    font-size : 18px ;
    font-weight : 900 ;

    color : ${props => props.select ? '#3949ab' : '#cfd8dc'} ;
    background-color : ${props => props.select ? '#e8eaf6' : '#fff'} ;

    &:hover {
        background-color : #e8eaf6 ;
        color : #3949ab ;
    }
`;

const ButtonContainer = styled.div`

    float : left ;
    width : 100% ;

    display : flex ;
    
    justify-content : center ;
    align-items : center ;
`;


const Blog = () => {
    const [ loading, setLoading ] = useState(true) ;
    const [ contents, setContents ] = useState() ;
    const [ select, setSelect ] = useState(0) ;

    function onClickButton(e) {
        return e.target !== e.currentTarget ? setSelect(e.target.innerHTML - 1) : null ;
    }

    useEffect(() => {
        
        let num = 0 ;
        let numCounte = 9 ;

        const data = [] ;

        for(let i = 0 ; i < 32 ; i++) {
            data[i] = {
                title : '안녕하세요',
                created_at : '2020-12-28',
                description : '설명합니다.'
            }
        }

        setContents(data.reduce((prev, item, index ) => {
            if(index === num) {
                prev.push([]) ;
                num += numCounte ;
            }
            prev[num / numCounte - 1][index % numCounte] = item ;
            return prev ;
        }, [])) ;

        // async function fetchData() {
        //     try {
        //         const { 
        //             data : { 
        //                 contents 
        //             } 
        //         } = await axiosApi.getContents() ;

        //         setContents(contents) ;
        //     }catch {
        //         console.log('error') ;
        //     }finally {
        //         setLoading(false) ;
        //     }
        // }

        // fetchData() ;

    }, []) ;

    return (
        <Container>
            <ContentContainer>
                { contents && contents.map((content, index) => {
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
            <ButtonContainer onClick={onClickButton}>
                { contents && contents.map((__, index) => {
                    return select === index ? (
                        <Button 
                            key={index}
                            select={true}
                        >{index + 1}</Button>
                    ) : (
                        <Button 
                            key={index}
                        >{index + 1}</Button>
                    ) ;
                })}
            </ButtonContainer>
        </Container>
    );
};

export default Blog;