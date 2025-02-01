import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Hosting from './Pages/Hosting/Hosting.jsx';
import About from './Pages/About/About.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/hosting' element={<Hosting />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
