import { Box, Input, Button, Grid, GridItem } from '@chakra-ui/react';
import { UserIcon, HamburgerIcon } from 'src';

const HeaderBar: React.VFC = () => {
  return (
    <Box bg="skyBlue.100" h="60px" boxShadow="2xl">
      <Grid templateColumns="repeat(10, 1fr)">
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
