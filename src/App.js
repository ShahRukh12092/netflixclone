import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {requests.map((movie) => (
        <Row
          key={movie.id}
          title={movie.title}
          fetchUrl={movie.link}
          islarge={movie.islarge}
        />
      ))}
    </div>
  );
}

export default App;
