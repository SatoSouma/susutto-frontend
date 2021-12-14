import React, { VFC, useState, useEffect, useContext } from 'react';
import styles from './MyTaskBtn.module.scss';

const MyTaskBtn: VFC = () => {
  return (
    <div className={styles.task}>
      <p className={styles.title}>MyTask</p>
    </div>
  );
};

export default MyTaskBtn;
