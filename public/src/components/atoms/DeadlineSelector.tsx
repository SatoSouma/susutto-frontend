import { Input, Select, Text } from '@chakra-ui/react';

const DeadlineSelector: React.VFC = () => {
  return (
    <>
      <Text textAlign="center" color="gray.600">
        期限選択
      </Text>
      <Input type="date" boxShadow="inner" color="gray.400" />
    </>
  );
};

export default DeadlineSelector;
