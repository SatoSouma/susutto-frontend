import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { TaskState } from 'public';

export function useTaskAdd() {
  const [click, setClick] = useState<any>();
  const [result, setReselt] = useState<any>();

  // 初回レンダリング防止
  const renderFlgRef = useRef(false);

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

  const onClickSend = (e: any) => {
    setClick(e);
  };

  useEffect(() => {
    if (renderFlgRef.current) {
      const form = load();
      fetch('http://localhost:8010/create', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    } else {
      renderFlgRef.current = true;
    }
  }, [click]);

  return [onClickSend, result] as const;
}
