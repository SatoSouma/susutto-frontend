import { VFC } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import styles from './TaskList.module.scss';

const TaskList: VFC = () => {
  return (
    <div className={styles.tasklist}>
      <details className={styles.details}>
        <summary className={styles.tasks}>summaryタグで指定した要約</summary>
        <p>details要素に含まれる詳細内容。</p>
      </details>
    </div>
  );
};

export default TaskList;
