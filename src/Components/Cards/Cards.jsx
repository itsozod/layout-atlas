import { imageCards } from "./Image-cards";
import { articles } from "./Articles";
import styles from './Cards.module.css';
function Cards() {
  const cards = imageCards.map((card) => (
    <div className={styles.card} key={card.id}>
      <img src={card.img} alt={card.alt} className={styles.card_img} />
      <div className={styles.absolute_container}>
        <img src={card.absoluteImg} alt="" className={styles.absolute_img} />
        <img src={card.playBtn} alt="" className={styles.absolute_playBtn} />
      </div>
      <div className={styles.card_details}>
        <h3 className={styles.card_h3}>
          <span className={styles.span_card1}>{card.name1}</span>
          <br />
          <span className={styles.span_card2}>{card.name2}</span>
        </h3>
        <p className={styles.card_grey}>{card.grey}</p>
      </div>
    </div>
  ));
  return <div className={styles.card_container}>{cards}</div>;
}

function Articles() {
  return (
    <div className={styles.article_details}>
      {articles.map((article) => (
        <div className={styles.detail} key={article.id}>
          <p className={styles.number}>{article.number}</p>
          <p className={styles.advice}>{article.name}</p>
        </div>
      ))}
    </div>
  );
}
export default function CardContainer() {
  return (
    <div className={styles.main_card_container}>
      <Cards />
      <div className={styles.articles_container}>
        <div className={styles.article_para_container}>
        <h3 className={styles.article_para}>Top articles</h3>
        </div>
        <Articles />
      </div>
    </div>
  );
}
