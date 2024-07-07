import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HeroSection from './components/heroSection/heroSection';
import Home from './pages/home';
import NavBar from './components/navBar/navBar';
import Explore from './pages/explore';
import Pantry from './pages/pantry';
import Login from './pages/login';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/pantry" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
