import React from "react";
import "./App.css";
import Row from "./Row.js";
import requests from "./requests";
import Banner from "./Banner.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies} />
      <Row
        title="Romance Movies Now"
        fetchUrl={requests.fetchTopRomanceMovies}
      />
      <Row title="Documentaries" fetchUrl={requests.fetchTopDocumentaries} />
    </div>
  );
}

export default App;
