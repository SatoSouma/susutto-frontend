import { PAGE, TASKNAME, TASKDETAIL, DEPARTMENT, DEADLINE } from './types';

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

  setDeadLine = (input: string) => ({
    type: DEADLINE,
    input,
  });
}

export default TaskAction;
