import React, { useEffect, useState } from 'react' ;
import { connect } from 'react-redux';
import styled from 'styled-components' ;

import AsideContent from './AsideContent' ;
import { createAction } from '../../Store/store' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faSearch, faAlignJustify } from '@fortawesome/free-solid-svg-icons' ;
import { Link } from 'react-router-dom';
import { DOCUMENT } from '../../Util/routes';

import { size } from '../../Util/theme' ;

const Container = styled.div`
    width : 100% ;

    display : ${props => props.display} ;

    font-family: 'Ubuntu', sans-serif ;

    padding : 15px 5px ;

    @media ${props => props.theme.mobileS} {
        position : fixed ;
        width : 30% ;
        top : 40px ;
        left : 0 ;

        z-index : 99 ;

        padding : 3px 0 3px 5px ;

        border-top-right-radius : 20px ;
        border-bottom-right-radius : 20px ;

        background-color : #111 ;

        opacity : 0.9 ;
    }
`;

const BigAsideMenuContainer = styled.ul`
    width : 100% ;
    float : left ;
`;

const AllDataViewButton = styled.div`
    width : 80% ;

    float : left ;

    text-align : center ;
    margin-top : 30px ;
    font-size : 16px ;
    font-weight : 550 ;

    padding : 20px 10px 20px 10px ;

    color : #9e9e9e ;

    user-select : none ;
    cursor : pointer ;

    &:hover { 
        background-color : #e8eaf6 ;
        color : #3949ab ;
    }

    @media ${props => props.theme.laptop} {
        font-size : 12px ;
        margin-left : 5px ;

    }
    @media ${props => props.theme.mobileS} {
        font-size : 8px ;
        padding : 10px 6px 10px 6px ;
        margin-top : 10px ;
        color : #e0e0e0 ;

        &:hover {
            background-color : inherit ;
            color : #e0e0e0 ;
        }
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

    @media ${props => props.theme.mobileS} {
        font-size : 10px ;
    }
`;

const StyledFontAwesomeIconMenu = styled(FontAwesomeIcon)`

    display : ${props => props.display} ;
    position : fixed ;

    font-size : 18px ;
    
    z-index : 100;
    top : 11px ;
    left : 11px ;

    color : #fff ;
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

    @media ${props => props.theme.mobileS} {
        top : 0px ;
        right : 0px ;
    }
`;

const Form = styled.form`
    float : left ;

    position : relative ;

    width : 200px ;
    height : 40px ;

    font-family: 'Ubuntu', sans-serif ;

    @media ${props => props.theme.mobileS} {
        width : 80px ;
        height : 20px ;
    }
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

    &::placeholder {
        color : #888 ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 8px ;
        height : 18px ;
        padding-left : 0px ;
        color : #fff ;

        &::placeholder {
            color : #fff ;
        }
    }
`;

const AsideMenu = ({ asideData, searchContents, searchTitle }) => {

    const { mobileS } = size ;

    const [ search, setSearch ] = useState('') ;

    const [ show, setShow ] = useState(window.innerWidth <= mobileS ? true : false) ;
    const [ menu, setMenu ] = useState(window.innerWidth <= mobileS ? false : true) ;

    const viewContentNumCheck = innerWidth => {
        if( innerWidth <= mobileS ) {
            setShow(true) ;
            setMenu(false) ;
        }else if( innerWidth > mobileS ) {
            setShow(false) ;
            setMenu(true) ;
        }
    }

    const onResize = (e) => {
        const { currentTarget : { innerWidth } } = e ;

        viewContentNumCheck(innerWidth) ;
    }

    useEffect(() => {
        window.addEventListener('resize', onResize, false) ;
    
        return () => {
          window.removeEventListener('resize', onResize, false) ;
        }
      }, []) ;

      function onClickSideMenuEvent(e) {
        e.stopImmediatePropagation() ;
        setMenu(false) ;
      }

      useEffect(() => {
        if(menu)
            window.onclick = onClickSideMenuEvent ;
        else
            window.onclick = null ;
      }, [ menu ])
 
    function onClickMenuContent(e, search) {
        e.nativeEvent.stopImmediatePropagation() ;
        searchContents(search) ;
    }

    function onSearchTitle(e) {
        e.nativeEvent.stopImmediatePropagation() ;
        e.preventDefault() ;

        searchTitle(search) ;

        setSearch('') ;
    }

    function onChangeSearchValue(e) {
        e.nativeEvent.stopImmediatePropagation() ;
        setSearch(e.target.value) ;
    }

    function onClickMenu(e) {
        e.nativeEvent.stopImmediatePropagation() ;
        setMenu(!menu) ;
    }

    return (
        <>
            <StyledFontAwesomeIconMenu icon={faAlignJustify} display={show ? 'block' : 'none'} onClick={onClickMenu}/>
                <Container display={menu ? 'block' : 'none'}>
                    <SearchContainer>
                        <Form onSubmit={onSearchTitle}>
                            <FontAwesomeIconContainer>
                                <StyledFontAwesomeIcon icon={faSearch} onClick={onSearchTitle} />
                            </FontAwesomeIconContainer>
                            <SearhInput 
                                onClick={(e) => e.nativeEvent.stopImmediatePropagation()} 
                                onChange={onChangeSearchValue} value={search} 
                                placeholder="게시물 검색.." 
                            />
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
                    <Link to={DOCUMENT}>
                        <AllDataViewButton onClick={(e) => onClickMenuContent(e)}>
                            전체 보기
                        </AllDataViewButton>
                    </Link>
                </Container>
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