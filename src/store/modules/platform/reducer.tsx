import { AnyAction } from 'redux';

const INITIAL_STATE = {
  responsive: true,
};

function platformReducer(state = INITIAL_STATE, { type, payload }: AnyAction) {
  switch (type) {
    case '@platform/SET_RESPONSIVE':
      state = {
        ...state,
        responsive: payload,
      };
      break;

    default:
      return state;
  }

  return state;
}

export default platformReducer;
