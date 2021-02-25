import React from 'react';
import { NavbarItem } from 'src/components/layout/navbar/navbarItem';
import { NavbarConfigItem } from 'src/components/layout/navbar/navbarTypes';
import { Designers } from 'src/pages/designers';
import { Detail } from 'src/pages/detail';
import { Home } from 'src/pages/home';
import styles from './navbar.module.scss';
import Logo from 'src/assets/Pixelmate_logo_claim_white.svg';
import { Button } from 'src/components/button/button';

export const routes: NavbarConfigItem[] = [
  { path: '/designeri', label: 'Designéři', page: <Designers />, exact: true },
  { path: '/detail', label: 'Detail', page: <Detail />, exact: true },
  { path: '/', label: 'Designéři', page: <Home />, exact: true },
];

export const navbarConfig: Omit<NavbarConfigItem, 'page' | 'exact'>[] = [
  { path: '/designeri', label: 'Designéři' },
  { path: '/', label: 'Portfolio' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      {/* Navbar logo holder */}
      <div>
        <img src={Logo} alt="Pixelmate logo" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {navbarConfig.map((route, index) => (
          <NavbarItem navbarItemLabel={route.label} path={route.path} key={index} />
        ))}
        <Button inverted label="Přihlásit se" />
      </div>
    </nav>
  );
};
