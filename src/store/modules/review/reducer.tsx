import { AnyAction } from 'redux';

type currentFrame = 'ever' | 'classic' | 'bold' | 'clean';

type ImgFile = {
  id: string;
  src: string | null;
  cropped: string | null;
  dimensions: {
    x: number;
    y: number;
    zoom: number;
  };
  small?: boolean;
};

const INITIAL_STATE = {
  max_kwadros: 9,
  currentFrame: 'ever' as currentFrame,
  loadingCheckout: false,
  loadingFbToken: false,
  yampiProducts: [] as any,
  checkoutPreview: {
    open: false,
    url: '',
    price: null as number | null,
    extraPrice: null as number | null,
    extraKwadros: null as number | null,
  },
  cropModal: {
    open: false,
    img: {
      id: '',
      src: '' as string | null,
      cropped: '' as string | null,
      dimensions: {
        x: 0,
        y: 0,
        zoom: 1,
      },
    } as ImgFile,
  },
  instagramModal: {
    open: false,
    loading: false,
    nextPage: '',
    images: [] as Array<{ id: string; url: string }>,
    selected: [] as Array<{ id: string; url: string }>,
  },
  files: [] as Array<ImgFile>,
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
          img: payload,
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
      const keepIdx = _newFiles.findIndex((file) => file.id === payload);

      if (keepIdx !== -1) {
        _newFiles[keepIdx].small = false;
      }

      state = {
        ...state,
        files: _newFiles,
      };
      break;

    case '@review/DELETE_TILE':
      const _files = [...state.files];
      const index = _files.findIndex((file) => file.id === payload);

      if (index !== -1) {
        _files.splice(index, 1);
      }

      state = {
        ...state,
        files: _files,
      };
      break;

    case '@review/UPDATE_TILE':
      const _imgfiles = [...state.files];
      const updateIdx = _imgfiles.findIndex((file) => file.id === payload.id);

      if (updateIdx !== -1) {
        _imgfiles.splice(updateIdx, 1, payload);
      }

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
      const instaIdx = selected.findIndex((img) => img.id === payload);

      if (instaIdx !== -1) {
        selected.splice(instaIdx, 1);
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

    case '@review/SET_FB_TOKEN_LOADING':
      state = {
        ...state,
        loadingFbToken: payload,
      };
      break;
    case '@review/SET_MAX_KWADROS':
      state = {
        ...state,
        max_kwadros: payload,
      };
      break;

    default:
      return state;
  }

  return state;
}

export default reviewReducer;
