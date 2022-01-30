import { NextPage } from 'next';
import { TaskAddTemplate } from 'public';
import TaskAddTemplete from 'public/src/components/templates/Admin/TaskAdd/TaskAddTemplete';

const taskAdd: NextPage = () => {
  return <TaskAddTemplete />;
};

export default taskAdd;
