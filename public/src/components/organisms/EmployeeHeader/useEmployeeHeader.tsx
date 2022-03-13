import { destroyCookie, setCookie } from 'nookies';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

export function useEmployeeHeader(ctx?: NextPageContext) {
  const router = useRouter();
  function signOut() {
    setCookie(ctx, 'userId', '', {
      maxAge: 30 * 24 * 60 * 60,
    });
    setCookie(ctx, 'color', '', {
      maxAge: 30 * 24 * 60 * 60,
    });
    router.replace('/');
  }

  return [signOut] as const;
}
