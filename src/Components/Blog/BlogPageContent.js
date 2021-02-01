import React, { useEffect, useState } from 'react' ;
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components' ;

import {
    DOCUMENT
} from '../../Util/routes' ;

const Container = styled.div`
    padding : 10px 20px ;

    display : flex ;
    justify-content : center ;
    align-items : center ;

    background-color : ${props => props.select} ;

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

const BlogPageContent = ({ content, location : { pathname } }) => {
    const { title, updated_at, id} = content ;

    const [ select, setSelect ] = useState(false) ;

    useEffect(() => {
        if(Number(pathname.replace(`${DOCUMENT}/`, "")) === id) {
            setSelect(true) ;
        }else {
            setSelect(false) ;
        }

    }, [pathname, select, setSelect, id]) ;

    return (
        <Link to={`${DOCUMENT}/${id}`}>
            <Container select={select ? '#f1f8e9' : 'white'}>
                <Title>{title}</Title>
                <Date>{updated_at}</Date>
            </Container>
        </Link>
    );
};  
export default withRouter(BlogPageContent) ;