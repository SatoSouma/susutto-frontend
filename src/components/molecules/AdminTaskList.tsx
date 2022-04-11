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
import { FixBtn, DepartmentIcon } from 'src';

import { adminTaskProps } from 'types/propsTypes';

const AdminTaskList: VFC<adminTaskProps> = (props: adminTaskProps) => {
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
                    <DepartmentIcon color={props.departmentColor} />
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Text>{props.taskName}</Text>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Text>{props.departmentName}</Text>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Text>{props.deadLine}</Text>
                  </GridItem>
                  <GridItem colSpan={4}>
                    {props.employeeName !== null && !!props.employeeName ? (
                      <Text>{props.employeeName}</Text>
                    ) : (
                      <Text>なし</Text>
                    )}
                  </GridItem>
                </Grid>
              </Box>
              {isExpanded ? (
                <TriangleUpIcon color={`${props.departmentColor}.100`} />
              ) : (
                <TriangleDownIcon color={`${props.departmentColor}.100`} />
              )}
            </AccordionButton>

            <AccordionPanel pb={4}>
              {props.taskDetail}
              {props.progress == 3 ? (
                <FixBtn
                  id={props.id}
                  taskName={props.taskName}
                  taskDetail={props.taskDetail}
                  deadLine={props.deadLine}
                  departmentName={props.departmentName}
                  onClickMove={props.onClickMove}
                />
              ) : (
                <></>
              )}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default AdminTaskList;
