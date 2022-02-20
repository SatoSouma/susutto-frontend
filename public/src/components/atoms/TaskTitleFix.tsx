import { Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskAction, TaskState } from 'public';

const TaskTitleFix: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();
  const taskState = new TaskState();
  const taskFix = useSelector(taskState.taskFix);
  return (
    <>
      <Input
        placeholder="業務タイトル"
        value={taskFix.taskName}
        boxShadow="inner"
        onChange={(e) => dispatch(taskAction.setTaskName(e.target.value))}
        readOnly
      />
    </>
  );
};

export default TaskTitleFix;
