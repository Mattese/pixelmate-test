import React, { useEffect, useState } from 'react';
import { NavbarConfigItem } from 'src/components/layout/navbar/navbarTypes';
import { Designers } from 'src/pages/designers';
import { Detail } from 'src/pages/detail';
import { Home } from 'src/pages/home';
import styles from './navbar.module.scss';
import Logo from 'src/assets/Pixelmate_logo_claim_white.svg';
import LogoBlack from 'src/assets/Pixelmate_logo_claim_black.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Modal } from 'src/components/modal/modal';
import { Button } from 'src/components/button/button';
import { FaHamburger } from 'react-icons/fa';

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
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEmail, setModalEmail] = useState('');
  const history = useHistory();
  const location = useLocation();

  const shouldRenderWhiteMenu = () => {
    setShouldRenderWhite(routes.some((route) => route.path === history.location.pathname && route.whiteMenuText));
  };

  useEffect(() => {
    shouldRenderWhiteMenu();
  }, [location.pathname]);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbarScrolled ? styles.navbarActive : styles.navbar}>
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

            <li>
              <button className={styles.navbarItemButton} onClick={() => setIsModalOpen(true)}>
                Přihlásit se
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.mobileLogoContainer}>
        <Link to="/">
          <img src={Logo} alt="Pixelmate logo" />
        </Link>
      </div>
      <div className={styles.mobileMenuButton}>
        <FaHamburger size={50} onClick={() => setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen)} />
      </div>

      {/* <div className={styles.mobileNavbar}>
        <div className={styles.mobileNavItemsWrapper}>
          {navbarConfig.map((route, index) => (
            <div className={styles.mobileNavItem}>
              <Link key={index} to={route.path}>
                <h2>{route.label}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div> */}

      {/* <Modal isModalVisible={isModalOpen} onModalClose={() => setIsModalOpen(false)}>
        <div className={styles.modalContentWrapper}>
          <div className={styles.modalTitle}>
            <h2>Přihlásit se</h2>
          </div>
          <div className={styles.modalContent}>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <input
              value={modalEmail}
              onChange={(e) => setModalEmail(e.target.value)}
              className="text-bold"
              type="email"
              placeholder="Váš email"
            />
          </div>
          <div className={styles.modalButtonWrapper}>
            <Button label="ODESLAT" onClick={() => console.log(modalEmail)} />
          </div>
        </div>
      </Modal> */}
    </nav>
  );
};
