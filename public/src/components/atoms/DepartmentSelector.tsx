import { Box, Select } from '@chakra-ui/react';

const DepartmentSelector: React.VFC = () => {
  return (
    <Box
      w="60"
      textAlign="center"
      boxShadow="base"
      border="1px"
      borderRadius="10"
      borderColor="gray.300"
    >
      <Select placeholder="部署選択">
        <option value="agricultural">農産</option>
        <option value="livestock">畜産</option>
        <option value="fisheries">水産</option>
        <option value="delica">デリカ</option>
        <option value="glossary">グロッサリー</option>
        <option value="serviceCounter">サービスカウンター</option>
      </Select>
    </Box>
  );
};

export default DepartmentSelector;
