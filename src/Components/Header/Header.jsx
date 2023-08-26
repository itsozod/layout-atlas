import styles from'./Header.module.css';
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
    <ul className={styles.links}>
      {links.map((link) => (
        <li className={styles.list} key={link}>
          <a href="#" className={styles.link}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.link_part}>
          <h1 className={styles.logo}>atlas</h1>
          <nav className={styles.menu}>
            <List />
          </nav>
        </div>
        <div className={styles.icon_part}>
          <img src="cart.png" alt="cart" className={styles.cart} />
          <img src="person.png" alt="person" className={styles.person} />
          <img src="search.png" alt="search" className={styles.search} />
        </div>
      </div>
      <div className={styles.big_part}>
        <h1 className={styles.blog}>
          More <span className={styles.answer}>answers</span> to your<br></br>{" "}
          <span className={styles.question}>questions</span> in our blog
        </h1>

        <p className={styles.health}>
          Sharing knowledge on how genes, gut bacteria <br></br> and life style
          affect at your health
        </p>
      </div>
      <div className={styles.mask}>
        <img src="masked.png" alt="masked" className={styles.mask_img} />
      </div>
    </header>
  );
}
