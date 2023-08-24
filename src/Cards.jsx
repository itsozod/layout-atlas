import { imageCards } from "./Image-cards";
function Cards() {
  const cards = imageCards.map((card) => (
    <div className="card" key={card.id}>
      <img src={card.img} alt={card.alt} className="card-img" />
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
export default function CardContainer() {
  return (
    <div className="main-card-container">
      <Cards />
    </div>
  );
}
