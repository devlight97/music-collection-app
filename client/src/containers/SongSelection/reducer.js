import {
  SELECT_SONG,
} from './constants';

const initialState = {
  songIsSelected: {
    id: null,
    number: null,
    singer: null,
    name: null,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_SONG:
      return { ...state, ...payload };

    default:
      return state;
  }
};
