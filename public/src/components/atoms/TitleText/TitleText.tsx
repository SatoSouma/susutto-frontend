import styles from './TitleText.module.scss';
import { VFC } from 'react';

const TitleText: VFC = () => {
  return (
    <>
      <div className={styles.titleText}>Title</div>
    </>
  );
};

export default TitleText;
