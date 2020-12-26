import { useState } from 'react' ;
import { axiosApi } from './api' ;

export const token_check = () => {

    const [ login, setLogin ] = useState(false) ;
    
    async function tokenCheck() {
        const { data } = await axiosApi.token(test) ; 

        return data ;
    }
    
    return {
        tokenCheck,
        login,
        setLogin
    } ;
} ;