import { createStore, applyMiddleware, combineReducers } from 'redux' ;
import logger from 'redux-logger' ;

import { blogContentNum, blogPageContentNum } from '../Util/util' ;

const SET_CONTENTS_DATA = 'SET_CONTENTS_DATA' ;
const SET_PAGE_CONTENTS_DATA = 'SET__PAGE_CONTENTS_DATA' ;

const UPDATE_SELECT = 'UPDATE_SELECT' ;
const UPDATE_PAGE_SELECT = 'UPDATE_PAGE_SELECT' ;

const setContents = contents => ({
    type : SET_CONTENTS_DATA,
    contents
}) ;

const setPageContents = contents => ({
    type : SET_PAGE_CONTENTS_DATA,
    contents
}) ;

const updateSelect = select => ({
    type : UPDATE_SELECT,
    select
}) ;

const updatePageSelect = select => ({
    type : UPDATE_PAGE_SELECT,
    select
}) ;

const contentsReducer = (state =[], action) => {
    switch(action.type) {
        case SET_CONTENTS_DATA :

            let num = 0 ;
            const numCounte = blogContentNum ;

            const data = action.contents.reduce((prev, item, index ) => {
                if(index === num) {
                    prev.push([]) ;
                    num += numCounte ;
                }
                prev[num / numCounte - 1][index % numCounte] = item ;
                return prev ;
            }, []) ;

            return data ;
        default :
            return state ;
    }
} ;

const selectReducer = (
    state = 0 
, action) => {
    switch(action.type) {
        case UPDATE_SELECT :
            return action.select ;
        default :
            return state ;
    }
} ;

const pageContentsReducer = (state =[], action) => {
    switch(action.type) {
        case SET_PAGE_CONTENTS_DATA :

            const pageData = action.contents.map(content => ({ 
                title : content.title, 
                updated_at : content.updated_at.substring(0, 10) 
            })) ;

            let num = 0 ;
            const numCounte = blogPageContentNum ;

            const data = pageData.reduce((prev, item, index ) => {
                if(index === num) {
                    prev.push([]) ;
                    num += numCounte ;
                }
                prev[num / numCounte - 1][index % numCounte] = item ;
                return prev ;
            }, []) ;

            return data ;
        default :
            return state ;
    }
} ;

const pageSelectReducer = (
    state = 0 
, action) => {
    switch(action.type) {
        case UPDATE_PAGE_SELECT :
            return action.select ;
        default :
            return state ;
    }
} ;

const reducer = combineReducers({
    contents : contentsReducer,
    select : selectReducer,
    pageContents : pageContentsReducer,
    pageSelect : pageSelectReducer
}) ;

const store = createStore(reducer, applyMiddleware(logger)) ;

export const createAction = {
    setContents,
    updateSelect,
    setPageContents,
    updatePageSelect
} ;

export default store ;
