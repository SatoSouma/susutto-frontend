import { Textarea } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskAction, TaskState } from 'public';

const TaskContentFix: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();
  const taskState = new TaskState();
  const taskFix = useSelector(taskState.taskFix);
  const taskDetail = useSelector(taskState.taskDetail);
  console.log(taskDetail);
  return (
    <Textarea
      defaultValue={taskFix.taskDetail}
      boxShadow="inner"
      onChange={(e) => dispatch(taskAction.setTaskDetail(e.target.value))}
    />
  );
};

export default TaskContentFix;
