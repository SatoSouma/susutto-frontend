import { Button, Text } from '@chakra-ui/react';
import AirPlaneIcon from './Icons/AirPlaneIcon';
import DesktopIcon from './Icons/DesktopIcon';
import { useDispatch } from 'react-redux';
import { TaskAction } from 'public';

const FormBtn: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();

  return (
    <Button
      bg="white"
      _hover={{ bg: 'gray.100' }}
      width="250px"
      h="50px"
      onClick={() => dispatch(taskAction.setPage('add'))}
      _focus={{ boxShadow: 'none' }}
      pr="150"
    >
      <AirPlaneIcon />
      <Text pl="6" color="gray.600" fontSize="15">
        Form
      </Text>
    </Button>
  );
};

export default FormBtn;
