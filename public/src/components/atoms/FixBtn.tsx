import { VFC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import styles from './FixBtn.module.scss';

const FixBtn: VFC = () => {
  return (
    <Box paddingTop="1em" textAlign="right">
      <Button bg="skyBlue.100" color="white" w="20">
        Fix
      </Button>
    </Box>
  );
};

export default FixBtn;
