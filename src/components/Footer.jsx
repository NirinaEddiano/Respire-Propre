// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Assurez-vous que le chemin vers votre logo est correct
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        {/* Partie 1: À propos */}
        <div className="footer-about">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="Respire Propre Logo" className="footer-logo" />
          </Link>
          <p className="footer-description">
            Respire Propre redonne vie à vos textiles d'ameublement grâce à un nettoyage biologique qui purifie les fibres en profondeur, pour un intérieur où il fait bon respirer.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Partie 2: Navigation Rapide */}
        <div className="footer-links">
          <h4>Navigation Rapide</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/#expert-section">Nos Services</Link></li> {/* Exemple de lien vers une ancre */}
            <li><Link to="/#pricing-section">Tarifs</Link></li> {/* Exemple de lien vers une ancre */}
            <li><Link to="/astuces-nettoyage-canape">Astuces Nettoyage</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Partie 3: Contact */}
        <div className="footer-contact">
          <h4>Contactez-nous</h4>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Interventions sur toute la France</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+33611085483">06 11 08 54 83</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:contact@respirepropre.fr">contact@respirepropre.fr</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Respire Propre. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;