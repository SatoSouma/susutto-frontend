import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export type props = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
};

export type FixBtnProps = {
  id: number;
  taskName: string;
  taskDetail: string;
  deadLine: string;
  departmentName: string;
  onClickMove: Function;
};

export type adminTaskProps = {
  id: number;
  progress: number;
  taskName: string;
  taskDetail: string;
  deadLine: string;
  taskStatus: number;
  departmentColor: string;
  departmentName: string;
  employeeName: string | undefined;
  onClickMove: Function;
};
