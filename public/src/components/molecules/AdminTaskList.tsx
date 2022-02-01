import { VFC } from 'react';
import {
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Text,
  Grid,
  GridItem,
  Box,
} from '@chakra-ui/react';
import { FixBtn } from 'public';

const AdminTaskList: VFC = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem
        borderRadius="10px"
        borderColor="gray.100"
        shadow="base"
        marginBottom="1em"
      >
        <AccordionButton h="70">
          <Box flex="1">
            <Grid templateColumns="repeat(4, 1fr)">
              <GridItem colSpan={1}>
                <Text>TaskName</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text>DepartmentName</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text>EmployeeName</Text>
              </GridItem>
            </Grid>
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
          <FixBtn />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AdminTaskList;
