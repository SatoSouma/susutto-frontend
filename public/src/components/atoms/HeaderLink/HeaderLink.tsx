import { VFC } from 'react';
import { Link } from '@chakra-ui/react';

const HeaderLink: VFC = () => {
  return (
    <div>
      <Link>業務指示状況</Link>
      <Link>業務指示</Link>
      <Link>出勤情報</Link>
    </div>
  );
};

export default HeaderLink;
