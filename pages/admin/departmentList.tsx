import { NextPage } from 'next';
import { DepartmentListTemplete } from '../../public/src/components/entory_point';
import { useRef } from 'react';

const departmentListPage: NextPage = () => {
  return (
    <>
      <DepartmentListTemplete />
    </>
  );
};

export default departmentListPage;
