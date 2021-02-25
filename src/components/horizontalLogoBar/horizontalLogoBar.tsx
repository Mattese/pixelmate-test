import styles from './horizontalLogoBar.module.scss';

export const HorizontalLogoBar: React.FC = () => {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logoImage_CzechTv} />
      <div className={styles.logoImage_Cemix} />
      <div className={styles.logoImage_Deloitte} />
      <div className={styles.logoImage_NM} />
      <div className={styles.logoImage_Bosch} />
    </div>
  );
};
