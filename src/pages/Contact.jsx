import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Contact.css';
import contactHero from '../assets/contact-hero.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    reservationDate: '',
    reservationTime: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://respire-back.onrender.com/api/send-email', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success(response.data.message || 'Votre message a été envoyé avec succès !');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', address: '', message: '', reservationDate: '', reservationTime: '',
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="contact-page">
        <header className="contact-header" style={{ backgroundImage: `url(${contactHero})` }}>
          <h1>Contactez-nous</h1>
          <p>Une question ? Un devis ? Remplissez le formulaire ci-dessous ou contactez-nous directement.</p>
        </header>

        <div className="contact-body-wrapper">
          <div className="contact-container">
            {/* Colonne d'informations */}
            <div className="contact-info">
              <h3>Informations</h3>
              <p className="info-description">
                Nos équipes sont disponibles pour répondre à toutes vos questions et planifier une intervention.
              </p>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+15815806439">581-580-6439</a>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:Plussaisons@gmail.com">Plussaisons@gmail.com</a>
              </div>
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <span>Lundi - Samedi : 8h à 18h</span>
              </div>
            </div>

            {/* Colonne du formulaire */}
            <div className="contact-form-container">
              <h3>Envoyez-nous un message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Prénom" required />
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Nom" required />
                </div>
                <div className="form-row">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Votre Email" required />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone (facultatif)" />
                </div>
                <div className="form-row reservation-group">
                  {/* Champ Date */}
                  <div className="input-group">
                    <label htmlFor="reservationDate">Date de réservation</label>
                    <input
                      id="reservationDate"
                      type="date"
                      name="reservationDate"
                      value={formData.reservationDate}
                      onChange={handleChange}
                      min={getTodayString()} // Empêche de choisir une date passée
                    />
                  </div>
                  {/* Champ Heure */}
                  <div className="input-group">
                    <label htmlFor="reservationTime">Heure (8h-18h)</label>
                    <input
                      id="reservationTime"
                      type="time"
                      name="reservationTime"
                      value={formData.reservationTime}
                      onChange={handleChange}
                      min="08:00" // Heure de début
                      max="18:00" // Heure de fin
                    />
                  </div>
                </div>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Adresse d'intervention (facultatif)" className="full-width" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Décrivez votre besoin..." required></textarea>
                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} />
    </>
  );
}

export default Contact;
