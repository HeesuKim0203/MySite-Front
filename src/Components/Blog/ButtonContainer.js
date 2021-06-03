import { useEffect, useState } from 'react' ;
import { withRouter } from 'react-router-dom' ;
import { connect } from 'react-redux' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import { createAction } from '../../Store/store';

import {
    DOCUMENT
} from '../../Util/routes' ;

const Button = styled.button`
    all : unset ;

    width : 27px ;
    height : 27px ;

    display : flex ;
    
    justify-content : center ;
    align-items : center ;

    font-size : 18px ;
    font-weight : 900 ;

    color : ${ props => props.select ? props.theme.selectColor : props.theme.color.buttonFontColor} ;

    &:not(:first-child) {
        margin-left : 10px ;
    }

    user-select : none ;
    cursor : pointer ;
`;

const Container = styled.div`
    float : left ;
    width : 100% ;
    
    display : inline-flex ;
    justify-content : center ;
    align-items : center ;

    margin : 0 auto ;
`;

const NumberButtonContainer = styled.div`

    float : left ;

    display : flex ;
    justify-content : center ;
    align-items : center ;

    margin-left : 10px ;
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

    function onClickLeftButton(e) {

        if( Number( documentState ? select : pageSelect ) <= 0 ) 
            return ;

        return documentState ? updateSelect(select - 1)
        : updatePageSelect(pageSelect - 1) ;
    }

    function onClickRightButton(e) {

        if(documentState ?  select >= buttonsData.length - 1 : pageSelect >= pageButtonsData.length - 1) 
            return ;

        return documentState ? updateSelect(select + 1)
        : updatePageSelect(pageSelect + 1) ;
    }

    return (
        <Container className="notranslate">
            { buttonsData.length ? 
                (<Button onClick={onClickLeftButton}>
                    <FontAwesomeIcon icon={faChevronCircleLeft}/>
                </Button>) : null 
            }
            <NumberButtonContainer onClick={onClickButton} >
                { documentState ? ( buttonsData && buttonsData.map((__, index) => {
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
            </NumberButtonContainer>
            { buttonsData.length ?
                (<Button onClick={onClickRightButton}>
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                </Button>) : null 
            }
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