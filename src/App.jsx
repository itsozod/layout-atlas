import "./App.css";
import Sale from "./Sale";
import Header from "./Header";
import Dna from "./Dna";
import Urban from "./Urban";
import CardContainer from "./Cards";

function App() {
  return (
    <>
      <Sale />
      <Header />
      <main id="main">
        <Dna />
        <Urban />
        <CardContainer />
      </main>
    </>
  );
}

export default App;
