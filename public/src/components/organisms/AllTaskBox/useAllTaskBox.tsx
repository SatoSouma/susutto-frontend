import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { parseCookies } from 'nookies';
import { NextPageContext } from 'next';

export function useAllTaskBox(
  socket: Socket<DefaultEventsMap, DefaultEventsMap>,
  ctx?: NextPageContext
) {
  const cookie = parseCookies(ctx);
  const employeeId = cookie.userId;
  //ボタンクリック時
  const onPutClick = (id: number) => {
    //Serverにメッセージを送信;
    socket.emit('chup', { taskId: id, employeeId: employeeId });
  };
  return [onPutClick] as const;
}
