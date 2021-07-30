interface ActionType {
  type: string;
  payload: any;
}

const INITIAL_STATE = {
  responsive: true,
};

function platformReducer(state = INITIAL_STATE, { type, payload }: ActionType) {
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
