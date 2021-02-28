import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import styles from './detail.module.scss';
import { Designer } from 'src/types/types';
import DesignerPortrait from 'src/assets/Component15–1@2x.png';
import { SkeletonDetailCard } from 'src/pages/skeletonDetailCard';

export const Detail: React.FC = () => {
  const [designerDetail, setDesignerDetail] = useState<Designer>();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const params: { id: string } = useParams();

  const loadData = async () => {
    setLoading(true);
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    setDesignerDetail(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="row">
      <div className={styles.contentContainer}>
        {loading ? (
          <SkeletonDetailCard />
        ) : (
          <div className={styles.detailCard}>
            <button onClick={() => history.goBack()}>ZPĚT</button>
            <div>
              <h2>{designerDetail?.username}</h2>
            </div>
            <div className={` ${styles.nameWrapper} text-bold`}>
              <span>{designerDetail?.name}</span>
            </div>
            <div className="text-grey">
              <h2>{designerDetail?.email}</h2>
            </div>
            <div className={styles.addressContainer}>
              <div className="text-bold">
                <h3>{designerDetail?.address.city}</h3>
              </div>
              <div>
                <p>
                  {designerDetail?.address.street}
                  <br />
                  {designerDetail?.address.zipcode}
                  <br />
                  {designerDetail?.address.suite}
                </p>
              </div>
            </div>
            <div className={`${styles.websiteWrapper}`}>
              <h2>
                <a className="text-primary" href={designerDetail?.website}>
                  {designerDetail?.website}
                </a>
              </h2>
            </div>
            <div className={styles.companyWrapper}>
              <div className="text-bold">
                <span>{designerDetail?.company.name}</span>
              </div>
              <div>
                <p>Pellentesque habitant morbi tristique senectus et netus malesuada.</p>
              </div>
            </div>
          </div>
        )}
        <div className={styles.imgWrapper}>
          <img src={DesignerPortrait} alt="Developer portrait" />
        </div>
      </div>
    </div>
  );
};
