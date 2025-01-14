import Nav from "./components/Nav"
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import "./css/style.css"
import "./css/media.css"
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
