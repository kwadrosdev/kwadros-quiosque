import { AnyAction } from 'redux';

const INITIAL_STATE = {
  currentFrame: 'ever',
  yampiProducts: [] as any,
  cropModal: {
    open: false,
    index: 0,
    img: {
      src: '',
      dimensions: {
        x: 0,
        y: 0,
        zoom: 1,
      },
    },
  },
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

    case '@review/OPEN_CROP_MODAL':
      state = {
        ...state,
        cropModal: {
          index: payload,
          img: state.files[payload],
          open: true,
        },
      };
      break;

    case '@review/CLOSE_CROP_MODAL':
      state = {
        ...state,
        cropModal: {
          ...state.cropModal,
          open: false,
        },
      };
      break;

    case '@review/DELETE_TILE':
      const _files = [...state.files];
      _files.splice(payload, 1);

      state = {
        ...state,
        files: _files,
      };
      break;

    case '@review/UPDATE_TILE':
      const _imgfiles = [...state.files];
      _imgfiles.splice(payload.index, 1, payload.img);

      state = {
        ...state,
        files: _imgfiles,
      };
      break;

    case '@review/SET_YAMPI_PRODUCTS':
      state = {
        ...state,
        yampiProducts: payload,
      };
      break;

    default:
      return state;
  }

  return state;
}

export default reviewReducer;
