import React, { useState, useEffect } from 'react' ;
import styled from 'styled-components' ;

import BlogContainer from '../Components/Blog/BlogContainer' ;
import { axiosApi } from '../Util/api' ;  
import { connect } from 'react-redux';
import { createAction } from '../Store/store';
import ButtonContainer from '../Components/Blog/ButtonContainer' ;

import Loader from '../Components/Loader' ;

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

const Blog = ({ contentsData, select, setContents, setPageContents, setDefaultData }) => {

    const [ loading, setLoading ] = useState(true) ;

    useEffect(() => {

        async function fetchData() {
            try {
                const { 
                    data : { 
                        contents 
                    } 
                } = await axiosApi.getContents() ;
                
                setDefaultData(contents) ;
                setContents(contents) ;
                setPageContents(contents) ;

            }catch {
                console.log('error') ;
            }finally {
                setLoading(false) ;
            }
        }

        fetchData() ;

    }, [ setContents, setDefaultData, setPageContents ]) ;

    return (
        <Container>
            {loading ? (<Loader />) : (
            <>
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
            </>
            )
        }
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

function mapDispatchToProps(dispatch) {
    return {
        setContents : contents => 
            dispatch(createAction.setContents(contents)),
        setPageContents : contents => 
            dispatch(createAction.setPageContents(contents)),
        setDefaultData : defaultData =>
            dispatch(createAction.setDefaultData(defaultData))
    }
} ;

export default  connect(mapStateToProps, mapDispatchToProps)(Blog);