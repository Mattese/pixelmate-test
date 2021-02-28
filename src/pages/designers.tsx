import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { DesignerCard } from 'src/components/designerCard/designerCard';
import { SkeletonDesignerCard } from 'src/components/designerCard/skeletonDesignerCard';
import { SearchBar } from 'src/components/searchBar/searchBar';
import { Designer } from 'src/types/types';
import styles from './designers.module.scss';

export const Designers: React.FC = () => {
  const [designers, setDesigners] = useState<Designer[]>([]);
  const [loading, setLoading] = useState(false);
  const loadDesigners = async () => {
    setLoading(true);
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    setDesigners(data);
    setLoading(false);
  };
  useEffect(() => {
    loadDesigners();
  }, []);
  return (
    <>
      <div className={styles.topSection}>
        <div className={`${styles.searchBarWrapper} `}>
          <SearchBar />
        </div>
      </div>
      <div className={styles.cardsListSection}>
        <div className="row">
          <div className={styles.cardsWrapper}>
            {loading ? (
              <>
                <SkeletonDesignerCard />
                <SkeletonDesignerCard />
                <SkeletonDesignerCard />
              </>
            ) : (
              designers.map((d, index) => {
                if (index < 6) {
                  return <DesignerCard key={index} designer={d} />;
                }
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};
