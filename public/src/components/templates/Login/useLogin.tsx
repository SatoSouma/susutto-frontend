import { setCookie } from 'nookies';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function useLogin() {
  const [userId, setUserId] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter();

  const onChengeUserId = (e: string) => {
    setUserId(e);
  };

  const onChengePass = (e: string) => {
    setPass(e);
  };

  async function authentication() {
    // const response = await fetch(
    //   `api/auctionList?id=${userId}&password=${pass}`,
    //   { method: 'POST' },
    // )
    // if (response) {
    setCookie(null, 'userId', userId, {
      maxAge: 30 * 24 * 60 * 60,
    });
    router.replace('/home');

    //     }
  }

  return [
    onChengePass,
    onChengeUserId,
    authentication,
    handleClick,
    userId,
    pass,
    show,
  ] as const;
}
