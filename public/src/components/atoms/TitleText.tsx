import styles from './TitleText.module.scss';
import { VFC } from 'react';
import { Text } from '@chakra-ui/react';

const TitleText: VFC = () => {
  return (
    <>
      <Text
        color="white"
        bg="LimeGreen.100"
        fontSize="2em"
        fontWeight="bold"
        textAlign="center"
        paddingTop="0.8em"
        height="3em"
      >
        Title
      </Text>
    </>
  );
};

export default TitleText;
