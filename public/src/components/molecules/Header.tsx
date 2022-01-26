import { HeaderText, HeaderLink } from 'public';
import { VFC } from 'react';
import styles from './Header.module.scss';
import { Grid, GridItem } from '@chakra-ui/react';

const Header: VFC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <HeaderText />
      </div>
      <hr />
      <HeaderLink />
    </div>
  );
};

export default Header;
