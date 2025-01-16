import Nav from "./components/Nav"
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import "./css/style.css"
import "./css/media.css"
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
