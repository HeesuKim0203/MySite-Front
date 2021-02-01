import React from 'react' ;
import { connect } from 'react-redux';
import styled from 'styled-components' ;

import AsideContent from './AsideContent' ;
import { createAction } from '../../Store/store' ;

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
    margin-top : 30px ;
    font-size : 20px ;
    font-weight : 550 ;

    text-align : center ;

    padding : 20px 0 ;

    color : #9e9e9e ;

    user-select : none ;
    cursor : pointer ;

    &:hover {
        background-color : #e8eaf6 ;
        color : #3949ab ;
    }
`;

const AsideMenu = ({ asideData, defaultData, searchContents  }) => {

    function onClickMenuContent(search) {
        searchContents(defaultData, search) ;
    }

    return (
        <Container>
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
            <AllDataViewButton onClick={() => onClickMenuContent()}>
                전체 보기
            </AllDataViewButton>
            </BigAsideMenuContainer>
        </Container>
    );
};

function mapStateToProps(state) {
    const { 
        content : { 
            defaultData 
        } 
    } = state ;
    return {
        defaultData
    } ;
} ;

function mapDispatchToProps(dispatch) {
    return {
        searchContents : (defaultData, search) => dispatch(createAction.searchContents(defaultData, search))
    }
} ;


export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu) ;