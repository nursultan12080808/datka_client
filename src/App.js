import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Rucovodstvo from "./components/Rucovodstvo"; // Пример компонента для другой страницы
import "./css/style.css";
import "./css/media.css";
import News from './components/News';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rucovodstvo" element={<Rucovodstvo />} />
          <Route path="/news/:id/" element={<News/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
