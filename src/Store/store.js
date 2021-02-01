import { createStore, applyMiddleware, combineReducers } from 'redux' ;
import logger from 'redux-logger' ;

import { blogContentNum, blogPageContentNum } from '../Util/util' ;

const STORE_DEFAULT_DATA = 'STORE_DEFAULT_DATA' ;

const SET_CONTENTS_DATA = 'SET_CONTENTS_DATA' ;
const SET_PAGE_CONTENTS_DATA = 'SET__PAGE_CONTENTS_DATA' ;

const UPDATE_SELECT = 'UPDATE_SELECT' ;
const UPDATE_PAGE_SELECT = 'UPDATE_PAGE_SELECT' ;

const SEARCH_CONTENTS = 'SEARCH_CONTENTS' ;

const setDefaultData = defaultData => ({
        type : STORE_DEFAULT_DATA,
        defaultData
}) ;

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

const searchContents = (defaultData, searchValue) => ({
    type : SEARCH_CONTENTS,
    searchValue,
    defaultData
}) ;

// search all -> search 값 보내기 x
const dataForm = (array, search) => {

    let num = 0 ;
    const numCounte = blogContentNum ;

    const arrayDataSet = array.map((content, index) => ({ 
        ...content,
        id : index
    })) ;

    return !search ? arrayDataSet.reduce((prev, item, index ) => {
        if(index === num) {
            prev.push([]) ;
            num += numCounte ;
        }
        prev[num / numCounte - 1][index % numCounte] = item ;
        return prev ;
    }, []) 
    :  arrayDataSet.filter(item =>  search === item.type).reduce((prev, item, index) => {
        // 문제 있으면 고치자
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

    switch(action.type) {
        case STORE_DEFAULT_DATA :

             return {
                ...state,                                            
                defaultData : action.defaultData
            } ; 
             
         case SET_CONTENTS_DATA :


            contentsData = dataForm(action.contents) ;
            buttonsData = contentsData.map((__, index) => index) ;

             return {
                 ...state,
                 contentsData,
                 buttonsData
             } ;
 
         case SEARCH_CONTENTS :

            contentsData = dataForm(action.defaultData, action.searchValue) ;
            buttonsData = contentsData.map((__ , index) => index ) ;
 
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

            let num = 0 ;
            const numCounte = blogPageContentNum ;

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
    setDefaultData
} ;

export default store ;
