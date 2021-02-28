import { Button, ButtonClasses } from 'src/components/button/button';
import styles from '../../pages/designers.module.scss';

export const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Vyhledávání" />
      <div className={styles.buttonWrapper}>
        <Button label="VYHLEDAT" className={ButtonClasses['button__Blue__Large']} />
      </div>
    </div>
  );
};
