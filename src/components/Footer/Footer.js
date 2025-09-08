import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FaCoffee,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaChevronUp,
    FaHome,
    FaUtensils,
    FaInfoCircle,
    FaPhoneAlt,
    FaHeart,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Scroll monitoring
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Retrieve the current day of the week
    const getCurrentDay = () => {
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return days[new Date().getDay()];
    };

    const currentDay = getCurrentDay();

    const openingHours = [
        { day: 'monday', label: 'Monday', time: '7:00 AM - 8:00 PM' },
        { day: 'tuesday', label: 'Tuesday', time: '7:00 AM - 8:00 PM' },
        { day: 'wednesday', label: 'Wednesday', time: '7:00 AM - 8:00 PM' },
        { day: 'thursday', label: 'Thursday', time: '7:00 AM - 8:00 PM' },
        { day: 'friday', label: 'Friday', time: '7:00 AM - 8:00 PM' },
        { day: 'saturday', label: 'Saturday', time: '8:00 AM - 9:00 PM' },
        { day: 'sunday', label: 'Sunday', time: '8:00 AM - 9:00 PM' }
    ];

    const quickLinks = [
        { name: 'Home', path: '/', icon: <FaHome /> },
        { name: 'Menu', path: '/menu', icon: <FaUtensils /> },
        { name: 'About', path: '/about', icon: <FaInfoCircle /> },
        { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> }
    ];

    const socialLinks = [
        { name: 'Facebook', url: 'https://facebook.com/cozycafetokyo', icon: <FaFacebook /> },
        { name: 'Twitter', url: 'https://twitter.com/cozycafe_tokyo', icon: <FaTwitter /> },
        { name: 'Instagram', url: 'https://instagram.com/cozycafe', icon: <FaInstagram /> },
        { name: 'LinkedIn', url: 'https://linkedin.com/company/cozycafe', icon: <FaLinkedin /> }
    ];

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <section className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Section */}
                        <div className="footer-brand">
                            <Link to="/" className="footer-logo">
                              <FaCoffee className="footer-logo-icon" />
                              <span className="footer-logo-text">Cozy Cafe</span>
                            </Link>

                            <p className="footer-description">
                                Where every cup tells a story. Experience the perfect blend of rich coffee, 
                                warm atmosphere, and exceptional service in our cozy corner of Tokyo.
                            </p>

                            <div className="footer-social">
                                {socialLinks.map((social, index) => (
                                    <a
                                      key={index}
                                      href={social.url}
                                      className="social-icon"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h4 className="footer-section-title">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <li key={index} className="footer-link">
                                        <Link to={link.path}>
                                          <span className="footer-link-icon">{link.icon}</span>
                                          {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-section">
                            <h4 className="footer-section-title">Contact Info</h4>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="contact-details">
                                    <div className="contact-label">Address</div>
                                    <div className="contact-value">
                                        123 Shibuya Street<br />
                                        Tokyo, Japan 150-0002
                                    </div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaPhone />
                                </div>
                                <div className="contact-details">
                                    <div className="contact-label">Phone</div>
                                    <div className="contact-value">
                                        <a href="tel:03-0000-0000">03-0000-0000</a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaEnvelope />
                                </div>
                                <div className="contact-details">
                                    <div className="contact-label">Email</div>
                                    <div className="contact-value">
                                        <a href="mailto:hello@cozycafe.com">hello@cozycafe.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div className="footer-section">
                            <h4 className="footer-section-title">Opening Hours</h4>
                            <ul className="hours-list">
                                {openingHours.map((hours, index) => (
                                    <li
                                      key={index}
                                      className={`hours-item ${currentDay === hours.day ? 'hours-today' : ''}`}
                                    >
                                        <span className="hours-day">{hours.label}</span>
                                        <span className="hours-time">{hours.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Buttom */}
            <section className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <div className="footer-copyright">
                            <p>
                                © 2025 Cozy Cafe. Made with <FaHeart style={{color: '#d4a574', margin: '0 0.3rem'}}/> in Tokyo.
                                All rights reserved.
                            </p>
                        </div>

                        <ul className="footer-links-inline">
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/cookies">Cookie Policy</a></li>
                            <li><a href="/sitemap">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <button
              className={`scroll-to-top ${showScrollTop ? '' : 'hidden'}`}
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
                <FaChevronUp />
            </button>
        </footer>
    );
};

export default Footer;

