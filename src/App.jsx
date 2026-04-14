import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Contact from './pages/contact';
// Import other pages...

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/faq" element={<FAQ />} /> */}
        {/* <Route path="/privacy" element={<Privacy />} /> */}
      </Routes>
    </Router>
  );
}