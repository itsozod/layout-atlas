import { useState } from "react";
export default function Sale() {
  const [showComponent, setShowComponent] = useState(true);

  const deleteComponent = () => {
    setShowComponent(!showComponent);
    console.log("Component is deleted");
  };
  return (
    <>
      {showComponent && (
        <div className="mainSale">
          <div className="off-sale">
            <img src="sun.png" alt="sun" className="sun" />
            <p className="off-parag">
              <b>-40% OFF Sale</b> on Atlas tests with promo code
              &#039;atlas2023&#039;
            </p>
            <button className="buy">Buy now</button>
          </div>
          <div className="delete-container">
            <img
              onClick={deleteComponent}
              src="delete-btn.png"
              alt="delete"
              className="delete"
            />
          </div>
        </div>
      )}
    </>
  );
}
