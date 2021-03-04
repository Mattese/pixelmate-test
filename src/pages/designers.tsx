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
  const [searchBarValue, setSearchBarValue] = useState('');

  const loadDesigners = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setDesigners(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadDesigners();
  }, []);

  const filterSearchName = () => {
    let filteredArray = designers.filter((designer) =>
      designer.name.toLocaleLowerCase().includes(searchBarValue.toLocaleLowerCase()),
    );
    return filteredArray.map((d, index) => {
      if (index < 6) {
        return <DesignerCard key={index} designer={d} />;
      }
    });
  };

  return (
    <>
      <div className={styles.topSection}>
        <div className={`${styles.searchBarWrapper} `}>
          <SearchBar value={searchBarValue} onValueChange={setSearchBarValue} />
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
              filterSearchName()
            )}
          </div>
        </div>
      </div>
    </>
  );
};
