import { AnyAction } from 'redux';

const INITIAL_STATE = {
  name: '',
  email: '',
  step: 0,
  fb: {
    access_token: null,
  },
};

function userReducer(state = INITIAL_STATE, { type, payload }: AnyAction) {
  switch (type) {
    case '@user/SET_NAME':
      localStorage.setItem('name', payload);
      state = {
        ...state,
        name: payload,
      };
      break;

    case '@user/SET_EMAIL':
      localStorage.setItem('email', payload);
      state = {
        ...state,
        email: payload,
      };
      break;

    case '@user/SET_STEP':
      localStorage.setItem('step', payload);
      state = {
        ...state,
        step: payload,
      };
      break;

    case '@user/SET_FB_TOKEN':
      state = {
        ...state,
        fb: payload,
      };
      break;

    case '@user/CLEAR_FB_TOKEN':
      state = {
        ...state,
        fb: INITIAL_STATE.fb,
      };
      break;

    default:
      return state;
  }

  return state;
}

export default userReducer;
