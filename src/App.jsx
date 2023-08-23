import "./App.css";
import Sale from "./Sale";
import Header from "./Header";
import Dna from "./Dna";
import Urban from "./Urban";

function App() {
  return (
    <>
      <Sale />
      <Header />
      <main id="main">
        <Dna />
        <Urban />
      </main>
    </>
  );
}

export default App;
