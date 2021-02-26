import { ReactNode } from 'react';

export type NavbarConfigItem = {
  path: string;
  label: string;
  page: ReactNode;
  exact: boolean;
  whiteMenuText: boolean;
};
