import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './detail.module.scss';

export const SkeletonDetailCard: React.FC = () => {
  return (
    <div className={styles.detailCard}>
      <div>
        <h2>
          <Skeleton />
        </h2>
      </div>
      <div className={` ${styles.nameWrapper} text-bold`}>
        <span>
          <Skeleton />
        </span>
      </div>
      <div className="text-grey">
        <h2>
          <Skeleton />
        </h2>
      </div>
      <div className={styles.addressContainer}>
        <div className="text-bold">
          <h3>
            <Skeleton />
          </h3>
        </div>
        <div>
          <p>
            <Skeleton />
          </p>
        </div>
      </div>
      <div className={`${styles.websiteWrapper}`}>
        <h2>
          <Skeleton />
        </h2>
      </div>
      <div className={styles.companyWrapper}>
        <div className="text-bold">
          <span>
            <Skeleton />
          </span>
        </div>
        <div>
          <Skeleton />
        </div>
      </div>
    </div>
  );
};
