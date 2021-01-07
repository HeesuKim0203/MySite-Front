import React, { useState } from 'react' ;
import { connect } from 'react-redux';
import styled from 'styled-components' ;
import { createAction } from '../../Store/store';

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
        padding : 5px 8px ;
        font-size : 8px ;
    }
`;

const Container = styled.div`

    float : left ;
    width : 100% ;

    display : flex ;
    
    justify-content : center ;
    align-items : center ;
`;

const ButtonContainer = ({ contents, updateSelect, select }) => {

    function onClickButton(e) {
        return e.target !== e.currentTarget ? updateSelect(e.target.innerHTML - 1) : null ;
    } ;
    return (
        <Container onClick={onClickButton}>
                { contents && contents.map((__, index) => {
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
                })}
            </Container>
    );
};

function mapStateToProps(state) {
    // const { contents, select } = state ;
    // return {
    //     select
    // } ;
} ;

function mapDispatchToProps(dispatch) {
    // return {
    //     updateSelect : select => dispatch(createAction.updateSelect(select))
    // }
} ;

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer) ;