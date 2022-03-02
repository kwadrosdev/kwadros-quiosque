self.importScripts('https://unpkg.com/dexie@3.2.1/dist/dexie.js');

self.addEventListener('install', () => {
  console.log('Service Worker Installed🤙');
});

self.addEventListener('sync', (event) => {
  const tag = `${event.tag}`;
  if (tag.startsWith('uploadFile:')) {
    const fileID = tag.replace('uploadFile:');
    return uploadFile(fileID);
  }

  const [asset_id, secure_url] = tag.split(',?,');
  return updateFileOrder(asset_id, secure_url);
});

const db = new Dexie('myDatabase');
db.version(1).stores({
  files: 'id, content', // Primary key and indexed props
  orders: 'id, order',
  transactions: 'id, transaction',
});

async function uploadFile(fileId) {
  const url = 'https://api.cloudinary.com/v1_1/kwadros/image/upload';
  const file = await db.files.get(fileId);
  const order = await db.orders.get('orderID');
  const transaction = await db.transactions.get('transactionID');

  const formData = new FormData();

  formData.append('file', file.content.cropped);
  formData.append('upload_preset', 'lnlih2wb');

  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((uploadedFile) => {
      const body = {
        secure_url: uploadedFile.secure_url,
        asset_id: uploadedFile.asset_id,
        order: order.order,
        transaction: transaction.transaction,
      };

      const uploadURL = 'https://api.kwadros.com/api/order/file_upload/';

      fetch(uploadURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }).then((res) => {
        return res.json();
      });
    });
}

async function updateFileOrder(asset_id, secure_url) {
  const order = await db.orders.get('orderID');
  const transaction = await db.transactions.get('transactionID');

  const body = {
    secure_url,
    asset_id,
    order: order.order,
    transaction: transaction.transaction,
  };

  const url = 'https://api.kwadros.com/api/order/file_upload/';

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => {
    return res.json();
  });
}
