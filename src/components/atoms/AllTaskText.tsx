import { Text } from '@chakra-ui/react';
import { VFC } from 'react';

const AllTaskText: VFC = () => {
  return (
    <>
      <Text
        color="white"
        bg="LimeGreen.100"
        textAlign="center"
        fontSize="1.5em"
        height="2em"
        padding="0.2em"
        borderTopRightRadius="10px"
        borderTopLeftRadius="10px"
      >
        全ての業務
      </Text>
    </>
  );
};

export default AllTaskText;
