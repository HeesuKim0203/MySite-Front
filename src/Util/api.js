import axios from 'axios' ;

const api = axios.create({
    baseURL : 'https://heesuserver.site',
}) ;

export const getContents = () => api.get('/api/contents') ;
export const getContent = id => api.get(`/api/contents/${id}`) ;
export const getProjectList = () => api.get('api/projects') ;
export const insertComment = commentData => api.post('api/comments', commentData) ;
export const deleteComment = id => api.delete(`api/comments/${id}`) ;
export const updateComment = (commentData, id) => api.post(`api/comments/${id}`, commentData) ;
export const getCommets = contentId => api.get(`api/comments/${contentId}`) ;
export const checkUser = userData => api.post('api/comments/check', userData) ;
export const checkVisitor = () => api.post('api/visitors') ;
