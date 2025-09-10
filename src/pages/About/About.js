import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHeart, 
  FaLeaf, 
  FaCoffee, 
  FaUsers, 
  FaAward, 
  FaStar,
  FaCamera,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './About.css';
import storyImage from '../../assets/cafe-board.jpg';
import ownerImage from '../../assets/human1.jpg';
import barista1Image from '../../assets/human2.jpg';
import barista2Image from '../../assets/human3.jpg';
import gallery1Image from '../../assets/gallery1.jpg';
import gallery2Image from '../../assets/gallery2.jpg';
import gallery3Image from '../../assets/gallery3.jpg';
import gallery4Image from '../../assets/gallery4.jpg';
import gallery5Image from '../../assets/gallery5.jpg';
import gallery6Image from '../../assets/gallery6.jpg';
import aboutData from '../../data/aboutData.json';

const imageMap = {
  ownerImage,
  barista1Image,
  barista2Image,
  gallery1Image,
  gallery2Image,
  gallery3Image,
  gallery4Image,
  gallery5Image,
  gallery6Image
};

const iconMap = {
  FaHeart: <FaHeart />,
  FaLeaf: <FaLeaf />,
  FaUsers: <FaUsers />,
  FaAward: <FaAward />
};

const About = () => {
  const { value, team, testimonials, galleryItems } = aboutData;

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">Our Story</h1>
            <p className="about-subtitle">Brewing Dreams Since 2015</p>
            <p className="about-intro">
              At Cozy Cafe, we believe that great coffee brings people together. 
              Our journey began with a simple dream: to create a warm, welcoming space 
              where exceptional coffee meets genuine hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2 className="story-title">How It All Began</h2>
              <p className="story-text">
                Our founder, Hiroshi Tanaka, spent years traveling the world, 
                discovering different coffee cultures and learning from master roasters. 
                His passion for <span className="story-highlight">exceptional coffee</span> and 
                warm hospitality inspired him to open Cozy Cafe in the heart of Tokyo.
              </p>
              <p className="story-text">
                What started as a small neighborhood cafe has grown into a beloved 
                community hub, where friends meet, ideas flourish, and every cup 
                tells a story. We've maintained our commitment to 
                <span className="story-highlight"> quality, sustainability, and community</span> 
                throughout our journey.
              </p>
              <p className="story-text">
                Today, we continue to serve our community with the same passion and 
                dedication that started it all, one perfect cup at a time.
              </p>
            </div>
            <div className="story-image">
              <img src={storyImage} alt="Cozy Cafe interior" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div className="values-grid">
            {value.map((item, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{iconMap[item.icon]}</div>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The passionate people behind your perfect cup
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={imageMap[member.image]} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Cups Served Daily</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">8</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">25+</span>
              <span className="stat-label">Coffee Varieties</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Real stories from our amazing community
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-title">{testimonial.title}</div>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="star" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cafe Gallery</h2>
            <p className="section-subtitle">
              A glimpse into our cozy world
            </p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className="gallery-item">
                <img src={imageMap[item.image]} alt={item.caption} />
                <div className="gallery-overlay">
                  <div className="gallery-caption">
                    <FaCamera style={{ marginRight: '0.5rem' }} />
                    {item.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">Ready to Join Our Story?</h2>
            <p className="about-cta-description">
              Come experience the warmth, quality, and community that makes 
              Cozy Cafe special. We can't wait to serve you your perfect cup.
            </p>
            <div className="about-cta-buttons">
              <Link to="/contact" className="btn btn-white">
                <FaMapMarkerAlt className="btn-icon" />
                Visit Our Cafe
              </Link>
              <Link to="/menu" className="btn btn-outline-white">
              <FaCoffee className="btn-icon" />
                Explore Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;