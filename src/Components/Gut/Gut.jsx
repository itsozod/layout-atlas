import styles from './Gut.module.css';
import { GutImages } from './Gut-images';

function GutCard() {
  return (
    <div className={styles.gut_cards_container}>
      {GutImages.map((gutimage) => 
      <div className={styles.gut_card } key={gutimage.id}>
        <img src={gutimage.img} alt="Gut-Image" className={styles.gut_img_card} />
      </div>
      )}
    </div>
  );
}
export default function Gut() {
  return (
    <div className={styles.gut_container}>
      <div className={styles.gut_para_container}>
        <h2 className={styles.gut_para}>In gut we trust</h2>
      </div>
      <GutCard />
    </div>
  );
}
