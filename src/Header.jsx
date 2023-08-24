function List() {
  const links = [
    "DNA",
    "Micribiome",
    "Partner with us",
    "About atlas",
    "FAQ",
    "Upload",
  ];
  return (
    <ul className="links">
      {links.map((link) => (
        <li className="list" key={link}>
          <a href="#" className="link">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="link-part">
          <h1 className="logo">atlas</h1>
          <nav className="menu">
            <List />
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
          More <span className="answer">answers</span> to your<br></br>{" "}
          <span className="question">questions</span> in our blog
        </h1>

        <p className="health">
          Sharing knowledge on how genes, gut bacteria <br></br> and life style
          affect at your health
        </p>
      </div>
      <div className="mask">
        <img src="masked.png" alt="masked" className="mask-img" />
      </div>
    </header>
  );
}
