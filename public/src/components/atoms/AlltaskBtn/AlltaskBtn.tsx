import React, { VFC, useState, useEffect, useContext } from 'react';
import styles from './AllTaskBtn.module.scss';

const AlltaskBtn: VFC = () => {
  return (
    <div className={styles.allTask}>
      <label>AllTask</label>
      <input type="radio" id="task_tabs" />
    </div>
  );
};

export default AlltaskBtn;
