import { setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import { useMediaQuery } from '@chakra-ui/react';

export function useLogin() {
  const [userId, setUserId] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter();
  const [isLargerThan480] = useMediaQuery('(max-width: 480px)');

  const onChengeUserId = (e: string) => {
    setUserId(e);
  };

  const onChengePass = (e: string) => {
    setPass(e);
  };

  async function authentication(ctx?: NextPageContext) {
    fetch(`${process.env.NEXT_PUBLIC_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        pass: pass,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        if (!json) {
          setError('Idかパスワードが間違っています');
        } else {
          setCookie(ctx, 'userId', userId, {
            maxAge: 30 * 24 * 60 * 60,
          });
          setCookie(ctx, 'color', json.departmentColor, {
            maxAge: 30 * 24 * 60 * 60,
          });
          router.replace('/employee/main');
        }
      });
  }

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
