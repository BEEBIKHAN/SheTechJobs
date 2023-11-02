import "./styles/app.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Content />
      <Footer />
      <p>We got this y'all !!!</p>
    </div>
  );
}

export default App;
