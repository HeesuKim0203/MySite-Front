import { useEffect, useState } from 'react' ;
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components' ;
import { createAction } from '../../Store/store';

import {
    DOCUMENT
} from '../../Util/routes' ;

const Button = styled.button`
    all : unset ;

    padding : 10px 20px ;

    font-size : 18px ;
    font-weight : 900 ;

    border-radius : ${props => props.theme.color.contentBorderRadius} ;
    
    color : ${props => props.select ? props.theme.selectColor : props.theme.color.buttonFontColor} ;

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

const ButtonContainer = ({ 
    location : { 
        pathname 
    },  
    buttonsData, 
    updateSelect, 
    select, 
    updatePageSelect, 
    pageButtonsData, 
    pageSelect 
}) => {

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
        <Container onClick={onClickButton} className="notranslate">
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

export default withRouter(connect(
    ({ 
        content : { 
            buttonsData, 
            select, 
            pageButtonsData, 
            pageSelect 
        } 
    }) => ({
        buttonsData,
        select,
        pageButtonsData, 
        pageSelect
    }), 
    dispatch => (
        {
            updateSelect : select => dispatch(createAction.updateSelect(select)),
            updatePageSelect : select => dispatch(createAction.updatePageSelect(select))
        }
    ))(ButtonContainer)) ;