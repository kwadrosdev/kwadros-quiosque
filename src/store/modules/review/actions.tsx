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
