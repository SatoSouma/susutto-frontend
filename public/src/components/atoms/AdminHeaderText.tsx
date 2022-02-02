import { Text } from '@chakra-ui/react';
import { VFC } from 'react';
import styles from './HeaderText.module.scss';

const AdminHeaderText: VFC = () => {
  return (
    <Text
      color="gray.900"
      fontSize="1em"
      textAlign="center"
      pt="4"
      h="60px"
      fontWeight="solid"
      fontSize="20"
      borderBottom="1px"
      borderColor="gray.300"
    >
      chakra 管理画面
    </Text>
  );
};

export default AdminHeaderText;
