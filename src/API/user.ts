import api from './config';

export const getUsers = () => api.get('/user/');

export const getUserById = (userId: string) => api.get(`/user/${userId}`);

export const signup = (body:any) => api.post('/user/signup', {
  ...body,
})

export const signin = (body: any) => api.post('/user/signin', {
  ...body,
})

export const updateUserBasket = (userId: string,  body: any) => api.post(`/user/update-basket/${userId}`, {
  ...body,
})
