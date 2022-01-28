import { VFC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import styles from './HandleBtn.module.scss';

const HandleBtn: VFC = () => {
  return (
    <Box paddingTop="1em" textAlign="right">
      <Button colorScheme="blue">担当する</Button>
    </Box>
  );
};

export default HandleBtn;
