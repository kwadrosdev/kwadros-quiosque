export function setName({ payload }: { payload: string }) {
  return {
    type: '@user/SET_NAME',
    payload,
  };
}

export function setEmail({ payload }: { payload: string }) {
  return {
    type: '@user/SET_EMAIL',
    payload,
  };
}

export function setStep({ payload }: { payload: number }) {
  return {
    type: '@user/SET_STEP',
    payload,
  };
}

export function setFbToken({ payload }: { payload: { access_token: string | null } }) {
  return {
    type: '@user/SET_FB_TOKEN',
    payload,
  };
}

export function clearFbToken() {
  return {
    type: '@user/CLEAR_FB_TOKEN',
  };
}
