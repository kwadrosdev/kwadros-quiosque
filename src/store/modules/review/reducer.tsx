import { AnyAction } from 'redux';

type currentFrame = 'ever' | 'classic' | 'bold' | 'clean';
type imgFiles = Array<{
  src: string | null;
  cropped: string | null;
  dimensions: {
    x: number;
    y: number;
    zoom: number;
  };
  small?: boolean;
}>;

const INITIAL_STATE = {
  currentFrame: 'ever' as currentFrame,
  loadingCheckout: false,
  yampiProducts: [] as any,
  checkoutPreview: {
    open: false,
    url: '',
    price: null as number | null,
    availableTiles: null as number | null,
    availableTilesPrice: null as number | null,
  },
  cropModal: {
    open: false,
    index: 0,
    img: {
      src: '' as string | null,
      cropped: '' as string | null,
      dimensions: {
        x: 0,
        y: 0,
        zoom: 1,
      },
    },
  },
  instagramModal: {
    open: false,
    loading: false,
    nextPage: '',
    images: [] as Array<{ id: string; url: string }>,
    selected: [] as Array<{ id: string; url: string }>,
  },
  files: [] as imgFiles,
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

    case '@review/KEEP_TILE':
      const _newFiles = [...state.files];
      _newFiles[payload].small = false;

      state = {
        ...state,
        files: _newFiles,
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

    case '@review/SET_INSTAGRAM_MODAL_OPEN':
      state = {
        ...state,
        instagramModal: {
          ...state.instagramModal,
          open: payload,
        },
      };
      break;

    case '@review/SET_INSTAGRAM_IMAGES':
      state = {
        ...state,
        instagramModal: {
          ...state.instagramModal,
          images: [...state.instagramModal.images, ...payload],
        },
      };
      break;

    case '@review/SET_INSTAGRAM_LOADING':
      state = {
        ...state,
        instagramModal: {
          ...state.instagramModal,
          loading: payload,
        },
      };
      break;

    case '@review/SET_INSTAGRAM_NEXTPAGE':
      state = {
        ...state,
        instagramModal: {
          ...state.instagramModal,
          nextPage: payload,
        },
      };
      break;

    case '@review/SET_INSTAGRAM_SELECTED':
      state = {
        ...state,
        instagramModal: {
          ...state.instagramModal,
          selected: [...state.instagramModal.selected, payload],
        },
      };
      break;

    case '@review/REMOVE_INSTAGRAM_SELECTED':
      const selected = [...state.instagramModal.selected];
      const index = selected.findIndex((img) => img.id === payload);

      if (index !== -1) {
        selected.splice(index, 1);
      }

      state = {
        ...state,
        instagramModal: {
          ...state.instagramModal,
          selected,
        },
      };

    case '@review/CLEAR_INSTAGRAM_SELECTED':
      state = {
        ...state,
        instagramModal: {
          ...state.instagramModal,
          selected: [],
        },
      };
      break;

    case '@review/SET_CHECKOUT_LOADING':
      state = {
        ...state,
        loadingCheckout: payload,
      };
      break;

    case '@review/SET_CHECKOUT_PREVIEW':
      state = {
        ...state,
        checkoutPreview: payload,
      };
      break;

    default:
      return state;
  }

  return state;
}

export default reviewReducer;
