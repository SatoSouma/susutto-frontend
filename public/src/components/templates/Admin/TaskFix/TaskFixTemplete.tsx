import { Button, Grid, Heading, GridItem } from '@chakra-ui/react';
import {
  AdminHeader,
  DepartmentSelector,
  TaskTitle,
  DeadlineSelector,
  TaskContent,
  AdminFooter,
} from 'public';

const TaskFixTemplete: React.VFC = () => {
  return (
    <>
      <AdminHeader />
      <Grid templateColumns="repeat(2, 1fr)" h="575">
        <GridItem colSpan={1} textAlign="center" mt="10">
          <Heading>業務指示修正画面</Heading>
        </GridItem>
        <GridItem colSpan={1} mt="10">
          <DepartmentSelector />
        </GridItem>
        <GridItem colSpan={2} mr="10" ml="10">
          <TaskTitle />
        </GridItem>
        <GridItem colSpan={2} mr="10" ml="10">
          <DeadlineSelector />
        </GridItem>
        <GridItem colSpan={2} mr="10" ml="10">
          <TaskContent />
        </GridItem>
        <GridItem colSpan={2} textAlign="center">
          <Button colorScheme="blue">修正</Button>
        </GridItem>
      </Grid>
      <AdminFooter />
    </>
  );
};

export default TaskFixTemplete;
