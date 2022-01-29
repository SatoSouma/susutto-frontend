import { VFC } from 'react';
import {
  Text,
  Button,
  Grid,
  GridItem,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Drawer,
} from '@chakra-ui/react';
import { UserIcon } from 'public';
import HamburgerIcon from '../../atoms/Icons/HamburgerIcon';
import { useRef } from 'react';

const EmployeeHeader: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      textAlign="center"
      bg="LimeGreen.100"
      height="100"
      paddingTop="8"
    >
      <GridItem colSpan={1}>
        <Button
          bg="LimeGreen.100"
          _active={{ bg: 'LimeGreen.100' }}
          _hover={{ bg: 'LimeGreen.100' }}
          _focus={{ boxShadow: 'none', bg: 'LimeGreen.100' }}
        >
          <UserIcon />
        </Button>
      </GridItem>
      <GridItem colSpan={1}>
        <Text color="white" fontSize="2em" fontWeight="bold">
          Title
        </Text>
      </GridItem>
      <GridItem colSpan={1}>
        <Button
          bg="LimeGreen.100"
          _active={{ bg: 'LimeGreen.100' }}
          _hover={{ bg: 'LimeGreen.100' }}
          _focus={{ boxShadow: 'none', bg: 'LimeGreen.100' }}
          onClick={onOpen}
        >
          <HamburgerIcon />
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>hamburger menu</DrawerHeader>

              <DrawerBody>
                <Text>Linkなど</Text>
                <Text>Linkなど</Text>
                <Text>Linkなど</Text>
                <Text>Linkなど</Text>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button color="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </GridItem>
    </Grid>
  );
};

export default EmployeeHeader;
