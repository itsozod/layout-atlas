import { useState, useEffect } from "react";

const getLocalStorage = () => {
  let prevData = localStorage.getItem("myPrev");

  if (prevData) {
    return JSON.parse(localStorage.getItem("myPrev"));
  } else {
    return true;
  }
}
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
        <div className="mainSale">
          <div className="off-sale">
            <img src="sunny.png" alt="sun" className="sun" />
            <p className="off-parag">
              <b>-40% OFF Sale</b> on Atlas tests with promo code
              &#039;atlas2023&#039;
            </p>
            <button className="buy">Buy now</button>
          </div>
          <div className="delete-container">
            <img
              src="delete-btn.png"
              alt="delete"
              className="delete"
              onClick={deleteComponent}
            />
          </div>
        </div>
      )}
    </>
  );
}
