import axios from 'axios' ;

const api = axios.create({
    baseURL : 'http://54.145.229.76:80',
}) ;

export const axiosApi = {
    getContents : () => api.get('/api/contents'),
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
    getProjectList : () => api.get('api/projects'),
    insertComment : commentData => api.post('api/comments', commentData),
    deleteComment : id => api.delete(`api/comments/${id}`),
    updateComment : (commentData, id) => api.post(`api/comments/${id}`, commentData),
    getCommets : contentId => api.get(`api/comments/${contentId}`),
    checkUser : userData => api.post('api/comments/check', userData),
    visitorNum : () => api.get('/api/visitors'),
    checkVisitor : () => api.post('api/visitors'),
} ;
