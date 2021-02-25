import Logo from 'src/assets/Pixelmate_logo_claim_white.svg';
import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div>© All rights reserved 2013-2019. Pixelmate s.r.o.</div>
      <div>
        <img src={Logo} alt="Pixelmate logo" />
      </div>
      <div>Zásady ochrany osobních údajů</div>
    </div>
  );
};
