import { useDispatch } from 'react-redux';
import { TaskAction } from 'public';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export function useTaskFix(socket: Socket<DefaultEventsMap, DefaultEventsMap>) {
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
