import { VFC } from 'react';
import { Button } from '@chakra-ui/react';
import styles from './FixBtn.module.scss';

const FixBtn: VFC = () => {
  return (
    <div className={styles.HandleBtn}>
      <Button colorScheme="blue">修正</Button>
    </div>
  );
};

export default FixBtn;
