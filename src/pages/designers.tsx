import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { DesignerCard } from 'src/components/designerCard/designerCard';
import { Designer } from 'src/types/types';
import styles from './designers.module.scss';

export const Designers: React.FC = () => {
  const [designers, setDesigners] = useState<Designer[]>([]);
  const loadDesigners = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    setDesigners(data);
  };
  useEffect(() => {
    loadDesigners();
  }, []);
  return (
    <>
      <div className={styles.topSection} />
      <div className={styles.cardsListSection}>
        <div className="row">
          <div className={styles.cardsWrapper}>
            {designers.map((d, index) => {
              if (index < 6) {
                return <DesignerCard key={index} designer={d} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
