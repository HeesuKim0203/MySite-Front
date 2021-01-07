import React, { useState } from 'react' ;
import { axiosApi } from './api' ;

export const useInputImg = (initialValue) => {
    const [ file, setFile ] = useState(initialValue) ;
    const [ url, setUrl ] = useState('') ;

    const onChange = e => {
        let reader = new FileReader() ;
        const {
            target : {
                files : [ fileData ]
            }
        } = e ;
        reader.onloadend = () => {
            setFile(fileData) ;
            setUrl(reader.result) ;
        }
        reader.readAsDataURL(fileData) ;
    }
    return { file, url, onChange } ;
} ;