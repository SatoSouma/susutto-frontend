import {
  PAGE,
  TASKNAME,
  TASKDETAIL,
  DEPARTMENT,
  DEADLINEDAY,
  DEADLINEMINUTES,
  DEADLINEHOUR,
  TASKINFO,
  ADMINTASKINFO,
  TASKFIX,
} from './types';

import { taskInfoType, adminTaskInfoType, taskFix } from 'types/reduxTypes';

class TaskAction {
  setPage = (input: string) => ({
    type: PAGE,
    input,
  });

  setTaskName = (input: string) => ({
    type: TASKNAME,
    input,
  });

  setTaskDetail = (input: string) => ({
    type: TASKDETAIL,
    input,
  });

  setDepartment = (input: string) => ({
    type: DEPARTMENT,
    input,
  });

  setDeadLineDay = (input: string) => ({
    type: DEADLINEDAY,
    input,
  });

  setDeadLineHour = (input: string) => ({
    type: DEADLINEHOUR,
    input,
  });

  setDeadLineMinutes = (input: string) => ({
    type: DEADLINEMINUTES,
    input,
  });

  setTaskInfo = (input: taskInfoType) => ({
    type: TASKINFO,
    input,
  });

  setAdminTasks = (input: adminTaskInfoType) => ({
    type: ADMINTASKINFO,
    input,
  });

  setTaskFix = (input: taskFix) => ({
    type: TASKFIX,
    input,
  });
}

export default TaskAction;