import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
