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

// Photo gallery
const PLACEHOLDER_IMAGES = {
  story: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  owner: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  barista1: 'https://images.unsplash.com/photo-1494790108755-2616b8c2c6c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  barista2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  gallery1: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  gallery2: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  gallery3: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  gallery4: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  gallery5: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  gallery6: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
};

const About = () => {
  const value = [
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "Every cup is crafted with love and dedication, ensuring the perfect coffee experience for our customers."
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description: "We source our beans ethically and use eco-friendly practices to protect our environment."
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Building connections and creating a welcoming space where everyone feels at home."
    },
    {
      icon: <FaAward />,
      title: "Quality",
      description: "We never compromise on quality, from our premium beans to our exceptional service."
    },
  ];

  const team = [
    {
      name: "Hiroshi Tanaka",
      role: "Owner & Head Barista",
      bio: "With over 15 years of experience in the coffee industry, Hiroshi founded Cozy Cafe to share his passion for exceptional coffee.",
      image: PLACEHOLDER_IMAGES.owner
    },
    {
      name: "Yuki Sato",
      role: "Master Barista",
      bio: "Yuki brings creativity and precision to every cup, specializing in latte art and specialty brewing methods.",
      image: PLACEHOLDER_IMAGES.barista1
    },
    {
      name: "Kenji Yamamoto",
      role: "Pastry Chef",
      bio: "Kenji creates our delicious pastries and desserts, using traditional techniques with modern flavors.",
      image: PLACEHOLDER_IMAGES.barista2
    }
  ];

  const testimonials = [
    {
      text: "Cozy Cafe has become my second home. The atmosphere is perfect for both work and relaxation, and the coffee is absolutely incredible!",
      author: "Sarah Johnson",
      title: "Regular Customer",
      rating: 5,
      avatar: "SJ"
    },
    {
      text: "The attention to detail in every cup is remarkable. You can taste the passion and quality in every sip. Highly recommended!",
      author: "Michael Chen",
      title: "Coffee Enthusiast",
      rating: 5,
      avatar: "MC"
    },
    {
      text: "Not only is the coffee exceptional, but the staff always makes me feel welcome. It's the perfect neighborhood cafe.",
      author: "Emma Wilson",
      title: "Local Resident",
      rating: 5,
      avatar: "EW"
    }
  ];

  const galleryItems = [
    { image: PLACEHOLDER_IMAGES.gallery1, caption: "Our Cozy Interior" },
    { image: PLACEHOLDER_IMAGES.gallery2, caption: "Fresh Pastries Daily" },
    { image: PLACEHOLDER_IMAGES.gallery3, caption: "Expert Barista Skills" },
    { image: PLACEHOLDER_IMAGES.gallery4, caption: "Premium Coffee Beans" },
    { image: PLACEHOLDER_IMAGES.gallery5, caption: "Perfect Latte Art" },
    { image: PLACEHOLDER_IMAGES.gallery6, caption: "Community Gathering" }
  ];

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
              <img src={PLACEHOLDER_IMAGES.story} alt="Cozy Cafe interior" />
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
                <div className="value-icon">{item.icon}</div>
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
                  <img src={member.image} alt={member.name} />
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
                <img src={item.image} alt={item.caption} />
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