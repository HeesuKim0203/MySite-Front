import { createStore, combineReducers } from 'redux' ;

import { 
    blogContentNum,
    blogPageContentNum,
} from '../Util/util' ;

const STORE_DEFAULT_DATA = 'STORE_DEFAULT_DATA' ;
const PROJECT_DEFAULT_DATA = 'PROJECT_DEFAULT_DATA' ;

const SET_PAGE_CONTENTS_DATA = 'SET_PAGE_CONTENTS_DATA' ;

const UPDATE_SELECT = 'UPDATE_SELECT' ;
const UPDATE_PAGE_SELECT = 'UPDATE_PAGE_SELECT' ;

const SEARCH_CONTENTS = 'SEARCH_CONTENTS' ;
const SEARCH_TITLE = 'SEARCH_TITLE' ;

const setDefaultData = defaultData => ({
    type : STORE_DEFAULT_DATA,
    defaultData
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

const setProjectContents = (defaultData) => ({
    type : PROJECT_DEFAULT_DATA,
    defaultData
}) ;

// search all -> search 값 보내기 x
const dataForm = (array, count, search) => {

    let num = 0 ;

    return !search ? array.reduce((prev, item, index ) => {
        if(index === num) {
            prev.push([]) ;
            num += count ;
        }
        prev[num / count - 1][index % count] = item ;
        return prev ;
    }, []) 
    :  array.filter(item =>  search === item.type).reduce((prev, item, index) => {
        if(index === num) {
            prev.push([]) ;
            num += count ;
        }
        prev[num / count - 1][index % count] = item ;

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

    switch(action.type) {
        case STORE_DEFAULT_DATA :

            contentsData = dataForm(action.defaultData, blogContentNum) ;

            buttonsData = contentsData.map((__, index) => index) ;

            const pageData = action.defaultData.map(content => ({ 
                id : content.id,
                title : content.title, 
                created_at : content.created_at.substring(0, 10) 
            })) ;

            const data = dataForm(pageData, blogPageContentNum) ;

             return {
                ...state,                                            
                defaultData :  action.defaultData,
                contentsData,
                buttonsData,
                pageContents : data,
                pageButtonsData : data.map((__, index) => index)
            } ; 
 
         case SEARCH_CONTENTS :

            contentsData = dataForm(state.defaultData, blogContentNum, action.searchValue) ;
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

        case UPDATE_PAGE_SELECT : 
            return {
                ...state,
                pageSelect : action.select 
            }
        case SEARCH_TITLE : 
                
            contentsData = state.defaultData
                        .filter(item => item.title.includes(action.searchValue, 0) || item.title.toUpperCase().includes(action.searchValue.toUpperCase(), 0))
                        .reduce((prev, item, index) => {
                            if(index === num) {
                                prev.push([]) ;
                                num += blogContentNum ;
                            }
                            prev[num / blogContentNum - 1][index % blogContentNum] = item ;
                    
                            return prev ;
                        }, [])

            buttonsData = contentsData.map((__ , index) => index) ;

            return {
                ...state,
                contentsData,
                buttonsData
            }
        default :
            return state ;
     }
}

const projectReducer = (
    state = {
        projectsData : [],
    },
    action
) => {
    switch(action.type) {
        case PROJECT_DEFAULT_DATA :
            return {
                projectsData : action.defaultData
            } ;
        default : 
            return state ;
    }
} ;

const reducer = combineReducers({
    content : contentReducer,
    project : projectReducer
}) ;

const store = createStore(reducer) ;

export const createAction = {
    updateSelect,
    setPageContents,
    updatePageSelect,
    searchContents,
    setDefaultData,
    searchTitle,
    setProjectContents
} ;

export default store ;
