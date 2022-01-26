import { AllTaskList, AllTaskText } from 'public';
import { VFC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import styles from './AllTaskBox.module.scss';

const AllTaskBox: VFC = () => {
  return (
    <div className={styles.box}>
      <AllTaskText />
      <div className={styles.list}>
        <AllTaskList />
        <AllTaskList />
      </div>
    </div>
  );
};

export default AllTaskBox;
