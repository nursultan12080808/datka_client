import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Rucovodstvo from "./components/Rucovodstvo"; // Пример компонента для другой страницы
import "./css/style.css";
import "./css/media.css";
import News from './components/News';
import Cadr from './components/Cadr';
import Zemli from './components/Zemli';
import Selhoz from './components/Selhoz'
import { useState } from 'react';
import GosZemli from './components/GosZemli';
import Postanovlenie from './components/Postanovlenie';
import Postanovlenieone from './components/Postanovlenieone';
import ScrollToTop from './components/ScrollToTop';
import Novosty from './components/Novosty';
import Contakty from './components/Contakty';
import History from './components/History';
import Electr from './components/Electr';


function App() {

  const [language, setLanguage] = useState("ru");

  
  return (
    <Router>
      <div className="App">
        <Nav language={language} setLanguage={setLanguage} />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home language={language} setLanguage={setLanguage} />} />
          <Route path="/rucovodstvo/" element={<Rucovodstvo language={language} setLanguage={setLanguage} />} />
          <Route path="/cadr/" element={<Cadr language={language} setLanguage={setLanguage} />} />
          <Route path="/earths/" element={<Zemli language={language} setLanguage={setLanguage} />} />
          <Route path="/selhoz/" element={<Selhoz language={language} setLanguage={setLanguage} />} />
          <Route path="/gos_zemli/" element={<GosZemli language={language} setLanguage={setLanguage} />} />
          <Route path="/postanovlenie/" element={<Postanovlenie language={language} setLanguage={setLanguage} />} />
          <Route path="/postanovlenie/:id/" element={<Postanovlenieone language={language} setLanguage={setLanguage} />} />
          <Route path="/news/" element={<Novosty language={language} setLanguage={setLanguage} />} />
          <Route path="/news/:id/" element={<News language={language} setLanguage={setLanguage}/>} />
          <Route path="/contact/" element={<Contakty language={language} setLanguage={setLanguage} />} />
          <Route path="/history/" element={<History language={language} setLanguage={setLanguage} />} />
          <Route path="/electronaya-priemnaya/" element={<Electr language={language} setLanguage={setLanguage} />} />

        </Routes>
        <Footer language={language} setLanguage={setLanguage}/>
      </div>
    </Router>
  );
}

export default App;
