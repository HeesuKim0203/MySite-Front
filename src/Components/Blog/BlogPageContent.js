import { useEffect, useState } from 'react' ;
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

    background-color : ${props => props.select ?  '#f1f8e9' : props.theme.color.backgroundColor} ;
    color : ${props => props.select ?  '#111' : props.theme.color.fontColor} ;

    border-bottom : 1px solid #999 ;

    cursor : pointer ;

    @media ${props => props.theme.mobileS} {
        padding : 8px 10px ;
    }
`;

const Title = styled.span`
    font-size : 15px ;
    flex : 1 ;

    margin-right : 5px ;

    font-weight : 500 ;

    overflow : hidden ; 
    text-overflow : ellipsis ; 
    white-space : nowrap ;
`;

const Date = styled.span`
    font-size : 12px ;
`;

const BlogPageContent = ({ content, location : { pathname } }) => {
    const { title, created_at, id} = content ;

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
            <Container select={select}>
                <Title>{title}</Title>
                <Date>{created_at}</Date>
            </Container>
        </Link>
    );
};  
export default withRouter(BlogPageContent) ;