import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCoffee, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo section */}
                <div className="logo-section">
                    <Link
                      to="/"
                      className="logo"
                      onClick={closeMobileMenu}>
                      <FaCoffee className="logo-icon" />
                      <span className="logo-text">Cozy Cafe</span>
                    </Link>
                </div>

                {/* Navigation section */}
                <nav className={`navigation ${isMobileMenuOpen ? "nav-open" : ""}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link
                            to="/"
                            className={`nav-link ${isActive("/") ? "active" : ""}`}
                            onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                            to="/menu"
                            className={`nav-link ${isActive("/menu") ? "active" : ""}`}
                            onClick={closeMobileMenu}>
                                Menu
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                            to="/about"
                            className={`nav-link ${isActive("/about") ? "active" : ""}`}
                            onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                            to="/contact"
                            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                            onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Contact information */}
                <div className="contact-info">
                    <FaPhone className="contact-icon" />
                    <span className="contact-text">03-0000-0000</span>
                </div>

                {/* Mobile menu button */}
                <button
                className="mobile-menu-btn"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-overlay" onClick={closeMobileMenu}></div>
            )}
        </header>
    );
};

export default Header;