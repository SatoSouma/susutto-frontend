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
    let inputFlug = true;
    let errorMsg = '';
    if (!taskName) {
      inputFlug = false;
      errorMsg += '業務名';
    }
    if (!department) {
      inputFlug = false;
      errorMsg == '' ? (errorMsg += '部署') : (errorMsg += '、部署');
    }
    if (!taskDetail) {
      inputFlug = false;
      errorMsg == '' ? (errorMsg += '業務内容') : (errorMsg += '、業務内容');
    }
    if (!deadLineDay) {
      inputFlug = false;
      errorMsg == '' ? (errorMsg += '期限日') : (errorMsg += '、期限日');
    }

    if (!inputFlug) {
      alert(`${errorMsg}が未入力です`);
    }

    if (inputFlug) {
      socket.emit('crtask', {
        taskName: taskName,
        taskDetail: taskDetail,
        deadLine: `${deadLineDay} ${deadLineHour}:${deadLineMinutes}`,
        department: department,
      });
    }
  };

  return [onClickSend] as const;
}
