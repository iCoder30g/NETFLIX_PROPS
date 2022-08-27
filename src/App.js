import Card from "./Cards";
import Data from "./Data";
import "./Card.css";

function netFiCard(value) {
  return (
    <Card
      imagesrc={value.imagesrc}
      title={value.title}
      sname={value.sname}
      link={value.link}
    />
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="heading_style"> List of top 6 Netflix Series</h1>
      {Data.map(netFiCard)}
    </div>
  );
}

export default App;
