import React, { VFC, useState, useEffect, useContext } from 'react';
import styles from '../../../../styles/atoms/AllTaskBtn.module.scss';

const AlltaskBtn: VFC = () => {
  return (
    <div className={styles.allTask}>
      <label></label>
      <input type="radio" />
    </div>
  );
};

export default AlltaskBtn;
