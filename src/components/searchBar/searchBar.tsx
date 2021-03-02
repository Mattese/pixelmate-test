import { Button, ButtonClasses } from 'src/components/button/button';
import styles from './searchBar.module.scss';
import { GoSearch } from 'react-icons/go';

interface ComponentProps {
  value: string;
  onValueChange: (e: string) => void;
}

export const SearchBar: React.FC<ComponentProps> = ({ value, onValueChange }) => {
  return (
    <div className={styles.container}>
      <span style={{ color: 'blue', position: 'relative', top: '22px', left: '30px' }}>
        <GoSearch size={20} />
      </span>
      <input
        className="text-bold"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        type="text"
        placeholder="Vyhledávání"
      />
      <div className={styles.buttonWrapper}>
        <Button label="VYHLEDAT" />
      </div>
    </div>
  );
};
