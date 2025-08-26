// src/pages/NosServices.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NosServices.css';

// Importez les images que vous avez téléchargées
import serviceHero from '../assets/service-hero.jpg';
import serviceCanapeTissu from '../assets/service-canape-tissu.jpg';
import serviceCanapeCuir from '../assets/service-canape-cuir.jpg';
import serviceTapis from '../assets/service-tapis.jpg';
import serviceMatelas from '../assets/service-matelas.jpg';

function NosServices() {
  return (
    <main className="services-page">
      <header className="services-header" style={{ backgroundImage: `url(${serviceHero})` }}>
        <div className="header-overlay">
          <h1>Nos Services de Nettoyage Expert</h1>
          <p>Découvrez comment nous redonnons vie, pureté et fraîcheur à chaque fibre de votre intérieur.</p>
        </div>
      </header>

      <div className="services-list">
        {/* --- Service 1: Canapés Tissu --- */}
        <section className="service-item">
          <div className="service-image-container">
            <img src={serviceCanapeTissu} alt="Nettoyage de canapé en tissu et microfibre" />
          </div>
          <div className="service-text-container">
            <h3>Nettoyage de Canapés en Tissu & Microfibre</h3>
            <p>
              Votre canapé en tissu est le cœur de votre salon, mais il accumule poussières, allergènes et taches. Notre mission est de lui offrir un soin revitalisant qui va au-delà du visible.
            </p>
            <ul className="service-benefits">
              <li><i className="fas fa-check"></i> <strong>Traitement Anti-Acariens </strong> Nous utilisons un procédé biologique qui neutralise les allergènes pour un environnement plus sain.</li>
              <li><i className="fas fa-check"></i> <strong>Élimination des Taches </strong> Nos solutions écologiques ciblent les taches (café, vin, graisse) sans agresser les fibres.</li>
              <li><i className="fas fa-check"></i> <strong>Ravivement des Couleurs </strong> Le nettoyage en profondeur restaure l'éclat d'origine de votre tissu.</li>
              <li><i className="fas fa-check"></i> <strong>Neutralisation des Odeurs </strong> Nous éliminons les odeurs incrustées pour une sensation de fraîcheur durable.</li>
            </ul>
          </div>
        </section>

        {/* --- Service 2: Canapés Cuir --- */}
        <section className="service-item">
          <div className="service-image-container">
            <img src={serviceCanapeCuir} alt="Soin et nettoyage de canapé en cuir" />
          </div>
          <div className="service-text-container">
            <h3>Soin et Nettoyage de Canapés en Cuir</h3>
            <p>
              Le cuir est une matière noble qui a besoin de respirer pour conserver sa souplesse et sa beauté. Nous lui apportons un traitement d'artisan, bien plus qu'un simple nettoyage.
            </p>
            <ul className="service-benefits">
              <li><i className="fas fa-check"></i> <strong>Nettoyage Délicat </strong> Notre formule exclusive, appliquée à la main, élimine les salissures tout en respectant la nature du cuir.</li>
              <li><i className="fas fa-check"></i> <strong>Nourrissage et Hydratation </strong> Nous appliquons un baume protecteur qui nourrit le cuir, prévient les craquelures et lui redonne son éclat.</li>
              <li><i className="fas fa-check"></i> <strong>Protection Longue Durée </strong> Le traitement laisse une fine barrière protectrice contre les agressions futures.</li>
              <li><i className="fas fa-check"></i> <strong>Adapté à tous les cuirs </strong> Pleine fleur, pigmenté, aniline... notre savoir-faire couvre tous les types de finitions.</li>
            </ul>
          </div>
        </section>

        {/* --- Service 3: Tapis --- */}
        <section className="service-item">
          <div className="service-image-container">
            <img src={serviceTapis} alt="Nettoyage de tapis en profondeur" />
          </div>
          <div className="service-text-container">
            <h3>Nettoyage de Tapis</h3>
            <p>
              Véritables nids à poussière, les tapis retiennent les polluants de l'air intérieur. Notre nettoyage par injection-extraction leur redonne propreté, couleurs et douceur.
            </p>
            <ul className="service-benefits">
              <li><i className="fas fa-check"></i> <strong>Assainissement des Fibres </strong> Nous extrayons en profondeur la saleté, les acariens et les bactéries.</li>
              <li><i className="fas fa-check"></i> <strong>Restauration des Couleurs </strong> Le procédé ravive les couleurs d'origine, souvent ternies par la saleté incrustée.</li>
              <li><i className="fas fa-check"></i> <strong>Respect des Matériaux </strong> Notre méthode est adaptée aux tapis modernes comme aux tapis d'Orient (laine, soie...).</li>
              <li><i className="fas fa-check"></i> <strong>Séchage Rapide </strong> Nous utilisons un matériel performant qui minimise le temps de séchage.</li>
            </ul>
          </div>
        </section>
        
        {/* --- Service 4: Matelas --- */}
        <section className="service-item">
          <div className="service-image-container">
            <img src={serviceMatelas} alt="Nettoyage et désinfection de matelas" />
          </div>
          <div className="service-text-container">
            <h3>Nettoyage & Désinfection de Matelas</h3>
            <p>
              Nous passons un tiers de notre vie au lit. Un matelas propre est essentiel pour un sommeil sain et réparateur. Notre service se concentre sur l'hygiène et l'élimination des allergènes.
            </p>
            <ul className="service-benefits">
              <li><i className="fas fa-check"></i> <strong>Éradication des Acariens </strong> Notre traitement haute performance est spécialement conçu pour éliminer les acariens, responsables de nombreuses allergies.</li>
              <li><i className="fas fa-check"></i> <strong>Élimination des Taches et Auréoles </strong> Nous traitons les taches (transpiration, etc.) pour un matelas visiblement plus propre.</li>
              <li><i className="fas fa-check"></i> <strong>Action Bactéricide et Virucide </strong> Le nettoyage est complété par une désinfection pour une hygiène irréprochable.</li>
              <li><i className="fas fa-check"></i> <strong>Sommeil Amélioré </strong> Dormir sur un matelas sain et purifié contribue à un meilleur bien-être général.</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="cta-section">
        <h2>Prêt à redonner un nouveau souffle à vos meubles ?</h2>
        <p>Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.</p>
        <Link to="/contact" className="btn contact-btn">Demander mon devis</Link>
      </section>
    </main>
  );
}

export default NosServices;