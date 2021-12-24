import { AnyAction } from 'redux';

const INITIAL_STATE = {
  responsive: true,
  desktop: false,
};

function platformReducer(state = INITIAL_STATE, { type, payload }: AnyAction) {
  switch (type) {
    case '@platform/SET_RESPONSIVE':
      state = {
        ...state,
        responsive: payload,
      };
      break;

    case '@platform/SET_DESKTOP':
      state = {
        ...state,
        desktop: payload,
      };
      break;

    default:
      return state;
  }

  return state;
}

export default platformReducer;
