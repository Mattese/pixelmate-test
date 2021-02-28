import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './designerCard.module.scss';

export const SkeletonDesignerCard: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <h3>{<Skeleton />}</h3>
      </div>
      <div className={`${styles.nameWrapper} text-bold`}>
        <span>{<Skeleton />}</span>
      </div>
      <div className={`${styles.emailWrapper} text-grey`}>
        <h3>{<Skeleton />}</h3>
      </div>
      <div className={styles.addressContainer}>
        <div className="text-bold">
          <h3>{<Skeleton />}</h3>
        </div>
        <div>
          <p>{<Skeleton height={42} />}</p>
        </div>
      </div>
      <div className={`${styles.webWrapper}`}>
        <h3>{<Skeleton />}</h3>
      </div>
      <div className={styles.buttonWrapper}>
        <Skeleton height={62} />
      </div>
    </div>
  );
};
