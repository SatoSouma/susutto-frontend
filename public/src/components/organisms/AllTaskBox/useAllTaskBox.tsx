import { TaskAction, TaskState } from 'public';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const port = 8010;
const socket = io(`http://localhost:${port}`);

export function useAllTaskBox() {
  const [result, setReselt] = useState<any>();
  const taskAction = new TaskAction();

  const employeeId = '1';

  const socketFlug = () => {
    console.log('通信きた');
    fetch(`http://localhost:${port}/getAllTask?id=${employeeId}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => setReselt(json));
  };

  //初回レンダリング時
  useEffect(() => {
    //Serverからメッセージを受信
    socket.on('chResult', (data: { message: boolean }) => {
      data.message ? socketFlug() : console.log('error');
    });

    fetch(`http://localhost:${port}/getAllTask?id=${employeeId}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => setReselt(json));
  }, []);

  //ボタンクリック時
  const onPutClick = (id: number) => {
    //Serverにメッセージを送信;
    socket.emit('chup', { taskId: id, employeeId: employeeId });
  };

  return [result, onPutClick] as const;
}
