import React, { VFC } from 'react';
import styles from './AllTaskBtn.module.scss';

const AllTaskBtn: VFC = () => {
  return (
    <div className={styles.task}>
      <p className={styles.title}>AllTask</p>
    </div>
  );
};

export default AllTaskBtn;
