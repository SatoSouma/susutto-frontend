import { Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { TaskAction } from 'src';

const TaskTitle: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();
  return (
    <>
      <Input
        placeholder="業務タイトル"
        boxShadow="inner"
        onChange={(e) => dispatch(taskAction.setTaskName(e.target.value))}
      />
    </>
  );
};

export default TaskTitle;
