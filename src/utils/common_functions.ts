export const checkImgQuality = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve((img.width <= 499 || img.height <= 499));
    img.onerror = reject;
    img.src = src;
  });
};