import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TaskState } from 'public';

export function useTaskAdd() {
  const [click, setClick] = useState<any>();
  const [result, setReselt] = useState<any>();
  const taskState = new TaskState();
  const taskName = useSelector(taskState.taskName);
  const taskDetail = useSelector(taskState.taskDetail);
  const deadLine = useSelector(taskState.deadLine);
  const department = useSelector(taskState.department);

  const onClickSend = (e: any) => {
    setClick(e);
  };
  useEffect(() => {
    // const form = new FormData();
    // form.set('taskName', taskName);
    // form.set('taskDetail', taskDetail);
    // form.set('deadLine', deadLine);
    // form.set('department', department);
    const form = {
      taskName: taskName,
      taskDetail: taskDetail,
      deadLine: deadLine,
      department: department,
    };

    fetch('http://localhost:8010/create', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => setReselt(res))
      .catch((error) => console.log(error));
  }, [click]);

  return [onClickSend, result] as const;
}
