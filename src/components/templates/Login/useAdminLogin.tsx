/* eslint-disable react-hooks/rules-of-hooks */
import { setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { useMediaQuery } from '@chakra-ui/react';

export function useAdminLogin() {
  const [userId, setUserId] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter();
  const [isLargerThan480] = useMediaQuery('(max-width: 480px)');

  console.log('480' + isLargerThan480);

  const onChengeUserId = (e: string) => {
    setUserId(e);
  };

  const onChengePass = (e: string) => {
    setPass(e);
  };

  async function authentication(ctx?: NextPageContext) {
    fetch(`${process.env.NEXT_PUBLIC_URL}/adminLogin`, {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        pass: pass,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        if (json) {
          setCookie(ctx, 'adminUserId', userId, {
            maxAge: 30 * 24 * 60 * 60,
          });
          router.replace('/admin/main');
        } else {
          setError('Idかパスワードが間違っています');
        }
      });
  }

  useEffect(() => {
    console.log('480' + isLargerThan480);
  }, []);

  return [
    onChengePass,
    onChengeUserId,
    authentication,
    handleClick,
    userId,
    pass,
    show,
    error,
    isLargerThan480,
  ] as const;
}
