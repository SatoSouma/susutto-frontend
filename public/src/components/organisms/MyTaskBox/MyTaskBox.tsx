import { VFC } from 'react';
import { MyTaskList, MyTaskText } from 'public';
import styles from './MyTaskBox.module.scss';
import { Box } from '@chakra-ui/react';

const MyTaskBox: VFC = () => {
  return (
    <Box>
      <MyTaskText />
      <Box
        paddingBottom="1em"
        paddingTop="1em"
        bg="cream.100"
        borderBottomLeftRadius="10px"
        borderBottomRightRadius="10px"
      >
        <MyTaskList />
      </Box>
    </Box>
  );
};

export default MyTaskBox;
