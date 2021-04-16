import api from './config';

export const getUsers = () => api.get('/users/');

export const addNewUser = (body:any) => api.post('/users/signup', {
  ...body,
})




export const deleteUsers = (userId: number) => api.delete(`/delete/${userId}`);

export const login = (body: any) => api.post('/login', {
  ...body,
})

export const logout = (body: any) => api.put('/logout', {
  ...body,
})

export const getUserInfo = (userId: number) => api.get(`/user-info/${userId}`);
