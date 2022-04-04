export const checkImgQuality = (src: string) => {
  return new Promise<boolean>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img.width <= 1080 || img.height <= 1080);
    img.onerror = reject;
    img.src = src;
  });
};

export const formatPrice = (price: number | null) => {
  if (!price) {
    return 'R$ ---';
  }

  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

export function b64toBlob(dataURI: any) {
  var byteString = atob(dataURI.split(',')[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: 'image/png' });
}

export function readFile(file: File) {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(typeof reader.result === 'string' ? reader.result : ''), false);
    reader.readAsDataURL(file);
  });
}
