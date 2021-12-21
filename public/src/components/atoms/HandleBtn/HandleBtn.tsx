import { VFC } from 'react';
import { Button } from '@chakra-ui/react';
import styles from './HandleBtn.module.scss';

const HandleBtn: VFC = () => {
  return (
    <div className={styles.HandleBtn}>
      <Button colorScheme="blue">担当する</Button>
    </div>
  );
};

export default HandleBtn;
