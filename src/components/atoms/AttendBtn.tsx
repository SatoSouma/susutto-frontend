import { Button, Text } from '@chakra-ui/react';
import UserIcon from './Icons/UserIcon';
import { useDispatch } from 'react-redux';
import { TaskAction } from 'src';

const AttendBtn: React.VFC = () => {
  const dispatch = useDispatch();
  const taskAction = new TaskAction();
  return (
    <Button
      bg="white"
      _hover={{ bg: 'gray.100' }}
      width="250px"
      h="50px"
      onClick={() => dispatch(taskAction.setPage('attend'))}
      _focus={{ boxShadow: 'none' }}
      pr="50"
    >
      <UserIcon color={'black'} size={'4'} />
      <Text pl="6" color="gray.600" fontSize="15">
        Attendance status
      </Text>
    </Button>
  );
};

export default AttendBtn;
