import { imageCards } from "./Image-cards";
import { articles } from "./Articles";
function Cards() {
  const cards = imageCards.map((card) => (
    <div className="card" key={card.id}>
      <img src={card.img} alt={card.alt} className="card-img" />
      <div className="absolute-container">
        <img src={card.absoluteImg} alt="" className="absolute-img" />
        <img src={card.playBtn} alt="" className="absolute-playBtn" />
      </div>
      <div className="card-details">
        <h3 className="card-h3">
          <span className="span-card1">{card.name1}</span>
          <br />
          <span className="span-card2">{card.name2}</span>
        </h3>
        <p className="card-grey">{card.grey}</p>
      </div>
    </div>
  ));
  return <div className="card-container">{cards}</div>;
}

function Articles() {
  return (
    <div className="article-details">
      {articles.map((article) => (
        <div className="detail" key={article.id}>
          <p className="number">{article.number}</p>
          <p className="advice">{article.name}</p>
        </div>
      ))}
    </div>
  );
}
export default function CardContainer() {
  return (
    <div className="main-card-container">
      <Cards />
      <div className="articles-container">
        <div className="article-para-container">
        <h3 className="article-para">Top articles</h3>
        </div>
        <Articles />
      </div>
    </div>
  );
}
