import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarConfigItem } from 'src/components/layout/navbar/navbarTypes';
import styles from './navbar.module.scss';

interface ComponentProps {
  navbarItemLabel: NavbarConfigItem['label'];
  path: NavbarConfigItem['path'];
}

export const NavbarItem: React.FC<ComponentProps> = ({ navbarItemLabel, path }) => {
  return (
    <div className={styles.navbarItem}>
      <Link to={path}>{navbarItemLabel}</Link>
    </div>
  );
};
