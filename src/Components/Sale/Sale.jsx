import styles from './Sale.module.css';
import { useState, useEffect } from "react";

const getLocalStorage = () => {
  let prevData = localStorage.getItem("myPrev");

  if (prevData) {
    return JSON.parse(localStorage.getItem("myPrev"));
  } else {
    return true;
  }
};
export default function Sale() {
  const [prev, setState] = useState(getLocalStorage());

  const deleteComponent = () => {
    setState((prev) => !prev);
    console.log("Component is deleted");
  };

  useEffect(() => {
    localStorage.setItem("myPrev", JSON.stringify(prev));
  }, [prev]);

  return (
    <>
      {prev && (
        <div className={styles.mainSale}>
          <div className={styles.off_sale}>
            <img src="sunny.png" alt="sun" className={styles.sun} />
            <p className={styles.off_parag}>
              <b>-40% OFF Sale</b> on Atlas tests with promo code
              &#039;atlas2023&#039;
            </p>
            <button className={styles.buy}>Buy now</button>
          </div>
          <div className={styles.delete_container}>
            <img
              src="delete-btn.png"
              alt="delete"
              className={styles.delete}
              onClick={deleteComponent}
            />
          </div>
        </div>
      )}
    </>
  );
}
