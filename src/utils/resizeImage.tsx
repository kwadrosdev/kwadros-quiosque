const createImage = (url: any) =>
  new Promise<any>((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

export function resizeImage(file: File) {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();

    // Set the image for the FileReader
    reader.addEventListener(
      'load',
      async () => {
        const img: any = await createImage(reader.result);
        const canvas = document.createElement('canvas');

        // Create your canvas
        const res = canvas.getContext('2d');
        if (!res || !(res instanceof CanvasRenderingContext2D)) {
          throw new Error('Failed to get 2D context');
        }
        const ctx: CanvasRenderingContext2D = res;

        ctx.drawImage(img, 0, 0);

        const MAX_WIDTH = 1440;
        const MAX_HEIGHT = 1440;
        let width = img.width;
        let height = img.height;

        // Add the resizing logic
        if (width > height) {
          if (width > MAX_WIDTH) {
            height = (height / width) * MAX_WIDTH;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = (width / height) * MAX_HEIGHT;
            height = MAX_HEIGHT;
          }
        }

        //Specify the resizing result
        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        const dataurl = canvas.toDataURL('image/png');
        return resolve(dataurl);
      },
      false
    );

    reader.readAsDataURL(file);
  });
}
