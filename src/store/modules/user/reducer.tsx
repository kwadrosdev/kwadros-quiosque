import { AnyAction } from 'redux';

const INITIAL_STATE = {
  name: '',
  email: '',
  step: 0,
  fb: {
    // code: '',
    access_token: '',
    user_id: '',
  },
};

function userReducer(state = INITIAL_STATE, { type, payload }: AnyAction) {
  switch (type) {
    case '@user/SET_NAME':
      state = {
        ...state,
        name: payload,
      };
      break;

    case '@user/SET_EMAIL':
      state = {
        ...state,
        email: payload,
      };
      break;

    case '@user/SET_STEP':
      state = {
        ...state,
        step: payload,
      };
      break;

    // case '@user/SET_FB_CODE':
    //   state = {
    //     ...state,
    //     fb: {
    //       ...state.fb,
    //       code: payload,
    //     },
    //   };
    //   break;

    case '@user/SET_FB_TOKEN':
      state = {
        ...state,
        fb: payload,
      };
      break;

    default:
      return state;
  }

  return state;
}

export default userReducer;
