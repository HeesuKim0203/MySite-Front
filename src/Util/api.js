import axios from 'axios' ;

const api = axios.create({
    baseURL : 'http://54.145.229.76:80',
}) ;

export { api } ;

export const axiosApi = {
    getContents : () => api.get('/api/contents'),
    createContent : (data) => api.post('/api/contents', data),
    imgTest : file => api.post('/api/images', file, { 
        headers : { 'Content-Type' : 'multipart/form-data' }
    }),
    login : userData => api.post('/api/auth/login', userData),
    token : tokenData => api.post('/api/test', tokenData),
    logout : (aa, token) => api.post('/api/auth/logout', aa, {
        headers : { 
            'Authorization' : 'Bearer ' + token
        }
    })
} ;
