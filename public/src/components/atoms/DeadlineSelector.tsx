import { Input, Select, Text } from '@chakra-ui/react';

const DeadlineSelector: React.VFC = () => {
  return (
    <>
      <Text textAlign="center">期限選択</Text>
      <Input type="date" boxShadow="inner" />
    </>
  );
};

export default DeadlineSelector;
