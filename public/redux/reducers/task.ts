import {
  PAGE,
  DEADLINEDAY,
  DEADLINEHOUR,
  DEADLINEMINUTES,
  DEPARTMENT,
  TASKDETAIL,
  TASKNAME,
  SOCKETFLUG,
} from '../actions/types';

type state = {
  page: string;
  taskName: string;
  taskDetail: string;
  department: string;
  deadLineDay: string;
  deadLineMinutes: string;
  deadLineHour: string;
  socketFlug: boolean;
};

type action = {
  type: string | boolean;
  input: string;
};

const initianAppState: state = {
  page: 'list',
  taskName: '',
  taskDetail: '',
  department: '',
  deadLineDay: '',
  deadLineMinutes: '',
  deadLineHour: '',
  socketFlug: false,
};

const task = (state = initianAppState, action: action) => {
  switch (action.type) {
    case PAGE:
      return { ...state, page: action.input };

    case TASKNAME:
      return { ...state, taskName: action.input };

    case TASKDETAIL:
      return { ...state, taskDetail: action.input };

    case DEADLINEDAY:
      return { ...state, deadLineDay: action.input };

    case DEADLINEHOUR:
      return { ...state, deadLineHour: action.input };

    case DEADLINEMINUTES:
      return { ...state, deadLineMinutes: action.input };

    case DEPARTMENT:
      return { ...state, department: action.input };

    case SOCKETFLUG:
      return { ...state, socketFlug: action.input };

    default:
      return state;
  }
};

export default task;
