import { VFC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import styles from './HandleBtn.module.scss';

type props = {
  id: number;
  putFunc: Function;
};

const HandleBtn: VFC<props> = (props: props) => {
  return (
    <Box paddingTop="1em" textAlign="right">
      <Button
        colorScheme="blue"
        onClick={(e: React.MouseEvent) => props.putFunc(e, props.id)}
      >
        担当する
      </Button>
    </Box>
  );
};
export default HandleBtn;
