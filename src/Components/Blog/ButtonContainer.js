import React, { useEffect, useState } from 'react' ;
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components' ;
import { createAction } from '../../Store/store';


import {
    DOCUMENT
} from '../../Util/routes' ;

const Button = styled.button`
    all : unset ;

    padding : 15px 20px ;

    font-size : 18px ;
    font-weight : 900 ;

    color : ${props => props.select ? '#3949ab' : '#cfd8dc'} ;
    background-color : ${props => props.select ? '#e8eaf6' : '#fff'} ;

    &:hover {
        background-color : #e8eaf6 ;
        color : #3949ab ;
    }

    @media ${props => props.theme.mobileL} {
        padding : 8px 10px ;
        font-size : 12px ;
    }
`;

const Container = styled.div`

    float : left ;
    width : 100% ;

    display : flex ;
    
    justify-content : center ;
    align-items : center ;
`;

const ButtonContainer = ({ location : { pathname },  buttonsData, updateSelect, select, updatePageSelect, pageButtonsData, pageSelect }) => {

    const [ documentState, setDocumentState ] = useState(false) ;


    useEffect(() => {
        
        setDocumentState(pathname === DOCUMENT ?  true : false) ;

    }, [ pathname, setDocumentState, documentState ]) ;

    function onClickButton(e) {
        return  e.target !== e.currentTarget ? 
            ( documentState ? updateSelect(e.target.innerHTML - 1)
            : updatePageSelect(e.target.innerHTML - 1)) : null ;
    } ;
    return (
        <Container onClick={onClickButton}>
                { documentState ? (buttonsData && buttonsData.map((__, index) => {
                    return select === index ? (
                        <Button 
                            key={index}
                            select={true}
                        >{index + 1}</Button>
                    ) : (
                        <Button 
                            key={index}
                        >{index + 1}</Button>
                    ) ;
                })) : (pageButtonsData && pageButtonsData.map((__, index) => {
                    return pageSelect === index ? (
                        <Button 
                            key={index}
                            select={true}
                        >{index + 1}</Button>
                    ) : (
                        <Button 
                            key={index}
                        >{index + 1}</Button>
                    ) ;
                })) }
            </Container>
    );
};

function mapStateToProps(state) {

    const { 
        content : {
            buttonsData, select, pageButtonsData, pageSelect
        } 
    } = state ;
    return {
        buttonsData,
        select,
        pageButtonsData, 
        pageSelect
    } ;
} ;

function mapDispatchToProps(dispatch) {
    return {
        updateSelect : select => dispatch(createAction.updateSelect(select)),
        updatePageSelect : select => dispatch(createAction.updatePageSelect(select))
    }
} ;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonContainer)) ;