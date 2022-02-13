import React, { useEffect, useRef, useState } from 'react';

export function useAllTaskBox() {
  const [result, setReselt] = useState<any>();
  const [putClick, setPutClick] = useState<React.MouseEvent>();
  const [putId, setPutId] = useState<number>();

  // 初回レンダリング防止
  const renderFlgRef = useRef(false);

  const employeeId = 1;

  const onPutClick = (e: React.MouseEvent, id: number) => {
    setPutId(id);
    setPutClick(e);
  };

  const load = () => {
    const formItem = {
      taskId: putId,
      employeeId: employeeId,
    };

    return formItem;
  };

  useEffect(() => {
    fetch(`http://localhost:8010/getAllTask?id=${employeeId}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => setReselt(json));
  }, []);

  useEffect(() => {
    if (renderFlgRef.current) {
      const form = load();
      fetch('http://localhost:8010/taskCharge', {
        method: 'PUT',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    } else {
      renderFlgRef.current = true;
    }
  }, [putClick]);

  return [result, onPutClick] as const;
}
