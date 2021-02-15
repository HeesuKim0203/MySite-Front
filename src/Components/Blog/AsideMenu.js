import React, { useEffect, useState } from 'react' ;
import { connect } from 'react-redux';
import styled from 'styled-components' ;

import AsideContent from './AsideContent' ;
import { createAction } from '../../Store/store' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faSearch } from '@fortawesome/free-solid-svg-icons' ;
import { Redirect } from 'react-router-dom';
import { DOCUMENT } from '../../Util/routes';

import { size } from '../../Util/theme' ;

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

    @media ${props => props.theme.tabletL} {
        width : 80% ;

        margin : 0 auto ;
    }
`;

const BigAsideMenuContainer = styled.ul`
    width : 100% ;
    float : left ;

`;

const AllDataViewButton = styled.div`
    width : 80% ;

    float : left ;

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

    width : 100% ;

    display : flex ;
    
    align-items : center ;
    overflow : hidden ;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size : 16px ;

    color : #9e9e9e ;
`;

const FontAwesomeIconContainer = styled.div`
    position : absolute ;
    top : 13px ;
    right : 4px ;

    z-index : 10 ;

    cursor : pointer ;

    &:hover {
        ${StyledFontAwesomeIcon} {
            color : #3949ab ;
        }
    }
`;

const Form = styled.form`
    float : left ;

    position : relative ;

    width : 200px ;
    height : 40px ;

    font-family: 'Ubuntu', sans-serif ;

    @media ${props => props.theme.laptop} {
        width : 160px ;
    }
    /* @media ${props => props.theme.tabletL} {
        width : 160px ;
    } */

    /* display : flex ;
    
    flex-direction : row-reverse ;
    align-items : center ; */
`;

const SearhInput = styled.input`
    all : unset ;

    position : relative ;

    width : 100% ;
    height : 36px ;

    float : left ;

    font-weight : 550 ;

    font-size : 16px ;
    color : #424242 ;

    border-bottom : 1.5px solid  #424242 ;
    padding-left : 5px ;

    &:focus {
        background-color : #f5f5f5 ;
    }

    &::placeholder {
        color : #888 ;
    }
`;

const AsideMenu = ({ asideData, searchContents, searchTitle }) => {

    const { tabletL } = size ;

    const [ search, setSearch ] = useState('') ;
    const [ goDocument, setGoDocument ] = useState(true) ;
    const [ searchPosition, setSearchPosition ] = useState(false) ;

    useEffect(() => {

        if(!goDocument) 
            setGoDocument(true) ;


    }, [goDocument, setGoDocument]) ;

    const viewContentNumCheck = innerWidth => {
        if(innerWidth <= tabletL ) {
            setSearchPosition(true) ;
        }else if( innerWidth >= tabletL ) {
            setSearchPosition(false) ;
        }
      }

    const onResize = (e) => {
        const { currentTarget : { innerWidth } } = e ;

        viewContentNumCheck(innerWidth) ;
    }

    useEffect(() => {
        const { innerWidth } = window ;

        viewContentNumCheck(innerWidth) ;
    
        window.addEventListener('resize', onResize, false) ;
    
        return () => {
          window.removeEventListener('resize', onResize, false) ;
        }
      }, []) ;

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
                {searchPosition ? (null)  : (<SearchContainer>
                    <Form onSubmit={onSearchTitle}>
                        <FontAwesomeIconContainer>
                            <StyledFontAwesomeIcon icon={faSearch}  size="2x" onClick={onSearchTitle} />
                        </FontAwesomeIconContainer>
                        <SearhInput onChange={onChangeSearchValue} value={search} placeholder="게시물 검색.." />
                    </Form>
                </SearchContainer>)}
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
                {searchPosition ? (<SearchContainer>
                    <Form onSubmit={onSearchTitle}>
                        <FontAwesomeIconContainer>
                            <StyledFontAwesomeIcon icon={faSearch}  size="2x" onClick={onSearchTitle} />
                        </FontAwesomeIconContainer>
                        <SearhInput onChange={onChangeSearchValue} value={search} placeholder="게시물 검색.." />
                    </Form>
                </SearchContainer>) : (null)}
            </Container>
            ) : (
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