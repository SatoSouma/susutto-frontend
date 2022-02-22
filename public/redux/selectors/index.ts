class TaskState {
  page = (state: any) => {
    return state.task.page;
  };

  taskName = (state: any) => {
    return state.task.taskName;
  };

  taskDetail = (state: any) => {
    return state.task.taskDetail;
  };

  deadLineDay = (state: any) => {
    return state.task.deadLineDay;
  };

  deadLineMinutes = (state: any) => {
    return state.task.deadLineMinutes;
  };

  deadLineHour = (state: any) => {
    return state.task.deadLineHour;
  };

  department = (state: any) => {
    return state.task.department;
  };

  taskInfo = (state: any) => {
    return state.task.taskInfo;
  };

  adminTaskInfo = (state: any) => {
    return state.task.adminTaskInfo;
  };

  taskFix = (state: any) => {
    return state.task.taskFix;
  };

  color = (state: any) => {
    return state.task.color;
  };
}

export default TaskState;
