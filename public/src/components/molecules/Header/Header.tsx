import { HeaderText, HeaderLink } from '../../entory_point';
import { VFC } from 'react';
import styles from './Header.module.scss';
import { Grid, GridItem } from '@chakra-ui/react';

const Header: VFC = () => {
  return (
    <div className={styles.header}>
      <Grid gap={4}>
        <GridItem rowSpan={5} colStart={1} colEnd={2}>
          <HeaderText />
          <HeaderLink />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Header;
