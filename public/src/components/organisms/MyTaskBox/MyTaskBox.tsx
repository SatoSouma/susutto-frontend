import { VFC } from 'react';
import { MyTaskList, MyTaskText } from 'public';
import styles from './MyTaskBox.module.scss';
import { Box } from '@chakra-ui/react';

const MyTaskBox: VFC = () => {
  return (
    <Box boxShadow="base" borderRadius="10px">
      <MyTaskText />
      <Box>
        <Box
          paddingBottom="1em"
          paddingTop="1em"
          bg="cream.100"
          borderBottomLeftRadius="10px"
          borderBottomRightRadius="10px"
          minHeight="100"
          maxHeight="460"
          overflow="auto"
        >
          <MyTaskList />
          <MyTaskList />
          <MyTaskList />
          <MyTaskList />
          <MyTaskList />
          <MyTaskList />
          <MyTaskList />
          <MyTaskList />
          <MyTaskList />
        </Box>
      </Box>
    </Box>
  );
};

export default MyTaskBox;
