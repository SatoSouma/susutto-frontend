import { VFC } from 'react';
import { Text, Button, Grid, GridItem } from '@chakra-ui/react';
import { UserIcon } from 'public';

const TitleText: VFC = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      <GridItem colSpan={1} bg="LimeGreen.100">
        <Button>
          <UserIcon />
        </Button>
      </GridItem>
      <GridItem colSpan={1}>
        <Text
          color="white"
          bg="LimeGreen.100"
          fontSize="2em"
          fontWeight="bold"
          textAlign="center"
          paddingTop="0.8em"
          height="3em"
        >
          Title
        </Text>
      </GridItem>
    </Grid>
  );
};

export default TitleText;
