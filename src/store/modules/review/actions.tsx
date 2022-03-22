interface YampiProduct {
  id: string;
  url: string;
}

interface ImgFile {
  id: string;
  src: string | null;
  cropped: string | null;
  dimensions: {
    x: number;
    y: number;
    zoom: number;
  };
  small?: boolean;
}

export function setOpenCheckoutPreview({
  payload,
}: {
  payload: { open: boolean; url: string; price: number | null; extraPrice: number | null; extraKwadros: number | null };
}) {
  return {
    type: '@review/SET_CHECKOUT_PREVIEW',
    payload,
  };
}

export function setCurrentFrame({ payload }: { payload: string }) {
  return {
    type: '@review/SET_CURRENT_FRAME',
    payload,
  };
}

export function setImgFiles({ payload }: { payload: Array<ImgFile> }) {
  return {
    type: '@review/SET_FILES',
    payload,
  };
}

export function openCropModal({ payload }: { payload: ImgFile }) {
  return {
    type: '@review/OPEN_CROP_MODAL',
    payload,
  };
}

export function closeCropModal() {
  return {
    type: '@review/CLOSE_CROP_MODAL',
  };
}

export function handleDeleteTile({ payload }: { payload: string }) {
  return {
    type: '@review/DELETE_TILE',
    payload,
  };
}

export function keepImgTile({ payload }: { payload: string }) {
  return {
    type: '@review/KEEP_TILE',
    payload,
  };
}

export function updateTile({ payload }: { payload: ImgFile }) {
  return {
    type: '@review/UPDATE_TILE',
    payload,
  };
}

export function setYampiProducts({ payload }: { payload: Array<YampiProduct> }) {
  return {
    type: '@review/SET_YAMPI_PRODUCTS',
    payload,
  };
}

export function setInstagramModalOpen({ payload }: { payload: boolean }) {
  return {
    type: '@review/SET_INSTAGRAM_MODAL_OPEN',
    payload,
  };
}

export function setFbTokenLoading({ payload }: { payload: boolean }) {
  return {
    type: '@review/SET_FB_TOKEN_LOADING',
    payload,
  };
}

export function setInstagramLoading({ payload }: { payload: boolean }) {
  return {
    type: '@review/SET_INSTAGRAM_LOADING',
    payload,
  };
}

export function setInstagramImages({ payload }: { payload: Array<{ id: string; url: string }> }) {
  return {
    type: '@review/SET_INSTAGRAM_IMAGES',
    payload,
  };
}

export function setInstagramNextPage({ payload }: { payload: string }) {
  return {
    type: '@review/SET_INSTAGRAM_NEXTPAGE',
    payload,
  };
}

export function setInstagramSelected({ payload }: { payload: { id: string; url: string } }) {
  return {
    type: '@review/SET_INSTAGRAM_SELECTED',
    payload,
  };
}

export function removeInstagramSelected({ payload }: { payload: string }) {
  return {
    type: '@review/REMOVE_INSTAGRAM_SELECTED',
    payload,
  };
}

export function clearInstagramSelected() {
  return {
    type: '@review/REMOVE_INSTAGRAM_SELECTED',
  };
}

export function setCheckoutLoading({ payload }: { payload: boolean }) {
  return {
    type: '@review/SET_CHECKOUT_LOADING',
    payload,
  };
}

export function setMaxKwadros({ payload }: { payload: number }) {
  return {
    type: '@review/SET_MAX_KWADROS',
    payload,
  };
}

export function setloadingTilesCountCount({ payload }: { payload: number }) {
  return {
    type: '@review/SET_LOADING_TILES',
    payload,
  };
}
