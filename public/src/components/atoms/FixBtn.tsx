import { VFC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import styles from './FixBtn.module.scss';

const FixBtn: VFC = () => {
  return (
    <Box paddingTop="1em" textAlign="right">
      <Button colorScheme="blue">Fix</Button>
    </Box>
  );
};

export default FixBtn;
