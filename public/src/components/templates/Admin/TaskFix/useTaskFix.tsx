import { useSelector } from 'react-redux';
import { TaskState } from 'public';
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export function useTaskFix(socket: Socket<DefaultEventsMap, DefaultEventsMap>) {
  const taskState = new TaskState();
  const taskFix = useSelector(taskState.taskFix);

  const taskId = taskFix.id;
  const taskDetail = useSelector(taskState.taskDetail);
  const deadLineDay = useSelector(taskState.deadLineDay);
  const deadLineHour = useSelector(taskState.deadLineHour);
  const deadLineMinutes = useSelector(taskState.deadLineMinutes);

  const onClickTaskUp = () => {
    socket.emit('uptask', {
      id: taskId,
      taskDetail: taskDetail,
      deadLine: `${deadLineDay} ${deadLineHour}:${deadLineMinutes}`,
    });
  };

  return [onClickTaskUp] as const;
}
