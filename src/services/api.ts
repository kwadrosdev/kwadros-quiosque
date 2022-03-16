import axios from 'axios';

const api = axios.create({});

export const mainApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: process.env.NEXT_PUBLIC_API_TOKEN ?? '',
  },
});

export async function createOrder(body: { user_name: string; user_email: string; variant: string }) {
  try {
    const { data } = await mainApi.post('/order/', body);
    return data;
  } catch (error) {
    return null;
  }
}

function bgSyncUploadFile(fileId: string) {
  navigator.serviceWorker.ready
    .then((swResgistration: any) => swResgistration.sync.register(`uploadFile:${fileId}`))
    .catch((err) => console.log(err));
}

function bgSyncUpdateFileOrder(asset_id: string, secure_url: string) {
  navigator.serviceWorker.ready
    .then((swResgistration: any) => swResgistration.sync.register(`${asset_id},?,${secure_url}`))
    .catch((err) => console.log(err));
}

export async function uploadFile(body: { name: string; file: any }) {
  try {
    const url = 'https://api.cloudinary.com/v1_1/kwadros/image/upload';

    const formData = new FormData();

    formData.append('file', body.file);
    formData.append('upload_preset', 'lnlih2wb');
    const { data } = await api.post(url, formData);

    return data;
  } catch (error) {
    bgSyncUploadFile(body.name);
    return null;
  }
}

export async function updateFileOrder(body: { asset_id: string; secure_url: string; transaction: string; order: number }) {
  try {
    const { data } = await mainApi.post(`/order/file_upload/`, body);
    return data;
  } catch (error) {
    bgSyncUpdateFileOrder(body.asset_id, body.secure_url);
    return null;
  }
}

export async function createTransaction(expectedImages: number) {
  try {
    const { data } = await mainApi.post('order/transaction/', { expected_images: expectedImages });

    return data.transaction;
  } catch (error) {
    return null;
  }
}

export default api;
