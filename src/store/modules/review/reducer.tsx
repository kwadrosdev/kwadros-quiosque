import { AnyAction } from 'redux'


const INITIAL_STATE = {
  currentFrame: 'ever',
  files: [] as any,
};

function reviewReducer(state = INITIAL_STATE, { type, payload }: AnyAction) {
  switch (type) {
    case '@review/SET_CURRENT_FRAME':
      state = {
        ...state,
        currentFrame: payload,
      };
      break;

    case '@review/SET_FILES':
      state = {
        ...state,
        files: [...state.files, ...payload],
      };
      break;

    default:
      return state;
  }

  return state;
}

export default reviewReducer;
