import { Text } from '@chakra-ui/react';
import { VFC } from 'react';

const AdminHeaderText: VFC = () => {
  return (
    <Text
      color="gray.600"
      fontSize="1em"
      textAlign="center"
      pt="4"
      h="60px"
      fontWeight="solid"
      borderBottom="1px"
      borderColor="gray.300"
    >
      ススット 管理画面
    </Text>
  );
};

export default AdminHeaderText;
