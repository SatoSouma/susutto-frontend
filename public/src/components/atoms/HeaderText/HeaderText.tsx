import { Text } from '@chakra-ui/react';
import { VFC } from 'react';
import styles from './HeaderText.module.scss';

const HeaderText: VFC = () => {
  return (
    <Text color="white" fontSize="2em">
      Title 管理画面
    </Text>
  );
};

export default HeaderText;
