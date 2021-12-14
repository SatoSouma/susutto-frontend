import { VFC } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import styles from './TaskList.module.scss';

const TaskList: VFC = () => {
  return (
    <div className={styles.tasklist}>
      <Button
        height="70px"
        width="72"
        bg="orange.100"
        border="Yellow.100"
        color="black"
        borderColor="orange.300"
      >
        お仕事
      </Button>
    </div>
  );
};

export default TaskList;
