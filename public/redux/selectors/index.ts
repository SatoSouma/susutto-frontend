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

  socketFlug = (state: any) => {
    return state.task.socketFlug;
  };
}

export default TaskState;
