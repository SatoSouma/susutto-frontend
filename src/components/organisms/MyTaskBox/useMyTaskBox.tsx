import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export function useMyTaskBox(
  socket: Socket<DefaultEventsMap, DefaultEventsMap>
) {
  //ボタンクリック時
  const onPutClick = (id: number) => {
    console.log(socket);
    //Serverにメッセージを送信;
    socket.emit('taskup', { taskId: id });
  };

  return [onPutClick] as const;
}
