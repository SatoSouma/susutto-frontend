import { useEffect, useState } from 'react';
import { TaskAction } from 'public';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
const employeeId = '1';

export function useMainTemplete() {
  const [socket, _] = useState(() => io());
  const taskAction = new TaskAction();
  const dispatch = useDispatch();

  const socketFlug = () => {
    console.log('通信きた');
    fetch(`${process.env.NEXT_PUBLIC_URL}/getAllTask?id=${employeeId}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => dispatch(taskAction.setTaskInfo(json)));
  };

  useEffect(() => {
    //Serverからメッセージを受信
    socket.on('chResult', (data: { message: boolean }) => {
      data.message ? socketFlug() : console.log('error');
    });

    fetch(`${process.env.NEXT_PUBLIC_URL}/getAllTask?id=${employeeId}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        dispatch(taskAction.setTaskInfo(json));
      });
  }, []);

  return [socket] as const;
}
