import { useDispatch, useSelector } from 'react-redux';
import { TaskAction, TaskState } from 'public';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
const port = 8010;
const socket = io(`http://localhost:${port}`);

export function useTaskList() {
  const [test, setTest] = useState<string>('待機');

  //Serverからメッセージを受信;
  socket.on('chResult', (data: { message: boolean }) => {
    data.message ? setTest('通過') : console.log('error');
  });

  return [test] as const;
}
