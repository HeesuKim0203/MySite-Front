import React, { useState, useEffect, createContext } from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;
import { fas, faSearch } from '@fortawesome/free-solid-svg-icons' ;

import AsideMenu from '../Components/Blog/AsideMenu' ;
import BlogContainer from '../Components/Blog/BlogContainer' ;
import { axiosApi } from '../Util/api' ;  
import { connect } from 'react-redux';
import { createAction } from '../Store/store';
import ButtonContainer from '../Components/Blog/ButtonContainer' ;

const Container = styled.div`
    width : 100% ;

    overflow : hidden ;
`;

const ContentContainer = styled.div`
    float : left ;

    width : 100% ;
    padding : 40px 10px ;

    @media ${props => props.theme.mobileL} {
        padding : 20px 5px ;
    }
`;

const Blog = ({ contents, select, setContents, setPageContents, updateSelect }) => {

    const [ loading, setLoading ] = useState(true) ;

    useEffect(() => {

        const data = [] ;

        async function fetchData() {
            try {
                const { 
                    data : { 
                        contents 
                    } 
                } = await axiosApi.getContents() ;

                // 예비 데이터
                for(let i = 0 ; i < 32 ; i++) {
                    data[i] = contents[0] ;
                }

                setContents(data) ;
                setPageContents(data) ;

            }catch {
                console.log('error') ;
            }finally {
                setLoading(false) ;
            }
        }

        fetchData() ;

    }, [ setContents ]) ;

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
            <ButtonContainer 
                contents={contents}
                updateSelect={updateSelect}
                select={select}
            />
        </Container>
    );
};

function mapStateToProps(state) {
    const { contents, select } = state ;
    return {
        contents,
        select
    } ;
} ;

function mapDispatchToProps(dispatch) {
    return {
        setContents : contents => 
            dispatch(createAction.setContents(contents)),
        setPageContents : contents => 
            dispatch(createAction.setPageContents(contents)),
        updateSelect : select => 
            dispatch(createAction.updateSelect(select))
    }
} ;

export default  connect(mapStateToProps, mapDispatchToProps)(Blog);