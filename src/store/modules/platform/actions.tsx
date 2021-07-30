export function setResponsive({ payload }: { payload: boolean }) {
  return {
    type: '@platform/SET_RESPONSIVE',
    payload,
  };
}
