import { VFC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { FixBtnProps } from 'types/propsTypes';

const FixBtn: VFC<FixBtnProps> = (props: FixBtnProps) => {
  console.log(props.id);
  return (
    <Box paddingTop="1em" textAlign="right">
      <Button
        bg="skyBlue.100"
        color="white"
        w="20"
        onClick={() =>
          props.onClickMove(
            props.id,
            props.taskName,
            props.taskDetail,
            props.deadLine,
            props.departmentName
          )
        }
      >
        修正
      </Button>
    </Box>
  );
};

export default FixBtn;
