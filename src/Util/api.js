import axios from 'axios' ;

const api = axios.create({
    baseURL : 'http://54.145.229.76:80',
}) ;

export const axiosApi = {
    getContents : () => api.get('/api/contents'),
    createContent : data => api.post('/api/contents', data),
    updateContent : (id, data) => api.post(`api/contents/${id}`, data),
    addImg : (file) => api.post('/api/images', file, { 
        headers : { 'Content-Type' : 'multipart/form-data' }
    }),
    getImgList : () => api.get('api/images'),
    deleteImg : id => api.delete(`api/images/${id}`),
    login : userData => api.post('/api/auth/login', userData),
    check : token => api.post('/api/auth/user', {}, {
        headers : { 
            'Authorization' : 'Bearer ' + token
        }
    }),
    logout : (form, token) => api.post('/api/auth/logout', form, {
        headers : { 
            'Authorization' : 'Bearer ' + token
        }
    }),
    checkUser : userData => api.post('api/comments/check', userData),
    visitorNum : () => api.get('/api/visitors'),
} ;
