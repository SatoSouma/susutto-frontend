import { VFC } from 'react';
import { Box, Button } from '@chakra-ui/react';

type props = {
  id: number;
  onPutClick: Function;
};

const CompleteBtn: VFC<props> = (props: props) => {
  return (
    <Box paddingTop="1em" textAlign="right">
      <Button colorScheme="blue" onClick={() => props.onPutClick(props.id)}>
        完了
      </Button>
    </Box>
  );
};

export default CompleteBtn;
