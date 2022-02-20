export type taskInfoType = {
  myTask: taskType;
  allTask: taskType;
};

export type taskType = {
  id: number;
  taskName: string;
  taskDetail: string;
  taskStatus: number;
  deadLine: string;
};

export type adminTaskTypes = {
  id: number;
  taskName: string;
  taskDetail: string;
  deadLine: string;
  departmentColor: string;
  departmentName: string;
  employeeName: string | undefined;
};

export type adminTaskInfoType = {
  doing: adminTaskTypes;
  todo: adminTaskTypes;
  done: adminTaskTypes;
  noAchieve: adminTaskTypes;
};

export type taskFix = {
  id: number;
  taskName: string;
  taskDetail: string;
  deadLine: string;
  departmentName: string;
};

export type state = {
  page: string;
  taskName: string;
  taskDetail: string;
  department: string;
  deadLineDay: string;
  deadLineMinutes: string;
  deadLineHour: string;
  taskInfo: undefined | taskInfoType;
  adminTaskInfo: undefined | adminTaskInfoType;
  taskFix: undefined | taskFix;
};

export type action = {
  type: string | any;
  input: string;
};
