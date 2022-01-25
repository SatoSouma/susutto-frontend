import { VFC } from 'react';
import Link from 'next/link';
import styles from './HeaderLink.module.scss';
import { Grid, GridItem } from '@chakra-ui/react';

const HeaderLink: VFC = () => {
  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" height="50px">
        <GridItem
          colStart={2}
          colEnd={3}
          textAlign="center"
          marginTop="0.8em"
          color="white"
        >
          <Link href="/admin/taskList">業務指示状況</Link>
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={4}
          textAlign="center"
          marginTop="0.8em"
          color="white"
        >
          <Link href="/admin/departmentList">業務指示</Link>
        </GridItem>
        <GridItem
          colStart={4}
          colEnd={5}
          textAlign="center"
          marginTop="0.8em"
          color="white"
        >
          <Link href="/admin/departmentList">出勤情報</Link>
        </GridItem>
      </Grid>
    </div>
  );
};

export default HeaderLink;
