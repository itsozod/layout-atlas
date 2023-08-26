import "./App.css";
import Sale from "./Components/Sale/Sale";
import Header from "./Components/Header/Header";
import Dna from "./Components/DNA/Dna";
import Urban from "./Components/Urban/Urban";
import CardContainer from "./Components/Cards/Cards";
import HealthCard from "./Components/Health-card/Health-card";
import Gut from "./Components/Gut/Gut";
// import Gut from "./Components/Gut/Gut";

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
        <Gut />
      </main>
    </>
  );
}

export default App;
