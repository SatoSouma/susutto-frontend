import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';

export function useAdminMainTemplete(ctx?: NextPageContext) {
  const router = useRouter();
  const signOut = () => {
    destroyCookie(ctx, 'adminUserId');
    router.replace('/login');
  };

  return [signOut] as const;
}
