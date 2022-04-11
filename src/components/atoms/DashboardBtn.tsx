import { Button, Text } from '@chakra-ui/react';
import DesktopIcon from './Icons/DesktopIcon';
import { useDispatch } from 'react-redux';
import { TaskAction } from 'src';

const DashboardBtn: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();
  return (
    <Button
      bg="white"
      _hover={{ bg: 'gray.100' }}
      width="250px"
      h="50px"
      onClick={() => dispatch(taskAction.setPage('list'))}
      _focus={{ boxShadow: 'none' }}
      pr="100"
    >
      <DesktopIcon />
      <Text pl="6" color="gray.600" fontSize="15">
        Dashboard
      </Text>
    </Button>
  );
};

export default DashboardBtn;
