// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.jpg'; // Assurez-vous que le chemin vers votre logo est correct
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        {/* Partie 1: À propos */}
        <div className="footer-about">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="Saison +  Logo" className="footer-logo" />
          </Link>
          <p className="footer-description">
            Saison + redonne vie à vos textiles d'ameublement grâce à un nettoyage biologique qui purifie les fibres en profondeur, pour un intérieur où il fait bon respirer.
          </p>
        </div>

        {/* Partie 2: Navigation Rapide */}
        <div className="footer-links">
          <h4>Navigation Rapide</h4>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/nos-services">Nos Services</Link></li> {/* Exemple de lien vers une ancre */}
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
              <span>Interventions sur toute Québec</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+15815806439">581-580-6439</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:Plussaisons@gmail.com">Plussaisons@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174830.2285117281!2d-71.3913709320875!3d46.85233316443429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2sQu%C3%A9bec%2C%20QC!5e0!3m2!1sfr!2sca!4v1663273188123!5m2!1sfr!2sca" 
          width="100%" 
          height="350" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte de la ville de Québec">
        </iframe>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Saison + . Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
