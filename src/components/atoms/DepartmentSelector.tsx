import { Box, Select } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { TaskAction } from 'src';

const DepartmentSelector: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();
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
        placeholder="部署選択"
        color="gray.600"
        onChange={(e) => dispatch(taskAction.setDepartment(e.target.value))}
      >
        <option value="1">農産</option>
        <option value="2">畜産</option>
        <option value="3">水産</option>
        <option value="5">デリカ</option>
        <option value="4">グロッサリー</option>
        <option value="6">サービスカウンター</option>
      </Select>
    </Box>
  );
};

export default DepartmentSelector;
