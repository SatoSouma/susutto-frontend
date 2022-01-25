import { VFC } from 'react';
import {
  Button,
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { FixBtn } from '../../entory_point';

const AdminTaskList: VFC = () => {
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Grid templateColumns="repeat(5, 1fr)" width="1200px">
                <GridItem colStart={1} colEnd={2}>
                  <Text>業務名</Text>
                </GridItem>
                <GridItem colStart={2} colEnd={3}>
                  <Text>部署名</Text>
                </GridItem>
                <GridItem colStart={3} colEnd={4}>
                  <Text>担当者名</Text>
                </GridItem>
              </Grid>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
            <FixBtn />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AdminTaskList;
