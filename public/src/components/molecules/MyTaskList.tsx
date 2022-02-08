import { VFC } from 'react';
import {
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { CompleteBtn } from 'public';

const MyTaskList: VFC = () => {
  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem
          w="300px"
          bg="white"
          borderRadius="10px"
          m="auto"
          marginBottom="1em"
          shadow="base"
        >
          <AccordionButton _focus={{ boxShadow: 'none' }}>
            <Box flex="1" textAlign="left">
              <Box color="gray.700">業務名</Box>
              <Box color="gray.500" fontSize="0.5em">
                期限
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4} fontSize="20">
            業務内容 業務内容 業務内容 業務内容 業務内容 業務内容 業務内容
            業務内容 業務内容
            <CompleteBtn />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default MyTaskList;
