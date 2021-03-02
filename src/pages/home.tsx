import React, { useState } from 'react';
import { Button } from 'src/components/button/button';
import { HorizontalLogoBar } from 'src/components/horizontalLogoBar/horizontalLogoBar';
import { SignInForm } from 'src/components/signInForm/signInForm';
import styles from './home.module.scss';
import { ReactComponent as ArrowForward } from 'src/assets/flaticon1557998900-white-svg.svg';
import { Modal } from 'src/components/modal/modal';

export const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <div className={styles.developmentSection}>
        <div className="row">
          <div className={styles.contentWrapper}>
            <div className={styles.developmentBoxLeft}>
              <div className="text-primary-light text-extra-bold">
                <h1>Specializujeme se na vývoj produktů</h1>
              </div>
              <div className="text-grey">
                <h2>
                  Ty nejlepší firmy na trhu už CRM systémy nějakou tu dobu používají, ale není výjimkou, že se trápí
                  zbytečně.
                </h2>
              </div>
              <div className={styles.contactButtonRow}>
                <Button label="KONTAKTUJTE NÁS" icon={<ArrowForward />} />
              </div>
            </div>
            <div className={styles.developmentBoxRight}>
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.introductionSection}>
        <div className="row">
          <HorizontalLogoBar />
          <div className={styles.introductionSidesWrapper}>
            <div className={styles.introductionLeftSide}>
              <div className={styles.topSection}>
                <div className={styles.firstLine}>
                  <h3 className="text-primary text-bold ">POZNEJTE PIXELMATE TÝM</h3>
                </div>
                <div className="text-extra-bold">
                  <h1>Jsme mladí a hraví, startupy nás baví</h1>
                </div>
              </div>
              <div className={styles.textWrapper}>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  Pellentesque arcu. Ut tempus purus at lorem. Nam quis nulla. Aenean placerat. Mauris suscipit, ligula
                  sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Fusce tellus.
                  Praesent id justo in neque elementum ultrices. Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam.
                </p>
              </div>
            </div>
            <div className={styles.introductionRightSide}>
              <div className={styles.topSection} />
              <div className={styles.textWrapper}>
                <p>
                  architecto beatae vitae dicta sunt explicabo. Nulla est. Curabitur bibendum justo non orci. Aenean
                  placerat. Praesent in mauris eu tortor porttitor accumsan. Maecenas libero. Phasellus enim erat,
                  vestibulum vel, aliquam a, posuere eu, velit. Etiam commodo dui eget wisi. Fusce dui leo, imperdiet
                  in, aliquam sit amet, feugiat eu, orci. Nemo enim ipsam voluptatem.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <Button label="CO DALŠÍHO SE ŠUŠKÁ" icon={<ArrowForward />} onClick={() => setIsModalVisible(true)} />
          </div>
        </div>
      </div>
    </>
  );
};
