import { AllTaskText, HandleBtn, MyTaskList } from 'public';
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
