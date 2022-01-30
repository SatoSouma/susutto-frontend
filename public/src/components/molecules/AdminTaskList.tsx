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
      <AccordionItem borderRadius="10px" shadow="base" marginBottom="1em">
        <AccordionButton h="70">
          <Box flex="1">
            <Grid templateColumns="repeat(4, 1fr)">
              <GridItem colSpan={1}>
                <Text>業務名</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text>部署名</Text>
              </GridItem>
              <GridItem colSpan={1}>
                <Text>担当者名</Text>
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
