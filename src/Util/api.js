import axios from 'axios' ;

const api = axios.create({
    baseURL : 'https://heesuserver.site',
}) ;

export const axiosApi = {
    getContents : () => api.get('/api/contents'),
    getProjectList : () => api.get('api/projects'),
    insertComment : commentData => api.post('api/comments', commentData),
    deleteComment : id => api.delete(`api/comments/${id}`),
    updateComment : (commentData, id) => api.post(`api/comments/${id}`, commentData),
    getCommets : contentId => api.get(`api/comments/${contentId}`),
    checkUser : userData => api.post('api/comments/check', userData),
    checkVisitor : () => api.post('api/visitors'),
} ;
