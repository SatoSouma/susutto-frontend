import { VFC } from 'react';
import { Button } from '@chakra-ui/react';
import styles from './CompleteBtn.module.scss';

const CompleteBtn: VFC = () => {
  return (
    <div className={styles.HandleBtn}>
      <Button colorScheme="blue">完了</Button>
    </div>
  );
};

export default CompleteBtn;
