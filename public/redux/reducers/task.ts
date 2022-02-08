import {
  PAGE,
  DEADLINE,
  DEPARTMENT,
  TASKDETAIL,
  TASKNAME,
} from '../actions/types';

type state = {
  page: string;
  taskName: string;
  taskDetail: string;
  department: string;
  deadLine: string;
};

type action = {
  type: string;
  input: string;
};

const initianAppState: state = {
  page: 'list',
  taskName: '',
  taskDetail: '',
  department: '',
  deadLine: '',
};

const task = (state = initianAppState, action: action) => {
  switch (action.type) {
    case PAGE:
      return { ...state, page: action.input };

    case TASKNAME:
      return { ...state, taskName: action.input };

    case TASKDETAIL:
      return { ...state, taskDetail: action.input };

    case DEADLINE:
      return { ...state, deadLine: action.input };

    case DEPARTMENT:
      return { ...state, department: action.input };

    default:
      return state;
  }
};

export default task;
