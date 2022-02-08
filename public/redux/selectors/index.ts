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

  deadLine = (state: any) => {
    return state.task.deadLine;
  };

  department = (state: any) => {
    return state.task.department;
  };
}

export default TaskState;
