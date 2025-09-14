// src/components/Navbar.jsx

import { useState, useEffect } from 'react';
import { NavLink, useLocation ,Link} from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/LOGO.jpg';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu mobile
  const location = useLocation();

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effet pour fermer le menu quand l'URL change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Effet pour bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo-link">
          <img src={logo} alt="Saison + Logo" className="logo" />
        </NavLink>

<div className="navbar-mobile-right">
        <div className="navbar-mobile-buttons">
          <Link to="/contact" className="navbar-link contact-button">
            <i className="fas fa-envelope"></i> <span className="button-text">Devis Gratuit</span> 
          </Link>
          <a href="tel:+15815806439" className="btn navbar-phone-button">
            <i className="fas fa-phone"></i> <span className="button-text">581-580-6439</span>
          </a>
        </div>
        
        <button className="navbar-burger" onClick={toggleMenu} aria-label="Ouvrir le menu">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
    </div>

        {/* Le menu qui s'affiche en overlay sur mobile */}
        <div className={`navbar-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-menu">
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/nos-services" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}>
                Nos Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/astuces-nettoyage-canape" className={({isActive}) => isActive ? "navbar-link active" : "navbar-link"}>
                Astuces Nettoyage
              </NavLink>
            </li>
          </ul>
        </div>
        


    <div className="navbar-desktop-buttons">
          <Link to="/contact" className="navbar-link contact-button">
            <i className="fas fa-envelope"></i> Devis Gratuit {/* Changé en Devis Gratuit */}
          </Link>
          <a href="tel:+15815806439" className="btn navbar-phone-button">
            <i className="fas fa-phone"></i> 581-580-6439
          </a>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
