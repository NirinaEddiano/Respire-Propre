import { useState,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import '../css/EntrepriseNettoyageCanape.css';
import heroImage from '../assets/hero-image.jpg';
import canapeImage from '../assets/canape-cleaning.jpg';
import tapisImage from '../assets/tapis-cleaning.jpg';
import fauteuilImage from '../assets/fauteuil-cleaning.jpg';
import matelasImage from '../assets/matelas-cleaning.jpg';
import imagePasCher from '../assets/image-canape-economique.jpg';
import imageTissu from '../assets/image-canape-tissu.jpg';
import imageCuir from '../assets/image-canape-cuir.jpg';
import heroBgDesktop from '../assets/quebec-desktop.jpg'; // Assurez-vous d'avoir ces fichiers
import heroBgTablet from '../assets/quebec-desktop.jpg';
import heroBgMobile from '../assets/quebec-desktop.jpg';

function EntrepriseNettoyageCanape() {
  const [activeTab, setActiveTab] = useState('pas-cher');
  const [currentIndex, setCurrentIndex] = useState(0);
  const avatarColors = ['#1e90ff', '#213547', '#f4c150', '#50c878', '#ff7f50', '#6a5acd'];
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(0); // Pour le décalage de la section her
  
  const getInitials = (name) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return `${names[0][0]}`.toUpperCase();
  };

  const featureData = {
    'pas-cher': {
      title: 'Nettoyage de canapé pas cher',
      description: 'Plus qu\'une simple tache, c\'est la propreté en profondeur qui compte. Avec l\'expertise Respire Propre, nous allons au-delà du visible : notre traitement biologique cible et éradique les allergènes, acariens et bactéries nichés dans les fibres de votre canapé. Nous vous garantissons un nettoyage qui purifie votre intérieur, pour que vous puissiez vous détendre en toute sérénité, sachant votre canapé impeccablement propre et sain.',
      image: imagePasCher
    },
    'tissu': {
      title: 'Nettoyage de canapé en tissu',
      description: 'Votre canapé en tissu mérite de respirer. Qu\'il soit en Alcantara, microfibre ou autre textile, nous savons que les impuretés peuvent fragiliser et ternir ses fibres. Notre mission est de le revitaliser en douceur. Nos procédés biologiques agissent comme un soin profond qui purifie les fibres sans les agresser, restaurant leur fraîcheur et leur souplesse d\'origine.',
      image: imageTissu
    },
    'cuir': {
      title: 'Nettoyage de canapé en Cuir',
      description: 'Le cuir est un matériau noble qui nécessite une attention particulière. Chez Saison + , nous comprenons les besoins spécifiques du cuir. Nos techniques de nettoyage biologiques sont conçues pour éliminer les saletés et les taches tout en préservant la souplesse et l\'éclat naturel du cuir. Nous utilisons des produits doux qui nourrissent le cuir, évitant ainsi le dessèchement et les craquelures, pour que votre canapé en cuir conserve toute sa beauté et sa durabilité.',
      image: imageCuir
    }
  };

  const testimonials = [
    {
      name: 'Marie Dubois',
      location: 'Québec',
      rating: 5,
      text: "Service impeccable ! Mon vieux canapé en tissu a retrouvé sa jeunesse. L'équipe était ponctuelle, professionnelle et très efficace. Je recommande sans hésiter."
    },
    {
      name: 'Julien Lefebvre',
      location: 'Québec',
      rating: 5,
      text: "J'étais sceptique quant au nettoyage de mon canapé d'angle, mais le résultat est bluffant. Plus aucune tache et une odeur de frais très agréable. Excellent rapport qualité-prix."
    },
    {
      name: 'Chloé Garcia',
      location: 'Québec',
      rating: 5,
      text: "Un grand merci à Respire Propre pour leur intervention rapide. Mon fauteuil en cuir était terne et avait quelques taches. Il est maintenant comme neuf. Un vrai travail d'expert."
    },
    {
      name: 'Lucas Martin',
      location: 'Québec',
      rating: 4,
      text: "Très satisfait du nettoyage de mon matelas. Le technicien a bien expliqué le processus. Seul petit bémol, un léger retard, mais la qualité du service a tout rattrapé."
    },
    {
      name: 'Emma Rousseau',
      location: 'Québec',
      rating: 5,
      text: "Le tapis de mon salon avait subi les assauts de mes enfants... Saison +  l'a transformé ! Les couleurs sont ravivées et il est tout doux. Service client au top."
    },
    {
      name: 'Adrien Bernard',
      location: 'Québec',
      rating: 5,
      text: "Professionnalisme et efficacité sont les maîtres mots. Mon canapé en U est immense et ils l'ont nettoyé en un temps record. Je referai appel à eux, c'est certain."
    }
  ];

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const faqData = [
    {
      question: "Dans quelles zones intervenez-vous ?",
      answer: "Nous intervenons à Québec. N'hésitez pas à nous contacter pour vérifier si votre localité est desservie."
    },
    {
      question: "Quels types de services de nettoyage proposez-vous ?",
      answer: "Nous sommes experts dans le nettoyage en profondeur des tissus d'ameublement. Nos services principaux incluent le nettoyage de canapés (2 places, 3 places, d'angle, en U), fauteuils, matelas et tapis. Nous traitons divers matériaux comme le tissu, le cuir, l'Alcantara et la microfibre."
    },
    {
      question: "Quels sont vos horaires d'intervention ?",
      answer: "Nos équipes interviennent généralement du lundi au vendredi de 8h à 18h, et le samedi de 9h à 18h. Nous sommes flexibles et pouvons convenir d'un créneau sur mesure en fonction de vos disponibilités."
    },
    {
      question: "Proposez-vous des services écologiques ?",
      answer: "Oui, absolument. La santé de nos clients et le respect de l'environnement sont nos priorités. Nous utilisons exclusivement des produits de nettoyage biologiques et écologiques, qui sont tout aussi efficaces que les produits chimiques, tout en étant parfaitement sûrs pour les enfants, les animaux de compagnie et les personnes allergiques."
    },
    {
      question: "Est-ce que toutes les taches disparaissent vraiment ?",
      answer: "Malheureusement, nous ne pouvons pas garantir l’élimination de toutes les taches. Certaines marques résultent de décolorations qui ne peuvent être corrigées, même avec des techniques avancées de blanchiment. Le succès du nettoyage dépend du type et de l’âge des taches."
    },
    {
      question: "Faites-vous le nettoyage de canapé alcantara et en microfibre ?",
      answer: "Oui, nous avons une grande expérience dans le nettoyage de l’Alcantara et de la microfibre. Nos interventions redonnent à vos meubles un aspect presque neuf. En effet, les taches et les traces d’eau sont éliminées efficacement, laissant vos tissus impeccables."
    }
  ];

  const handleFaqClick = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

   const getHeroBackground = () => {
    if (window.innerWidth <= 768) {
      return heroBgMobile;
    }
    if (window.innerWidth <= 992) {
      return heroBgTablet;
    }
    return heroBgDesktop;
  };

  const [currentHeroBg, setCurrentHeroBg] = useState(getHeroBackground());

  useEffect(() => {
    const handleResize = () => {
      setCurrentHeroBg(getHeroBackground());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="entreprise-page">
       <header className="hero-wrapper" style={{ backgroundImage: `url(${currentHeroBg})` }}>
      <div className="Title">
        <h1>Entreprise de nettoyage canapé à Québec</h1>
        </div>
      <section className="hero-section">
        <div className="hero-image">
          <img src={heroImage} alt="Nettoyage canapé" />
        </div>
        <div className="hero-content">
          <p>
          Pour les particuliers et les professionnels, Saison +  redonne vie à vos textiles d'ameublement. Confiez-nous votre canapé, fauteuil ou sofa pour un nettoyage biologique qui purifie les fibres en profondeur. En tant qu'experts du nettoyage à domicile en Québec, nous assainissons vos meubles pour un intérieur où il fait bon respirer.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn contact-btn"><i className="fas fa-envelope"></i>Demander un devis</Link>
            <a href="tel:+15815806439" className="btn phone-btn">
              <i className="fas fa-phone"></i>  581-580-6439
            </a>
          </div>
          <div className="rating-section">
            <div className="google-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="rating-info">
            <p className="rating-text">Service le mieux noté</p>
            <p className="trustindex">
              certifié par: <a href="https://www.trustindex.io/?a=sys&c=wp-top-rated-badge&url=/the-trustindex-verified-badge" target="_blank" rel="noopener noreferrer">Trustindex</a>
              <i className="fas fa-info-circle"></i>
            </p>
            </div>
          </div>
          
        </div>
      </section>
         </header>

       <section className="pricing-section">
        <h2>Des tarifs clairs pour chaque besoin</h2>
        <p className="pricing-subtitle">
          Choisissez la prestation qui vous convient. Nos prix sont transparents et adaptés à la taille de vos meubles.
        </p>
        <div className="pricing-grid">

          <div className="pricing-card">
            <div className="icon">
              <i className="fas fa-couch"></i>
            </div>
            <h3>Canapé 2 places</h3>
            <div className="price">
              <span>80</span>$
            </div>
            <Link to="/contact" className="btn btn-secondary">
              Demander un devis
            </Link>
          </div>

          <div className="pricing-card">
            <div className="icon">
              <i className="fas fa-couch"></i>
            </div>
            <h3>Canapé 3 places</h3>
            <div className="price">
              <span>100</span>$
            </div>
            <Link to="/contact" className="btn btn-secondary">
              Demander un devis
            </Link>
          </div>

          <div className="pricing-card highlighted">
            <div className="badge">Le plus populaire</div>
            <div className="icon">
              <i className="fas fa-couch"></i>
            </div>
            <h3>Canapé d'angle</h3>
            <div className="price">
              <span>125</span>$
            </div>
            <Link to="/contact" className="btn btn-primary">
              Prendre rendez-vous
            </Link>
          </div>

          <div className="pricing-card">
            <div className="icon">
              <i className="fas fa-couch"></i>
            </div>
            <h3>Canapé en U</h3>
            <div className="price">
              <span>125</span>$
            </div>
            <Link to="/contact" className="btn btn-secondary">
              Demander un devis
            </Link>
          </div>

          <div className="pricing-card">
            <div className="icon">
              <i className="fas fa-chair"></i>
            </div>
            <h3>Fauteuil</h3>
            <div className="price">
              <span>60</span>$
            </div>
            <Link to="/contact" className="btn btn-secondary">
              Demander un devis
            </Link>
          </div>

          <div className="pricing-card">
            <div className="icon">
              <i className="fas fa-spray-can-sparkles"></i>
            </div>
            <h3>Nettoyage de tapis</h3>
            <div className="price">
              <span>60</span>$
            </div>
            <Link to="/contact" className="btn btn-secondary">
              Demander un devis
            </Link>
          </div>

          <div className="pricing-card">
            <div className="icon">
              <i className="fas fa-bed"></i>
            </div>
            <h3>Nettoyage de matelas</h3>
            <div className="price">
              <span>125</span>$
            </div>
            <Link to="/contact" className="btn btn-secondary">
              Demander un devis
            </Link>
          </div>

        </div>
      </section>

      <section className="expert-section">
        <h2>Expert en nettoyage de tapis, canapé et matelas</h2>
        <p className="expert-description">
        Depuis toujours, Saison +  redonne un nouveau souffle à vos meubles rembourrés. Nos photos avant et après témoignent de notre savoir-faire unique. Nous intervenons directement chez vous pour un nettoyage en profondeur avec des procédés exclusivement biologiques, garantissant un environnement sain, sans aucun produit chimique.
        </p>
        <div className="expert-containers">
          <div className="expert-container">
            <img src={canapeImage} alt="Nettoyage de canapés" className="expert-image" />
            <div className="expert-content">
              <h3>Nettoyage de Canapés</h3>
              <p>
                Nous nettoyons votre canapé ou fauteuil rapidement et en toute sécurité sur place. Nous utilisons uniquement des produits de nettoyage biologiques pour préserver la qualité de vos meubles.
              </p>
            </div>
          </div>
          <div className="expert-container">
            <img src={tapisImage} alt="Nettoyage de tapis" className="expert-image" />
            <div className="expert-content">
              <h3>Nettoyage de Tapis</h3>
              <p>
                Nous nettoyons votre tapis rapidement et en toute sécurité sur place. Nos produits biologiques garantissent un résultat impeccable tout en préservant les fibres.
              </p>
            </div>
          </div>
          <div className="expert-container">
            <img src={fauteuilImage} alt="Nettoyage de fauteuils" className="expert-image" />
            <div className="expert-content">
              <h3>Nettoyage de Fauteuils</h3>
              <p>
                Vos fauteuils retrouvent leur éclat grâce à notre nettoyage biologique sur place, sans produits chimiques, pour un confort durable.
              </p>
            </div>
          </div>
          <div className="expert-container">
            <img src={matelasImage} alt="Nettoyage de matelas" className="expert-image" />
            <div className="expert-content">
              <h3>Nettoyage de Matelas</h3>
              <p>
                Nous assurons un nettoyage approfondi de vos matelas à domicile avec des produits biologiques, pour un sommeil sain et confortable.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="professional-service-section">
        <h2>Un service professionnel de nettoyage</h2>
        <div className="professional-service-content">
          <div className="video-container">
            <video src="/assets/cleaning-video.mp4" controls muted loop className="service-video"></video>
          </div>
          <div className="service-description">
            <p>
            Avec Saison + , offrez à vos meubles une propreté qui se respire. Notre service professionnel, rapide et écologique purifie vos tissus en profondeur. Faites l'expérience d'une expertise unique pour des résultats éclatants et une sensation de fraîcheur durable.
            </p>
            <ul>
              <li>Nettoyage Professionnel des Tissus d’Ameublement</li>
              <li>Des Prix Abordables Sans Frais Cachés</li>
              <li>Interventions Rapides</li>
              <li>Produits de Nettoyage Biologiques et Sûrs</li>
              <li>Désinfection & Imprégnation</li>
              <li>Élimination des Poils d’Animaux</li>
              <li>Machines de Nettoyage à la Pointe de la Technologie</li>
              <li>Conseils Gratuits et Détaillés</li>
            </ul>
          </div>
        </div>
      </section>

     
       
      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-tabs">
            <button
              className={`feature-tab ${activeTab === 'pas-cher' ? 'active' : ''}`}
              onClick={() => setActiveTab('pas-cher')}
            >
              <i className="fas fa-euro-sign"></i>
              <span>Nettoyage Abordable</span>
            </button>
            <button
              className={`feature-tab ${activeTab === 'tissu' ? 'active' : ''}`}
              onClick={() => setActiveTab('tissu')}
            >
              <i className="fas fa-spray-can-sparkles"></i>
              <span>Spécialiste Tissus</span>
            </button>
            <button
              className={`feature-tab ${activeTab === 'cuir' ? 'active' : ''}`}
              onClick={() => setActiveTab('cuir')}
            >
              <i className="fas fa-gem"></i>
              <span>Expertise Cuir</span>
            </button>
          </div>

          <div className="feature-content">
            <div className="feature-image">
              <img src={featureData[activeTab].image} alt={featureData[activeTab].title} />
            </div>
            <div className="feature-text">
              <h3>{featureData[activeTab].title}</h3>
              <p>{featureData[activeTab].description}</p>
            </div>
          </div>
        </div>

        <div className="feature-cta">
          <p>Besoin d’un nettoyage de canapé ? Faites appel à nos professionnels dès maintenant !</p>
          <Link to="/contact" className="btn contact-btn">
            <i className="fas fa-envelope"></i> Nous contacter
          </Link>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-header">
          <h2>Ce que nos clients disent de nous</h2>
          <p>La satisfaction de nos clients est notre meilleure publicité.</p>
        </div>
        <div className="testimonial-carousel-container">
          <div className="testimonial-carousel-wrapper">
            <div className="testimonial-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                  <i className="fas fa-quote-left quote-icon"></i>
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div 
                      className="author-avatar" 
                      style={{ backgroundColor: avatarColors[index % avatarColors.length] }}
                    >
                      {getInitials(testimonial.name)}
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn prev-btn" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next-btn" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </section>
      
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-intro">
            <h3>Foire Aux Questions</h3>
            <p>
              Vous avez des interrogations ? Nous avons les réponses.
              Trouvez ici les informations essentielles sur nos services.
            </p>
          </div>

          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <div className="faq-item" key={index}>
                <button className="faq-question" onClick={() => handleFaqClick(index)}>
                  <span>{item.question}</span>
                  <i className={`fas ${openFaqIndex === index ? 'fa-minus' : 'fa-plus'} faq-icon`}></i>
                </button>
                <div className={`faq-answer ${openFaqIndex === index ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default EntrepriseNettoyageCanape;
