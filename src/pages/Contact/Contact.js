import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaTwitter, FaFacebook, FaPaperPlane, FaUser, FaCommentDots } from 'react-icons/fa';
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission simulation
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Status reset in 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  return (
    <div className="contact">
      {/* Header section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact form*/}
            <div className="contact-form-section">
              <div className="form-header">
                <h2 className="form-title">Send us a Message</h2>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <FaUser className="label-icon" />
                      Full Name
                    </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your full name"
                        required
                      />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <FaEnvelope className="label-icon" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      <FaPhone className="label-icon" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      <FaCommentDots className="label-icon" />
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input form-select"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Table Reservation</option>
                      <option value="catering">Catering Services</option>
                      <option value="complaint">Complaint</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <FaCommentDots className="label-icon" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    rows="6"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                    <div className="spinner"></div>
                    Sending...
                    </>
                  ) : (
                    <>
                    <FaPaperPlane className="btn-icon" />
                    Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you!! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

            {/* Shop infomation */}
            <div className="contact-info-section">
              <div className="info-header">
                <h2 className="info-title">Visit Our Cafe</h2>
                <p className="info-subtitle">
                  Come and experience our cozy atmosphere in person.
                </p>
              </div>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-content">
                    <h3 className="info-card-title">Address</h3>
                    <p className="info-text">
                      123 Shibuya Street<br />
                      Tokyo, Japan 150-0002
                    </p>
                    <a href="https://maps.google.com/?q=123+Shibuya+Street+Tokyo+Japan" className="info-link">Get Directions</a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-content">
                    <h3 className="info-card-title">Phone</h3>
                    <p className="info-text">03-1234-5678</p>
                    <a href="tel:03-1234-5678" className="info-link">Call Now</a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-content">
                    <h3 className="info-card-title">Email</h3>
                    <p className="info-text">hello@cozycafe.com</p>
                    <a href="mailto:hello@cozycafe.com" className="info-link">Send Email</a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <div className="info-content">
                    <h3 className="info-card-title">Opening Hours</h3>
                    <div className="hours-list">
                      <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="social-section">
                <h3 className="social-title">Follow Us</h3>
                <div className="social-links">
                  <a href="https://instagram.com/cozycafe" className="social-link instagram">
                    <FaInstagram />
                    <span>@cozycafe</span>
                  </a>
                  <a href="https://twitter.com/cozycafe_tokyo" className="social-link twitter">
                    <FaTwitter />
                    <span>@cozycafe_tokyo</span>
                  </a>
                  <a href="https://facebook.com/cozycafetokyo" className="social-link facebook">
                    <FaFacebook />
                    <span>Cozy Cafe Tokyo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <FaMapMarkerAlt className="map-icon" />
            <h3>Interactive Map</h3>
            <p>Google Maps integration would go here</p>
            <button className="map-btn">View on Google Maps</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;