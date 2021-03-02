import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';
import { Button, ButtonClasses } from 'src/components/button/button';
import { Designer } from 'src/types/types';
import styles from './designerCard.module.scss';
import { ReactComponent as ArrowForward } from 'src/assets/flaticon1557998900-blue-svg.svg';
import { ReactComponent as LocationPointer } from 'src/assets/Group 1071.svg';

interface ComponentProps {
  designer: Designer;
}

export const DesignerCard: React.FC<ComponentProps> = ({ designer }) => {
  const history = useHistory();
  return (
    <div className={styles.cardContainer}>
      <div>
        <h3>{designer.username || <Skeleton />}</h3>
      </div>
      <div className={`${styles.nameWrapper} text-bold`}>
        <span>{designer.name || <Skeleton />}</span>
      </div>
      <div className={`${styles.emailWrapper} text-grey`}>
        <h3>{designer.email || <Skeleton />}</h3>
      </div>
      <div className={styles.addressContainer}>
        <div className="text-bold">
          <h3>{designer.address.city || <Skeleton />}</h3>
        </div>
        <div>
          <p>
            {designer.address.street || <Skeleton />}
            <br />
            {`${designer.address.zipcode}, ${designer.address.suite}` || <Skeleton />}
          </p>
        </div>
        <span style={{ position: 'relative', left: -20, top: -65 }}>
          <LocationPointer />
        </span>
      </div>
      <div className={`${styles.webWrapper}`}>
        <h3>
          <a className="text-primary" href={`www.${designer.website}`}>
            {`www.${designer.website}` || <Skeleton />}
          </a>
        </h3>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          label={'ZOBRAZIT PROFIL' || <Skeleton />}
          className={ButtonClasses['button__White__Medium']}
          onClick={() => history.push(`/detail/${designer.id}`)}
          icon={<ArrowForward />}
        />
      </div>
    </div>
  );
};
