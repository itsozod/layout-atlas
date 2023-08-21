import propTypes from "prop-types";
function List({ listName }) {
  return (
    <li className="list">
      <a href="#" className="link">
        {listName}
      </a>
    </li>
  );
}

List.propTypes = {
  listName: propTypes.string.isRequired,
};

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="link-part">
          <h1 className="logo">atlas</h1>
          <nav className="menu">
            <ul className="links">
              <List listName="DNA" />
              <List listName="Microbiome" />
              <List listName="Partner with us" />
              <List listName="About Atlas" />
              <List listName="FAQ" />
              <List listName="Upload" />
            </ul>
          </nav>
        </div>
        <div className="icon-part">
          <img src="cart.png" alt="cart" className="cart" />
          <img src="person.png" alt="person" className="person" />
          <img src="search.png" alt="search" className="search" />
        </div>
      </div>
      <div className="big-part">
        <h1 className="blog">
          More <span className="answer">answers</span> to your <br></br>{" "}
          <span className="question">questions</span> in our blog
        </h1>

        <p className="health">
          Sharing knowledge on how genes, gut bacteria <br></br> and life style
          affect at your health
        </p>
      </div>
      <div className="mask">
        <img src="masked.png" alt="masked" className="mask-img"/>
      </div>
    </header>
  );
}
