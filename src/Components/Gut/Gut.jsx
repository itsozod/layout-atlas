import styles from "./Gut.module.css";
import PropTypes from "prop-types";
import { gutImages } from "./Gut-images";

function GutCardContainer({ children }) {
  return <div className={styles.gut_cards_container}>{children}</div>;
}
GutCardContainer.propTypes = {
  children: PropTypes.any,
};

function GutCards() {
  return (
    <GutCardContainer>
      {gutImages.map((gutImage) => (
        <div className={styles.gut_card} key={gutImage.id}>
          <img
            src={gutImage.img}
            alt={gutImage.alt}
            className={styles.gut_img_card}
          />
          <div className={styles.gut_card_para_container}>
            <h3 className={styles.gut_h3}>{gutImage.para}</h3>
            <p className={styles.gut_grey}>{gutImage.grey}</p>
          </div>
        </div>
      ))}
      <div className={styles.gut_card}>
        <p className={styles.violet_card}>
          What is a Mediterranean <br />
          diet and should you try it?
        </p>
        <p className={styles.violet_card}>
          Kombucha recipe for dummies: <br />
          make it, don&apos;t buy it!
        </p>
        <p className={styles.violet_card}>
          Nailed it: Listen to your gut <br />
          event
        </p>
      </div>
    </GutCardContainer>
  );
}

export default function Gut() {
  return (
    <div className={styles.gut_container}>
      <div className={styles.gut_para_container}>
        <h1 className={styles.gut_para}>In gut we trust</h1>
      </div>
      <GutCards />
    </div>
  );
}
