import { destroyCookie } from 'nookies';
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

export function useEmployeeHeader(ctx?: NextPageContext) {
  const router = useRouter();
  async function signOut() {
    await destroyCookie(ctx, 'userId');
    await destroyCookie(ctx, 'color');
    router.replace('/login');
  }

  return [signOut] as const;
}
