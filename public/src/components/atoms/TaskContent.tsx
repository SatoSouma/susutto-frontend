import { Textarea } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { TaskAction } from 'public';

const TaskContent: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();
  return (
    <Textarea
      placeholder="業務内容"
      boxShadow="inner"
      onChange={(e) => dispatch(taskAction.setTaskDetail(e.target.value))}
    />
  );
};

export default TaskContent;
