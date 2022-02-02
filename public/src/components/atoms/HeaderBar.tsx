import { Box, Input, Button, Grid, GridItem } from '@chakra-ui/react';
import { UserIcon, HamburgerIcon } from 'public';

const HeaderBar: React.VFC = () => {
  return (
    <Box bg="skyBlue.100" h="60px" boxShadow="2xl">
      <Grid templateColumns="repeat(10, 1fr)">
        <GridItem colSpan={1} textAlign="center">
          <Button
            pt="4"
            bg="skyBlue.100"
            _active={{ bg: 'skyBlue.100' }}
            _hover={{ bg: 'skyBlue.100' }}
            _focus={{ boxShadow: 'none', bg: 'skyBlue.100' }}
          >
            <HamburgerIcon size={'5'} color={'white'} />
          </Button>
        </GridItem>
        <GridItem colSpan={5} textAlign="left">
          <Input
            placeholder="serch..."
            css={{
              '&::placeholder': { color: 'white' },
            }}
            color="white"
            w="400px"
            bg="skyBlue.300"
            ml="100px"
            borderColor="skyBlue.300"
            mt="2"
            borderRadius="0"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HeaderBar;
