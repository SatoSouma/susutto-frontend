import { Button, Grid, Heading, GridItem } from '@chakra-ui/react';
import {
  AdminHeader,
  DepartmentSelector,
  TaskTitle,
  DeadlineSelector,
  TaskContent,
  AdminFooter,
} from 'public';

const TaskAdd: React.VFC = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" h="575">
      <GridItem colSpan={1} textAlign="center" mt="10">
        <Heading color="gray.600">業務指示作成画面</Heading>
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
        <Button colorScheme="blue">作成</Button>
      </GridItem>
    </Grid>
  );
};

export default TaskAdd;
