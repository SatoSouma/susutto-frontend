import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';

export function useAdminMainTemplete(ctx?: NextPageContext) {
  const router = useRouter();
  const signOut = () => {
    setCookie(ctx, 'adminUserId', '', {
      maxAge: 30 * 24 * 60 * 60,
    });

    router.replace('/login');
  };

  return [signOut] as const;
}
