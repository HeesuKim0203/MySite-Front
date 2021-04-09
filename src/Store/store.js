import { createStore, combineReducers } from 'redux' ;
import { typeChartData } from '../Util/util' ;

const STORE_DEFAULT_DATA = 'STORE_DEFAULT_DATA' ;

const setDefaultData = defaultData => ({
        type : STORE_DEFAULT_DATA,
        defaultData
}) ;


const contentReducer = (
    state = {
        defaultData : [],
        contentType : []
    },
    action
) => {

    switch(action.type) {
        case STORE_DEFAULT_DATA :

            const contentType = action.defaultData.reduce((prev, element) => {

                prev.forEach((typeData) => {
                    if(typeData.type === element.type)
                        typeData.num ++ ;
                }) ;
                return prev ;
            }, typeChartData) ;

             return {
                ...state,                                            
                defaultData :  action.defaultData,
                contentType
            } ; 
        default :
            return state ;
     }
}

const reducer = combineReducers({
    content : contentReducer,
}) ;

const store = createStore(reducer) ;

export const createAction = {
    setDefaultData,
} ;

export default store ;
