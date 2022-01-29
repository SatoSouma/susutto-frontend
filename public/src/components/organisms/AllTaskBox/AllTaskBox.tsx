import { AllTaskList, AllTaskText } from 'public';
import { VFC } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import styles from './AllTaskBox.module.scss';

const AllTaskBox: VFC = () => {
  return (
    <Box>
      <AllTaskText />
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
        <AllTaskList />
      </Box>
    </Box>
  );
};

export default AllTaskBox;
