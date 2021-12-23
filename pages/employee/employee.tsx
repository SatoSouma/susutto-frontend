import React, { VFC } from 'react';
import { NextPage } from 'next';
import { EmployeeTemplate } from '../../public/src/components/entory_point';

const mainPage: NextPage = () => {
  return (
    <>
      <EmployeeTemplate />
    </>
  );
};

export default mainPage;
