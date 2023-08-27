import styles from "./Life.module.css";
import { lifeImages } from "./Life-images";

function Advice() {
  return (
    <div className={styles.life_container}>
      <div className={styles.life_para_container}>
        <h1 className={styles.life_para}>Your DNA should know this</h1>
      </div>
      <div className={styles.life_cards_container}>
        {lifeImages.map((lifeImage) => (
          <div className={styles.life_card} key={lifeImage.id}>
            <img
              src={lifeImage.img}
              alt={lifeImage.alt}
              className={styles.life_img_card}
            />
            <div className={styles.life_card_details}>
              <h3 className={styles.life_detail}>
                <span>{lifeImage.name1}</span>
                <br />
                <span>{lifeImage.name2}</span>
              </h3>
              <p className={styles.life_grey}>{lifeImage.grey}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Life() {
  return (
    <>
      <Advice />
    </>
  );
}
