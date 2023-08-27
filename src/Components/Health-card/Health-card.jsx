import { healthImages } from "./Health-images";
import styles from './Health.card.module.css';

function HealthImageCards() {
    return (
        <div className={styles.health_container}>
            <div className={styles.health_para_container}>
            <h3 className={styles.health_para}>Manage your health <span className={styles.violet_atlas}>with Atlas</span> tests</h3>
            </div>
            <div className={styles.health_cards_container}>
                {healthImages.map((healthImage) => 
                <div className={styles.health_card} key={healthImage.id}>
                    <img src={healthImage.img} alt={healthImage.alt} className={styles.health_img_card}/>
                </div>
                )}
            </div>
        </div>
    );
}
export default function HealthCard() {
    return (
        <>
        <HealthImageCards />
        </>
    );
}