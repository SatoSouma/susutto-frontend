import {
  PAGE,
  DEADLINEDAY,
  DEADLINEHOUR,
  DEADLINEMINUTES,
  DEPARTMENT,
  TASKDETAIL,
  TASKNAME,
  TASKINFO,
  ADMINTASKINFO,
  TASKFIX,
  COLOR,
} from '../actions/types';

import { action, state } from 'types/reduxTypes';

const initianAppState: state = {
  page: 'list',
  taskName: '',
  taskDetail: '',
  department: '',
  deadLineDay: '',
  deadLineMinutes: '',
  deadLineHour: '',
  taskInfo: undefined,
  adminTaskInfo: undefined,
  taskFix: undefined,
  color: '',
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

    case TASKINFO:
      return { ...state, taskInfo: action.input };

    case ADMINTASKINFO:
      return { ...state, adminTaskInfo: action.input };

    case TASKFIX:
      return { ...state, taskFix: action.input };

    case COLOR:
      return { ...state, color: action.input };

    default:
      return state;
  }
};

export default task;
