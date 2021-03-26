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

    background-color : ${props => props.backColor} ;

    border-bottom : 1px solid #999 ;

    cursor : pointer ;

    &:hover {
        background-color : #999 ;
    }

    @media ${props => props.theme.mobileS} {
        padding : 8px 10px ;

        &:hover {
            background-color : #fff ;
        }
    }
`;

const Title = styled.span`
    font-size : 15px ;
    flex : 1 ;

    font-weight : 500 ;

    color : #222 ;

    @media ${props => props.theme.mobileS} {
        font-size : 9px ;

        font-weight : 600 ;
    }
`;

const Date = styled.span`
    font-size : 12px ;

    color : #333 ;

    @media ${props => props.theme.mobileS} {
        font-size : 7px ;
    }
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
        return () => {
            setSelect(false) ;
        }
    }, [pathname, id]) ;

    return (
        <Link to={`${DOCUMENT}/${id}`}>
            <Container backColor={select ? '#f1f8e9' : '#fff'}>
                <Title>{title}</Title>
                <Date>{updated_at}</Date>
            </Container>
        </Link>
    );
};  
export default withRouter(BlogPageContent) ;