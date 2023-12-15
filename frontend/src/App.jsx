import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/app.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
