import {
  PAGE,
  TASKNAME,
  TASKDETAIL,
  DEPARTMENT,
  DEADLINEDAY,
  DEADLINEMINUTES,
  DEADLINEHOUR,
} from './types';

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
}

export default TaskAction;
