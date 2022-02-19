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
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { FixBtn, DepartmentIcon } from 'public';

type props = {
  color: string;
};

const AdminTaskList: VFC<props> = (props: props) => {
  return (
    <Accordion allowToggle>
      <AccordionItem
        borderRadius="5px"
        borderColor="gray.100"
        boxShadow="base"
        marginBottom="1em"
      >
        {({ isExpanded }) => (
          <>
            <AccordionButton h="70" _focus={{ boxShadow: 'none' }}>
              <Box flex="1">
                <Grid templateColumns="repeat(17, 1fr)" color="gray.600">
                  <GridItem colSpan={1}>
                    <DepartmentIcon color={props.color} />
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Text>業務名</Text>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Text>部署名</Text>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Text>期限</Text>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Text>担当者名</Text>
                  </GridItem>
                </Grid>
              </Box>
              {isExpanded ? (
                <TriangleUpIcon color={`${props.color}.100`} />
              ) : (
                <TriangleDownIcon color={`${props.color}.100`} />
              )}
            </AccordionButton>

            <AccordionPanel pb={4}>
              業務内容 業務内容 業務内容 業務内容 業務内容 業務内容 業務内容
              業務内容 業務内容 業務内容 業務内容 業務内容 業務内容 業務内容
              業務内容 業務内容 業務内容 業務内容 業務内容 業務内容 業務内容
              業務内容 業務内容 業務内容 業務内容 業務内容 業務内容 業務内容
              <FixBtn />
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default AdminTaskList;
