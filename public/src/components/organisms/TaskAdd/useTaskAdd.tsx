import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskAction, TaskState } from 'public';

export function useTaskAdd() {
  const [result, setReselt] = useState<any>();
  const dispatch = useDispatch();
  const taskAction = new TaskAction();

  const taskState = new TaskState();
  const taskName = useSelector(taskState.taskName);
  const taskDetail = useSelector(taskState.taskDetail);
  const deadLineDay = useSelector(taskState.deadLineDay);
  const deadLineHour = useSelector(taskState.deadLineHour);
  const deadLineMinutes = useSelector(taskState.deadLineMinutes);
  const department = useSelector(taskState.department);

  const load = () => {
    const formItem = {
      taskName: taskName,
      taskDetail: taskDetail,
      deadLine: `${deadLineDay} ${deadLineHour}:${deadLineMinutes}`,
      department: department,
    };

    return formItem;
  };

  const onClickSend = () => {
    const form = load();
    fetch('http://localhost:8010/create', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => dispatch(taskAction.setPage('list')))
      .catch((error) => console.log(error));
  };

  return [onClickSend, result] as const;
}
