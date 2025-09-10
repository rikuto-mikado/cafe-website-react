import React from 'react';
import { Link } from 'react-router-dom';
import { FaCoffee, FaLeaf, FaHeart, FaClock, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './Home.css';
import cafeBackground from '../../assets/cafe-background.jpg';
import coffeeImage from '../../assets/coffee.jpg';
import sandwichImage from '../../assets/sandwich.jpg';
import matchaLatteImage from '../../assets/matcha-latte.jpg';
import menuData from '../../data/menuData.json';

const imageMap = {
  coffeeImage,
  sandwichImage,
  matchaLatteImage
};

const Home = () => {
  const { popularItems } = menuData;

  return (
    <div className="home">
      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-background"
        style={{
          backgroundImage: `url(${cafeBackground})`
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">Welcome to Cozy Cafe</h1>
              <p className="hero-subtitle">Where Every Cup Tells a Story</p>
              <p className="hero-description">
                Experience the perfect blend of rich coffee, warm atmosphere, 
                and exceptional service in our cozy corner of Tokyo.
              </p>

              <div className="hero-buttons">
                <Link to="/menu" className="btn btn-primary">
                  <FaCoffee className="btn-icon" />
                  View Our Menu
                </Link>

                <Link to="/contact" className="btn btn-secondary">
                  <FaMapMarkerAlt className="btn-icon" />
                  Visit Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Cozy Cafe?</h2>
            <p className="section-subtitle">Experience the difference in every sip and bite</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaCoffee className="feature-icon" />
              </div>
              <h3 className="feature-title">Premium Coffee</h3>
              <p className="feature-description">
                Freshly roasted beans from the finest coffee regions around the world, 
                carefully selected and expertly brewed to perfection.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaLeaf className="feature-icon" />
              </div>
              <h3 className="feature-title">Fresh Ingredients</h3>
              <p className="feature-description">
                All our pastries and food are made daily with organic, local ingredients, 
                ensuring the freshest taste in every bite.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaHeart className="feature-icon" />
              </div>
              <h3 className="feature-title">Cozy Atmosphere</h3>
              <p className="feature-description">
                The perfect place to relax, work, or catch up with friends 
                in our warm and inviting environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular menu section */}
      <section className="popular-menu-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Menu Items</h2>
            <p className="section-subtitle">Taste what makes us special</p>
          </div>

          <div className="menu-grid">
            {popularItems.map(item => (
              <div key={item.id} className="menu-card">
                <div className="menu-image">
                  <img src={imageMap[item.image]} alt={item.name} />
                  <div className="rating">
                    <FaStar className="star" />
                    {item.rating}
                  </div>
                </div>
                <div className="menu-content">
                  <h3 className="menu-name">{item.name}</h3>
                  <p className="menu-description">{item.description}</p>
                  <div className="menu-footer">
                    <span className="menu-price">{item.price}</span>
                    <button className="add-to-cart-btn">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-cta">
            <Link to="/menu" className="btn btn-outline">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Information section */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <h3 className="info-title">Opening Hours</h3>
              <div className="info-content">
                <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className="info-title">Location</h3>
              <div className="info-content">
                <p>123 Shibuya Street</p>
                <p>Tokyo, Japan 150-0002</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaCoffee />
              </div>
              <h3 className="info-title">Special Today</h3>
              <div className="info-content">
                <p>Buy 2 coffees, get 1 pastry free!</p>
                <p>Valid until 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready for the Perfect Coffee Experience?</h2>
            <p className="cta-description">
              Join us today and discover why Cozy Cafe is Tokyo's favorite coffee destination.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Visit Our Cafe
              </Link>
              <a href="tel:03-0000-0000" className="btn btn-secondary btn-large">
                Call to Reserve
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
export default Home;
export { coffeeImage, sandwichImage, matchaLatteImage };