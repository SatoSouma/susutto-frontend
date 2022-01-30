import { Box, Heading } from '@chakra-ui/react';
import { AdminFooter, AdminHeader, DepartmentList } from 'public';

const DepartmentListTemplete: React.VFC = () => {
  const departments: string[] = [
    '農産',
    '畜産',
    '水産',
    'デリカ',
    'グロッサリー',
    'サービスカウンター',
  ];
  return (
    <>
      <AdminHeader />
      <Box>
        <Heading>部署一覧</Heading>
        <Box h="535" overflow="auto">
          {departments.map((items: string) => (
            <DepartmentList key={items} department={items} />
          ))}
        </Box>
      </Box>
      <AdminFooter />
    </>
  );
};

export default DepartmentListTemplete;
