import { Box, Select } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskAction, TaskState } from 'public';

const DepartmentSelectorFix: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();
  const taskState = new TaskState();
  const taskFix = useSelector(taskState.taskFix);
  return (
    <Box
      w="60"
      textAlign="center"
      boxShadow="base"
      border="1px"
      borderRadius="10"
      borderColor="gray.300"
    >
      <Select
        placeholder={taskFix.departmentName}
        color="gray.600"
        onChange={(e) => dispatch(taskAction.setDepartment(e.target.value))}
      ></Select>
    </Box>
  );
};

export default DepartmentSelectorFix;
