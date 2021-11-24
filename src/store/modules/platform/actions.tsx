export function setResponsive({ payload }: { payload: boolean }) {
  return {
    type: '@platform/SET_RESPONSIVE',
    payload,
  };
}

export function setDesktop({ payload }: { payload: boolean }) {
  return {
    type: '@platform/SET_DESKTOP',
    payload,
  };
}
