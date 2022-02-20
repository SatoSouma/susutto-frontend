import { useSelector } from 'react-redux';
import { TaskState } from 'public';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export function useTaskAdd(socket: Socket<DefaultEventsMap, DefaultEventsMap>) {
  const taskState = new TaskState();
  const taskName = useSelector(taskState.taskName);
  const taskDetail = useSelector(taskState.taskDetail);
  const deadLineDay = useSelector(taskState.deadLineDay);
  const deadLineHour = useSelector(taskState.deadLineHour);
  const deadLineMinutes = useSelector(taskState.deadLineMinutes);
  const department = useSelector(taskState.department);

  const onClickSend = () => {
    socket.emit('crtask', {
      taskName: taskName,
      taskDetail: taskDetail,
      deadLine: `${deadLineDay} ${deadLineHour}:${deadLineMinutes}`,
      department: department,
    });
  };

  return [onClickSend] as const;
}
