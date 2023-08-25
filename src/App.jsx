import "./App.css";
import Sale from "./Sale";
import Header from "./Header";
import Dna from "./Dna";
import Urban from "./Urban";
import CardContainer from "./Cards";
import HealthCard from "./Health-card";

function App() {
  return (
    <>
      <Sale />
      <Header />
      <main id="main">
        <Dna />
        <Urban />
        <CardContainer />
        <HealthCard />
      </main>
    </>
  );
}

export default App;
