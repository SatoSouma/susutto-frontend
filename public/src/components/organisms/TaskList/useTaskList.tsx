import { useDispatch } from 'react-redux';
import { TaskAction } from 'public';

export function useTaskList() {
  const taskAction = new TaskAction();
  const dispatch = useDispatch();

  const onClickMove = (
    id: number,
    taskName: string,
    taskDetail: string,
    deadLine: string,
    departmentName: string
  ) => {
    const taskFix = {
      id: id,
      taskName: taskName,
      taskDetail: taskDetail,
      deadLine: deadLine,
      departmentName: departmentName,
    };
    dispatch(taskAction.setTaskFix(taskFix));
    dispatch(taskAction.setPage('fix'));
  };

  return [onClickMove] as const;
}
