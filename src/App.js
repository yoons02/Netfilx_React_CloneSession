import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api/requests';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        id = "TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        id = "TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        id = "AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id = "CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        id = "HM"
        fetchUrl={requests.fetchHorroryMovies}
      />
      <Row
        title="Romance Movies"
        id = "RM"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Footer />
    </div>
  );
}

export default App;
