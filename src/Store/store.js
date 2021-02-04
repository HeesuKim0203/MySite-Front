import { createStore, applyMiddleware, combineReducers } from 'redux' ;
import logger from 'redux-logger' ;

import { blogContentNum, blogPageContentNum } from '../Util/util' ;

const STORE_DEFAULT_DATA = 'STORE_DEFAULT_DATA' ;

const SET_CONTENTS_DATA = 'SET_CONTENTS_DATA' ;
const SET_PAGE_CONTENTS_DATA = 'SET__PAGE_CONTENTS_DATA' ;

const UPDATE_SELECT = 'UPDATE_SELECT' ;
const UPDATE_PAGE_SELECT = 'UPDATE_PAGE_SELECT' ;

const SEARCH_CONTENTS = 'SEARCH_CONTENTS' ;
const SEARCH_TITLE = 'SEARCH_TITLE' ;

const setDefaultData = defaultData => ({
        type : STORE_DEFAULT_DATA,
        defaultData
}) ;

const setContents = () => ({
    type : SET_CONTENTS_DATA,
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

const searchContents = (searchValue) => ({
    type : SEARCH_CONTENTS,
    searchValue,
}) ;

const searchTitle = (searchValue) => ({
    type : SEARCH_TITLE,
    searchValue
}) ;

// search all -> search 값 보내기 x
const dataForm = (array, search) => {

    let num = 0 ;
    const numCounte = blogContentNum ;

    return !search ? array.reduce((prev, item, index ) => {
        if(index === num) {
            prev.push([]) ;
            num += numCounte ;
        }
        prev[num / numCounte - 1][index % numCounte] = item ;
        return prev ;
    }, []) 
    :  array.filter(item =>  search === item.type).reduce((prev, item, index) => {
        if(index === num) {
            prev.push([]) ;
            num += numCounte ;
        }
        prev[num / numCounte - 1][index % numCounte] = item ;

        return prev ;
    }, [])
}

const contentReducer = (
    state = {
        defaultData : [],
        contentsData : [],
        buttonsData : [],
        pageContents : [],
        pageButtonsData : [],
        select : 0,
        pageSelect : 0,
    },
    action
) => {

    let contentsData ;
    let buttonsData ;

    let num = 0 ;
    const numCounte = blogPageContentNum ;

    switch(action.type) {
        case STORE_DEFAULT_DATA :

            const arrayDataSet = action.defaultData.map((content, index) => ({ 
                ...content,
                id : index
            })) ;

             return {
                ...state,                                            
                defaultData : arrayDataSet
            } ; 
             
         case SET_CONTENTS_DATA :

            contentsData = dataForm(state.defaultData) ;
            buttonsData = contentsData.map((__, index) => index) ;

             return {
                 ...state,
                 contentsData,
                 buttonsData
             } ;
 
         case SEARCH_CONTENTS :

            contentsData = dataForm(state.defaultData, action.searchValue) ;
            buttonsData = contentsData.map((__ , index) => index) ;
 
             return {
                 ...state, 
                 contentsData,
                 buttonsData
             }

        case UPDATE_SELECT :

            return {
                ...state,
                select : action.select 
            }
        case SET_PAGE_CONTENTS_DATA :

            const pageData = action.contents.map((content, index) => ({ 
                id : index,
                title : content.title, 
                updated_at : content.updated_at.substring(0, 10) 
            })) ;

            const data = pageData.reduce((prev, item, index) => {
                if(index === num) {
                    prev.push([]) ;
                    num += numCounte ;
                }
                prev[num / numCounte - 1][index % numCounte] = item ;
                return prev ;
            }, []) ;

            buttonsData = data.map((__, index) => index) ;

            return {
                ...state,
                pageContents : data,
                pageButtonsData : buttonsData
            } ;

        case UPDATE_PAGE_SELECT : 
            return {
                ...state,
                pageSelect : action.select 
            }
        case SEARCH_TITLE : 

            return {
                ...state,
                contentsData : state.defaultData
                            .filter(item => item.title.includes(action.searchValue, 0))
                            .reduce((prev, item, index) => {
                    if(index === num) {
                        prev.push([]) ;
                        num += numCounte ;
                    }
                    prev[num / numCounte - 1][index % numCounte] = item ;
            
                    return prev ;
                }, [])
            }
        default :
            return state ;
     }
}

const reducer = combineReducers({
    content : contentReducer,
}) ;

const store = createStore(reducer, applyMiddleware(logger)) ;

export const createAction = {
    setContents,
    updateSelect,
    setPageContents,
    updatePageSelect,
    searchContents,
    setDefaultData,
    searchTitle
} ;

export default store ;