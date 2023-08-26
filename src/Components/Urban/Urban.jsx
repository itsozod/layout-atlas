import styles from './Urban.module.css';
export default function Urban() {
  return (
      <div className={styles.urban_container}>
        <div className={styles.urban_img_container}>
          <img src="urban.png" alt="urban" className={styles.urban_img} />
        </div>
        <div className={styles.biome_container}>
            <h1 className={styles.biome_h1}>Urban biome project takes us <br />around Europe</h1>
            <p className={styles.grey_para}>5 June {'\u2022'} 15 min read</p>
        </div>
      </div>
  );
}
