import React, { useEffect, useState } from 'react';
import { NavbarConfigItem } from 'src/components/layout/navbar/navbarTypes';
import { Designers } from 'src/pages/designers';
import { Detail } from 'src/pages/detail';
import { Home } from 'src/pages/home';
import styles from './navbar.module.scss';
import Logo from 'src/assets/Pixelmate_logo_claim_white.svg';
import LogoBlack from 'src/assets/Pixelmate_logo_claim_black.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';

export const routes: NavbarConfigItem[] = [
  { path: '/designeri', label: 'Designéři', page: <Designers />, exact: true, whiteMenuText: true },
  { path: '/detail/:id', label: 'Detail', page: <Detail />, exact: true, whiteMenuText: false },
  { path: '/', label: 'Designéři', page: <Home />, exact: true, whiteMenuText: false },
];

export const navbarConfig: Omit<NavbarConfigItem, 'page' | 'exact' | 'whiteMenuText'>[] = [
  { path: '/designeri', label: 'Designéři' },
  { path: '/', label: 'Portfolio' },
];

export const Navbar: React.FC = () => {
  const [shouldRenderWhite, setShouldRenderWhite] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const shouldRenderWhiteMenu = () => {
    setShouldRenderWhite(routes.some((route) => route.path === history.location.pathname && route.whiteMenuText));
  };

  useEffect(() => {
    shouldRenderWhiteMenu();
    console.log(history.location.pathname);
  }, [location.pathname]);

  return (
    <nav className={styles.navbar}>
      {/* Navbar logo holder */}
      <div className={styles.navbarSpacer}>
        <div>
          <Link to="/">
            {shouldRenderWhite ? <img src={LogoBlack} alt="Pixelmate logo" /> : <img src={Logo} alt="Pixelmate logo" />}
          </Link>
        </div>

        <div className={styles.navContainer}>
          <ul>
            {navbarConfig.map((route, index) => (
              <li className={styles.navbarItem}>
                <Link key={index} to={route.path}>
                  {route.label}
                </Link>
              </li>
            ))}

            <li className={styles.navbarItemButton}>
              <Link to={'/'}>Přihlásit se</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
