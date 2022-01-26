import { Text } from '@chakra-ui/react';
import { VFC } from 'react';
import styles from './HeaderText.module.scss';

const HeaderText: VFC = () => {
  return (
    <Text color="white" fontSize="2em" marginLeft="1.3em" paddingTop="0.2em">
      Title 管理画面
    </Text>
  );
};

export default HeaderText;
