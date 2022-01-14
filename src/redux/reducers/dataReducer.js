import {FETCH_DATA, SLICE} from '../actionTypes';

const init = {
  loading: true,
  text: null,
};

const dataReducer = (state = init, {type, payload}) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: false,
        text: payload,
      };
    case SLICE:
      return {
        text: payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
