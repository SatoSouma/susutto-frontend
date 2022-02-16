import { AllTaskList, AllTaskText } from 'public';
import { VFC } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import styles from './AllTaskBox.module.scss';
import { useAllTaskBox } from './useAllTaskBox';
import moment from 'moment';

const AllTaskBox: VFC = () => {
  const [result, onPutClick] = useAllTaskBox();

  type result = {
    id: number;
    taskName: string;
    taskDetail: string;
    taskStatus: number;
    deadLine: string;
  };

  return !!result ? (
    <Box boxShadow="lg" borderRadius="10px">
      <AllTaskText />

      <Box
        paddingBottom="1em"
        paddingTop="1em"
        bg="cream.100"
        borderBottomLeftRadius="10px"
        borderBottomRightRadius="10px"
        minHeight="100"
        maxHeight="480"
        overflow="auto"
      >
        {result.map((val: result) => {
          return (
            <AllTaskList
              key={val.id}
              id={val.id}
              taskName={val.taskName}
              taskDetail={val.taskDetail}
              deadLine={moment(val.deadLine).format('YYYY/MM/DD HH:mm')}
              onPutClick={onPutClick}
            />
          );
        })}
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default AllTaskBox;
