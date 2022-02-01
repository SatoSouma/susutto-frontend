import { PAGE } from './types';

export const setPage = (input: string) => ({
  type: PAGE,
  input,
});
