import { Text } from '@chakra-ui/react';
import { VFC } from 'react';
import styles from './HeaderText.module.scss';

const AdminHeaderText: VFC = () => {
  return (
    <Text color="gray.700" fontSize="1em" textAlign="center" pt="3">
      chakra 管理画面
    </Text>
  );
};

export default AdminHeaderText;
