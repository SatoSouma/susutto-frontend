import { useEffect, useState } from 'react';
import { TaskAction } from 'public';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
const employeeId = '1';

export function useAdminMainTemplete() {
  const [socket, _] = useState(() => io());
  const taskAction = new TaskAction();
  const dispatch = useDispatch();

  const socketFlug = () => {
    console.log('通信きた');
    fetch(`${process.env.NEXT_PUBLIC_URL}/getAdminTask`)
      .then((res) => {
        return res.json();
      })
      .then((json) => dispatch(taskAction.setAdminTasks(json)));
  };

  useEffect(() => {
    //Serverからメッセージを受信
    socket.on('crResult', (data: { message: boolean }) => {
      if (data.message) {
        socketFlug();
        dispatch(taskAction.setPage('list'));
      } else {
        console.log('error');
      }
    });

    fetch(`${process.env.NEXT_PUBLIC_URL}/getAdminTask`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(taskAction.setAdminTasks(json));
      });
  }, []);

  return [socket] as const;
}
