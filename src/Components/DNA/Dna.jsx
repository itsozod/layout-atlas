import { dnaData } from "./Dna-data";
import styles from './Dna.module.css';

function Cards() {
  const datas = dnaData.map((data) => (
    <p key={data.id} className={styles.dna_card}>
      {data.code} {data.name} {""}
      <span className={styles.grey}>{data.grey}</span>
    </p>
  ));
  return <div className={styles.dna_container}>{datas}</div>;
}

export default function Dna() {
  return (
    <> 
    <Cards />
    </>
  );
}
