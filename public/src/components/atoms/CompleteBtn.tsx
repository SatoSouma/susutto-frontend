import { VFC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import styles from './CompleteBtn.module.scss';

const CompleteBtn: VFC = () => {
  return (
    <Box paddingTop="1em" textAlign="right">
      <Button colorScheme="blue">完了</Button>
    </Box>
  );
};

export default CompleteBtn;
