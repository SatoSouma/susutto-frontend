import { VFC } from 'react';

import { MyTaskList, MyTaskText } from '../../entory_point';
import styles from './MyTaskBox.module.scss';

const MyTaskBox: VFC = () => {
  return (
    <div className={styles.box}>
      <MyTaskText />
      <div className={styles.list}>
        <MyTaskList />
      </div>
    </div>
  );
};

export default MyTaskBox;
