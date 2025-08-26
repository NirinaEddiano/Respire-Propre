import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EntrepriseNettoyageCanape from './pages/EntrepriseNettoyageCanape';
import AstucesNettoyage from './pages/AstucesNettoyage';
import NosServices from './pages/NosServices';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<EntrepriseNettoyageCanape />} />
        <Route path="/astuces-nettoyage-canape" element={<AstucesNettoyage />} />
        <Route path="/nos-services" element={<NosServices />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;