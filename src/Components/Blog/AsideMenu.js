import { useState, memo, useEffect } from 'react' ;
import { connect } from 'react-redux';
import styled from 'styled-components' ;

import AsideContent from './AsideContent' ;
import { createAction } from '../../Store/store' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faSearch, faAlignJustify } from '@fortawesome/free-solid-svg-icons' ;
import { Link } from 'react-router-dom';
import { DOCUMENT } from '../../Util/routes';

const Container = styled.aside`
    width : 100% ;

    display : block ;

    font-family: 'Ubuntu', sans-serif ;
    background-color : ${props => props.theme.color.backgroundColor} ;

    padding : 15px 5px ;

    @media ${props => props.theme.tabletL} {

        display : ${props => props.display} ;

        position : fixed ;
        width : 20% ;
        top : 58px ;
        left : 0 ;

        border-top-right-radius : 20px ;
        border-bottom-right-radius : 20px ;
        padding : 3px 0 3px 5px ;

        z-index : 800 ;

        background-color : #111 ;

        opacity : 0.9 ;
    }
    @media ${props => props.theme.mobileL} {
        top : 45px ;
        width : 30% ;
    }
    @media ${props => props.theme.mobileS} {
        top : 40px ;
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

    color : ${props => props.theme.color.aisdeMenuColor} ;

    user-select : none ;
    cursor : pointer ;

    @media ${props => props.theme.laptop} {
        padding : 10px 0 10px 0 ;
        margin-left : 5px ;
        margin-top : 0px ;
    }
    @media ${props => props.theme.tabletL} {
        color : #e0e0e0  ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 8px ;
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

    display : none ;
    position : fixed ;

    font-size : 18px ;

    z-index : 100;

    color : #fff ; 

    user-select : none ;

    @media ${props => props.theme.tabletL} {

        display : block ;

        font-size : 24px ;

        top : 18px ;
        left : 16px ;
    }
    @media ${props => props.theme.mobileL} {

        font-size : 18px ;

        top : 13px ;
        left : 12px ;
    }
    @media ${props => props.theme.mobileS} {

        font-size : 16px 
    }
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
        top : 0 ;
        right : 10px ;
    }
`;

const Form = styled.form`
    float : left ;

    position : relative ;

    width : 200px ;
    height : 40px ;

    font-family: 'Ubuntu', sans-serif ;

    @media ${props => props.theme.mobileS} {
        height : 25px ;
        width : 150px ;
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
    @media ${props => props.theme.tabletL} {
        color : #fff ;

        &::placeholder {
            color : #fff ;
        }
    }
    @media ${props => props.theme.mobileS} {
        font-size : 11px ;
        height : 20px ;
        padding-left : 0px ;
    }
`;

const AsideMenu = ({ asideData, searchContents, searchTitle }) => {

    const [ search, setSearch ] = useState('') ;

    const [ menu, setMenu ] = useState(false) ;

    function eventMiddleWare(e) {
        e.nativeEvent.stopImmediatePropagation() ;
    }

    function onClickMenuUnDisplay() {
        setMenu(false) ;
    }
    
    useEffect(() => {
        window.addEventListener('click', onClickMenuUnDisplay, false) ;

        return () => {
            window.removeEventListener('click', onClickMenuUnDisplay, false) ;
        }

    }, []) ;

 
    function onClickMenuContent(e) {
        eventMiddleWare(e) ;
        const {
            childNodes : {
                "1" : node
            }
        } = e.currentTarget ;
        
        searchContents(node.innerHTML) ;
    }

    function onClickAll(e) {
        e.nativeEvent.stopImmediatePropagation() ;
        searchTitle('') ;
    }

    function onSearchTitle(e) {
        eventMiddleWare(e) ;
        e.preventDefault() ;
        searchTitle(search) ;
        setSearch('') ;
    }

    function onChangeSearchValue(e) {
        eventMiddleWare(e) ;
        setSearch(e.target.value) ;
    }

    function onClickMenu(e) {
        e.nativeEvent.stopImmediatePropagation() ;
        setMenu(!menu) ;
    }

    function onKeyPress(e) {
        if (e.keyCode === 13)
            setSearch(e.target.value) ;
    }

    return (
        <>
            <StyledFontAwesomeIconMenu 
                icon={faAlignJustify} 
                onClick={onClickMenu}
            />
                <Container display={menu ? 'block' : 'none'}>
                    <SearchContainer>
                        <Form onSubmit={onSearchTitle}>
                            <FontAwesomeIconContainer>
                                <StyledFontAwesomeIcon icon={faSearch} onClick={onSearchTitle} />
                            </FontAwesomeIconContainer>
                            <SearhInput 
                                onKeyPress={onKeyPress}
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
                        <AllDataViewButton onClick={onClickAll}>
                            전체 보기
                        </AllDataViewButton>
                    </Link>
                </Container>
        </>
    );
};

export default connect(
    null, 
    dispatch => (
        {
            searchContents : search => dispatch(createAction.searchContents(search)),
            searchTitle : search => dispatch(createAction.searchTitle(search))
        }
    )
)(memo(AsideMenu)) ;