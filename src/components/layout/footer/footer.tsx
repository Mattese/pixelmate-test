import Logo from 'src/assets/Pixelmate_logo_claim_white.svg';
import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>© All rights reserved 2013-2019. Pixelmate s.r.o.</p>
      </div>
      <div className={styles.footerLogo}>
        <img src={Logo} alt="Pixelmate logo" />
      </div>
      <div>Zásady ochrany osobních údajů</div>
    </div>
  );
};
