import { Grid, GridItem, Text } from '@chakra-ui/react';
import DepartmentIcon from '../atoms/Icons/DepartmentIcon';

const AdminTabHeader = () => {
  return (
    <Grid
      templateColumns="repeat(17, 1fr)"
      color="skyBlue.300"
      textAlign="center"
      fontWeight="bold"
      pr="32px"
      pl="16px"
      pb="3"
    >
      <GridItem colSpan={1}></GridItem>
      <GridItem colSpan={4}>
        <Text>業務概要</Text>
      </GridItem>
      <GridItem colSpan={4}>
        <Text>部署</Text>
      </GridItem>
      <GridItem colSpan={4}>
        <Text>期限</Text>
      </GridItem>
      <GridItem colSpan={4}>
        <Text>担当者</Text>
      </GridItem>
    </Grid>
  );
};

export default AdminTabHeader;
