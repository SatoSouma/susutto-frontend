import { GetStaticProps } from 'next';

//クライアント側での実行
export default function Index(): JSX.Element {
  return <>{process.env.NEXT_PUBLIC_URL}</>;
}
