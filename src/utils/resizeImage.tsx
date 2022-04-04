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
        if (file.size / 1024 / 1024 <= 6) {
          return resolve(typeof reader.result === 'string' ? reader.result : '');
        }

        const img: any = await createImage(reader.result);
        const canvas = document.createElement('canvas');

        // Create your canvas
        const res = canvas.getContext('2d');
        if (!res || !(res instanceof CanvasRenderingContext2D)) {
          throw new Error('Failed to get 2D context');
        }
        const ctx: CanvasRenderingContext2D = res;

        ctx.drawImage(img, 0, 0);

        const MAX_WIDTH = 1920;
        const MAX_HEIGHT = 1920;
        let width = img.width;
        let height = img.height;

        // Add the resizing logic
        if (width > height) {
          // if (width > MAX_WIDTH) {
          width = (width / height) * MAX_WIDTH;
          height = MAX_HEIGHT;
          // width = MAX_WIDTH;
          // }
        } else {
          height = (height / width) * MAX_HEIGHT;
          width = MAX_WIDTH;
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
