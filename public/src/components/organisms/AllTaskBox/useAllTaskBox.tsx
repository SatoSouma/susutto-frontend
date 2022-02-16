import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

export function useAllTaskBox() {
  const [result, setReselt] = useState<any>();
  const [socketFlug, setSocketFlug] = useState<boolean>(false);
  const port = 8010;
  const socket = io(`http://localhost:${port}`);

  const employeeId = '1';

  //Serverからメッセージを受信;
  socket.on('chResult', (data: { message: boolean }) => {
    data.message ? setSocketFlug(data.message) : console.log('error');
  });

  //初回レンダリング時
  useEffect(() => {
    fetch(`http://localhost:${port}/getAllTask?id=${employeeId}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => setReselt(json));
  }, [socketFlug]);

  //ボタンクリック時
  const onPutClick = (id: number) => {
    //Serverにメッセージを送信;
    socket.emit('chup', { taskId: id, employeeId: employeeId });
  };

  return [result, onPutClick] as const;
}
