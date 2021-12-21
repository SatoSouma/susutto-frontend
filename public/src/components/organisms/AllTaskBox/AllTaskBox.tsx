import { TaskList } from '../../entory_point';
import { VFC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const AllTaskBox: VFC = () => {
  return (
    <>
      <p>AllTask</p>
      <TaskList />
    </>
  );
};

export default AllTaskBox;
