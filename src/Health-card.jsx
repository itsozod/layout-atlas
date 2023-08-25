import { HealthImages } from "./Health-images";

function HealthImageCards() {
    return (
        <div className="health-container">
            <div className="health-para-container">
            <h3 className="health-para">Manage your health <span className="violet-atlas">with Atlas</span> tests</h3>
            </div>
            <div className="health-cards-container">
                {HealthImages.map((HealthImage) => 
                <div className="health-card" key={HealthImage.id}>
                    <img src={HealthImage.img} alt="health-image" className="health-img-card"/>
                </div>
                )}
            </div>
        </div>
    );
}
export default function HealthCard() {
    return (
        <>
        <HealthImageCards />
        </>
    );
}