import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, routes } from 'src/components/layout/navbar/navbar';
import React from 'react';
import { Footer } from 'src/components/layout/footer/footer';
import styles from './layout.module.scss';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      {/* Navbar section */}
      <Router>
        <Navbar />
        {/* Body section */}
        <div style={{ flexGrow: 1 }}>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} exact={route.exact} path={route.path}>
                {route.page}
              </Route>
            ))}
          </Switch>
        </div>
        {/* Footer section */}
        <Footer />
      </Router>
    </div>
  );
};
