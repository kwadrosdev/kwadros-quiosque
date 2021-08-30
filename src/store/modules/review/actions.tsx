interface UpdateTilePayload {
  index: number;
  img: any;
}

interface YampiProduct {
  id: string;
  url: string;
}

export function setCurrentFrame({ payload }: { payload: string }) {
  return {
    type: '@review/SET_CURRENT_FRAME',
    payload,
  };
}

export function setImgFiles({ payload }: { payload: any[] }) {
  return {
    type: '@review/SET_FILES',
    payload,
  };
}

export function openCropModal({ payload }: { payload: number }) {
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

export function handleDeleteTile({ payload }: { payload: number }) {
  return {
    type: '@review/DELETE_TILE',
    payload,
  };
}

export function updateTile({ payload }: { payload: UpdateTilePayload }) {
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
