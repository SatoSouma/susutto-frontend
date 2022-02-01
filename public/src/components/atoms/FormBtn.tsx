import { Button, Text } from '@chakra-ui/react';
import AirPlaneIcon from './Icons/AirPlaneIcon';
import DesktopIcon from './Icons/DesktopIcon';
import { useDispatch } from 'react-redux';
import { setPage } from 'public/redux/actions';

const FormBtn: React.VFC = () => {
  const dispatch = useDispatch();

  return (
    <Button
      bg="white"
      _hover={{ bg: 'gray.100' }}
      width="250px"
      h="50px"
      onClick={() => dispatch(setPage('add'))}
      _focus={{ boxShadow: 'none' }}
    >
      <AirPlaneIcon />
      <Text pl="3" color="gray.600">
        Form
      </Text>
    </Button>
  );
};

export default FormBtn;
