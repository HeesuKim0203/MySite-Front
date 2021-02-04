import React, { useEffect, useState } from 'react' ;
import { connect } from 'react-redux';
import styled from 'styled-components' ;

import AsideContent from './AsideContent' ;
import { createAction } from '../../Store/store' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fas, faSearch } from '@fortawesome/free-solid-svg-icons' ;
import { Redirect } from 'react-router-dom';
import { DOCUMENT } from '../../Util/routes';

const Title = styled.h6`
    font-size : 28px ;
`;

const Container = styled.div`
    width : 100% ;

    font-family: 'Ubuntu', sans-serif ;

    padding : 15px 5px ;

    ${Title} {
        font-weight : 650 ;
    }
`;

const BigAsideMenuContainer = styled.ul`

`;

const AllDataViewButton = styled.div`
    width : 80% ;

    margin-top : 30px ;
    font-size : 20px ;
    font-weight : 550 ;

    padding : 20px 0 20px 10px ;

    color : #9e9e9e ;

    user-select : none ;
    cursor : pointer ;

    &:hover {
        background-color : #e8eaf6 ;
        color : #3949ab ;
    }
`;

const SearchContainer = styled.div`
    float : left ;

    margin-bottom : 30px ;

    width : 100% ;
    height : 60px ;

    display : flex ;
    
    align-items : center ;

    overflow : hidden ;
    
    @media ${props => props.theme.laptop} {
        height : 40px ;
    }
    @media ${props => props.theme.mobileL} {
        margin-top : 0px ;
        height : 30px ;
    }
    @media ${props => props.theme.mobileS} {
       
    }
`;

const FontAwesomeIconContainer = styled.div`
    position : absolute ;

    top : 13px ;
    right : 70px ;

    @media ${props => props.theme.laptop} {
        top : 8px ;
    }
    @media ${props => props.theme.mobileL} {
        top : 6px ;
    }
    @media ${props => props.theme.mobileS} {
       
    }
`;

const Form = styled.form`
    float : left ;

    position : relative ;

    width : 100% ;

    font-family: 'Ubuntu', sans-serif ;

    /* display : flex ;
    
    flex-direction : row-reverse ;
    align-items : center ; */
`;

const SearhInput = styled.input`
    all : unset ;

    width : 200px ;
    height : 36px ;

    float : left ;

    font-weight : 550 ;

    font-size : 16px ;
    color : #424242 ;

    border-bottom : 1.5px solid  #424242 ;
    padding-left : 3px ;

    &:focus {
        background-color : #f5f5f5 ;
    }

    &::placeholder {
        color : #888 ;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size : 16px ;

    color : #9e9e9e ;

    &:hover {
        color : #3949ab ;
    }
`;

const AsideMenu = ({ asideData, searchContents, searchTitle }) => {

    const [ search, setSearch ] = useState('') ;
    const [ goDocument, setGoDocument ] = useState(true) ;

    useEffect(() => {

        if(!goDocument) 
            setGoDocument(true) ;

    }, [goDocument, setGoDocument]) ;

    function onClickMenuContent(search) {
        searchContents(search) ;

        setGoDocument(false) ;
    }

    function onSearchTitle(e) {
        e.preventDefault() ;

        searchTitle(search) ;

        setSearch('') ;
        setGoDocument(false) ;
    }

    function onChangeSearchValue(e) {
        setSearch(e.target.value) ;
    }

    return (
        <>
        {goDocument ? (
            <Container>
                <SearchContainer>
                    <Form onSubmit={onSearchTitle}>
                        <FontAwesomeIconContainer>
                            <StyledFontAwesomeIcon icon={faSearch}  size="2x" onClick={onSearchTitle} />
                        </FontAwesomeIconContainer>
                        <SearhInput onChange={onChangeSearchValue} value={search} placeholder="게시물 검색.." />
                    </Form>
                </SearchContainer>
                <BigAsideMenuContainer>
                    {asideData && asideData.map((aside, index) => {
                        return (
                            <AsideContent  
                                key={index}
                                title={aside.title}
                                menu={aside.menu}
                                onClickMenuContent={onClickMenuContent}
                            />
                        ) ;
                    })}
                </BigAsideMenuContainer>
                <AllDataViewButton onClick={() => onClickMenuContent()}>
                    전체 보기
                </AllDataViewButton>
            </Container>) : (
            <Redirect to={DOCUMENT}/>
        )}
        </>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        searchContents : search => dispatch(createAction.searchContents(search)),
        searchTitle : search => dispatch(createAction.searchTitle(search))
    }
} ;


export default connect(null, mapDispatchToProps)(AsideMenu) ;