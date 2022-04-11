import { useDispatch } from 'react-redux';
import { TaskAction } from 'src';

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

    const result = deadLine.split(' ');
    const time = result[1].split(':');
    const day = result[0].split('/');

    dispatch(taskAction.setDeadLineHour(time[0]));
    dispatch(taskAction.setDeadLineDay(`${day[0]}-${day[1]}-${day[2]}`));
    dispatch(taskAction.setDeadLineMinutes(time[1]));
    dispatch(taskAction.setTaskDetail(taskDetail));
    dispatch(taskAction.setTaskFix(taskFix));
    dispatch(taskAction.setPage('fix'));
  };

  return [onClickMove] as const;
}
