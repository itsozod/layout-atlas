import styles from "./Gut.module.css";
import PropTypes from 'prop-types';

function GutCardContainer({children}) {
return <div className={styles.gut_cards_container}>{children}</div>
}
GutCardContainer.propTypes = {
  children: PropTypes.any,
}

function GutCards() {
  return (
    <GutCardContainer>
    <div className={styles.gut_card}>
      <img src="microbal1.png" alt="Gut-Image" className={styles.gut_img_card} />
    </div>
    <div className={styles.gut_card}>
      <img src="microbal1.png" alt="Gut-Image" className={styles.gut_img_card}/>
    </div>
    <div className={styles.gut_card}>
      <p className={styles.violet_card}>What is a Mediterranean <br />diet and should you try it?</p>
      <p className={styles.violet_card}>Kombucha recipe for dummies: <br />make it, don&apos;t buy it!</p>
      <p className={styles.violet_card}>Nailed it: Listen to your gut <br />event</p>
    </div>
  </GutCardContainer>
  );
}

export default function Gut() {
  return (
    <div className={styles.gut_container}>
      <div className={styles.gut_para_container}>
        <h2 className={styles.gut_para}>In gut we trust</h2>
      </div>
      <GutCards />
    </div>
  );
}
