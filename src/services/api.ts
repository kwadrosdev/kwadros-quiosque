import axios from 'axios';

const api = axios.create({});

export const mainApi = axios.create({
  baseURL: 'https://api-kwadros.herokuapp.com/api',
});

export async function createOrder(body: any) {
  try {
    const { data } = await mainApi.post('/order/', body);
    return data;
  } catch (error) {
    return null;
  }
}

export async function uploadFile(body: FormData) {
  try {
    const { data } = await mainApi.post('/order/file_upload/', body);
    return data;
  } catch (error) {
    return null;
  }
}

export async function updateFileOrder(id: number, order: number) {
  try {
    const { data } = await mainApi.patch(`/order/file_upload/${id}/`, {
      order,
    });
    return data;
  } catch (error) {
    return null;
  }
}

export default api;