import { Button, Text } from '@chakra-ui/react';
import DesktopIcon from './Icons/DesktopIcon';
import { useDispatch } from 'react-redux';
import { setPage } from 'public/redux/actions';

const DashboardBtn: React.VFC = () => {
  const dispatch = useDispatch();
  return (
    <Button
      bg="white"
      _hover={{ bg: 'gray.100' }}
      width="250px"
      h="50px"
      onClick={() => dispatch(setPage('list'))}
      _focus={{ boxShadow: 'none' }}
    >
      <DesktopIcon />
      <Text pl="3" color="gray.600">
        Dashboard
      </Text>
    </Button>
  );
};

export default DashboardBtn;
