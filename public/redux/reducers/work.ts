import { PAGE } from '../actions/types';

type state = {
  page: string;
};

type action = {
  type: string;
  input: string;
};

const initianAppState: state = {
  page: 'list',
};

const work = (state = initianAppState, action: action) => {
  switch (action.type) {
    case PAGE:
      return { page: action.input };

    default:
      return state;
  }
};

export default work;
