import {
  AllTaskText,
  HandleBtn,
  MyTaskList,
} from '../public/src/components/entory_point';
import { NextPage } from 'next';

const Tester_page: NextPage = () => {
  return (
    <>
      <AllTaskText />
      <MyTaskList />
      <HandleBtn />
    </>
  );
};

export default Tester_page;
