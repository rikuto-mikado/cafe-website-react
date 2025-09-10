import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCoffee, 
  FaLeaf, 
  FaBreadSlice, 
  FaUtensils,
  FaGlassCheers,
  FaStar,
  FaFire,
  FaSnowflake,
  FaShoppingCart,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Menu.css';
import { coffeeImage, matchaLatteImage, sandwichImage } from '../Home/Home';
import blackCoffeeImage from '../../assets/black-coffee.jpg';
import cafeMochaImage from '../../assets/cafe-mocha.jpg';
import chocolateCakeImage from '../../assets/chocolate-cake.jpg';
import croissantImage from '../../assets/croissant.jpg';
import icedCoffeeImage from '../../assets/iced_coffee.jpg';
import shortCakeImage from '../../assets/short-cake.jpg';
import strawberryImage from '../../assets/strawberry_cake.jpg';
import wheatBreadImage from '../../assets/wheat_bread.jpg';
import menuData from '../../data/menuData.json';

const imageMap = {
  coffeeImage,
  matchaLatteImage,
  sandwichImage,
  blackCoffeeImage,
  cafeMochaImage,
  chocolateCakeImage,
  croissantImage,
  icedCoffeeImage,
  shortCakeImage,
  strawberryImage,
  wheatBreadImage
};

const iconMap = {
  FaSnowflake: <FaSnowflake />,
  FaLeaf: <FaLeaf />
};

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const { menuItems, popularItems, seasonalItems } = menuData;

  const categories = [
    { id: 'all', name: 'All Items', icon: <FaUtensils /> },
    { id: 'coffee', name: 'Coffee', icon: <FaCoffee /> },
    { id: 'tea', name: 'Tea', icon: <FaLeaf /> },
    { id: 'pastries', name: 'Pastries', icon: <FaBreadSlice /> },
    { id: 'sandwiches', name: 'Sandwiches', icon: <FaUtensils /> },
    { id: 'drinks', name: 'Cold Drinks', icon: <FaGlassCheers /> }
  ];

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const renderTag = (tag) => {
    const tagClasses = {
      popular: 'tag-popular',
      new: 'tag-new',
      seasonal: 'tag-seasonal',
      vegan: 'tag-vegan',
      decaf: 'tag-decaf'
    };

    return (
      <span key={tag} className={`menu-tag ${tagClasses[tag] || ''}`}>
        {tag.charAt(0).toUpperCase() + tag.slice(1)}
      </span>
    );
  };

  const getCategoryDisplayName = (category) => {
    const categoryNames = {
      coffee: 'Coffee Selection',
      tea: 'Tea Collection',
      pastries: 'Fresh Pastries',
      sandwiches: 'Sandwiches & Light Meals',
      drinks: 'Cold Beverages'
    };
    return categoryNames[category] || category;
  };

  return (
    <div className="menu">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="container">
          <div className="menu-hero-content">
            <h1 className="menu-title">Our Menu</h1>
            <p className="menu-subtitle">Crafted with Love, Served with Passion</p>
            <p className="menu-intro">
              Discover our carefully curated selection of premium coffees, artisanal teas, 
              fresh pastries, and delicious meals, all made with the finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="menu-content">
        <div className="container">
          {activeFilter === 'all' ? (
            // Show all categories when 'all' is selected
            Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="category-section">
                <h2 className="category-title">{getCategoryDisplayName(category)}</h2>
                <div className="menu-items-grid">
                  {items.map(item => (
                    <div key={item.id} className="menu-item">
                      <div className="menu-item-image">
                        <img src={imageMap[item.image]} alt={item.name} />
                      </div>
                      <div className="menu-item-content">
                        <div className="menu-item-header">
                          <div>
                            <h3 className="menu-item-name">{item.name}</h3>
                          </div>
                          <div className="menu-item-price">{item.price}</div>
                        </div>
                        <p className="menu-item-description">{item.description}</p>
                        <div className="menu-item-footer">
                          <div className="menu-item-tags">
                            {item.tags.map(tag => renderTag(tag))}
                          </div>
                          <button className="order-btn">
                            <FaShoppingCart />
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Show filtered category
            filteredItems.length > 0 ? (
              <div className="category-section">
                <h2 className="category-title">
                  {getCategoryDisplayName(activeFilter)}
                </h2>
                <div className="menu-items-grid">
                  {filteredItems.map(item => (
                    <div key={item.id} className="menu-item">
                      <div className="menu-item-image">
                        <img src={imageMap[item.image]} alt={item.name} />
                      </div>
                      <div className="menu-item-content">
                        <div className="menu-item-header">
                          <div>
                            <h3 className="menu-item-name">{item.name}</h3>
                          </div>
                          <div className="menu-item-price">{item.price}</div>
                        </div>
                        <p className="menu-item-description">{item.description}</p>
                        <div className="menu-item-footer">
                          <div className="menu-item-tags">
                            {item.tags.map(tag => renderTag(tag))}
                          </div>
                          <button className="order-btn">
                            <FaShoppingCart />
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">
                  <FaCoffee />
                </div>
                <h3 className="empty-title">No items found</h3>
                <p className="empty-description">
                  We couldn't find any items in this category. Please try a different filter.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="popular-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Customer Favorites</h2>
            <p className="section-subtitle">
              The most loved items by our community
            </p>
          </div>
          <div className="popular-items-grid">
            {popularItems.map(item => (
              <div key={item.id} className="popular-item">
                <div className="popular-item-image">
                  <img src={imageMap[item.image]} alt={item.name} />
                  <div className="popular-badge">
                    <FaFire />
                    Popular
                  </div>
                </div>
                <div className="popular-item-content">
                  <div className="popular-item-header">
                    <div>
                      <h3 className="popular-item-name">{item.name}</h3>
                      <p style={{ color: '#d4a574', fontSize: '0.9rem', margin: '0.5rem 0' }}>
                        {item.orders}
                      </p>
                    </div>
                    <div className="popular-item-price">{item.price}</div>
                  </div>
                  <p className="popular-item-description">{item.description}</p>
                  <div className="popular-item-footer">
                    <div className="popular-rating">
                      <FaStar className="star" />
                      {item.rating}
                    </div>
                    <button className="order-btn">
                      <FaShoppingCart />
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Items Section */}
      <section className="seasonal-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Winter Specials</h2>
            <p className="section-subtitle">
              Limited time seasonal offerings to warm your heart
            </p>
          </div>
          <div className="seasonal-items">
            {seasonalItems.map((item, index) => (
              <div key={index} className="seasonal-item">
                <div className="seasonal-icon">{iconMap[item.icon]}</div>
                <h3 className="seasonal-item-name">{item.name}</h3>
                <p className="seasonal-item-description">{item.description}</p>
                <div className="seasonal-item-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="menu-cta-section">
        <div className="container">
          <div className="menu-cta-content">
            <h2 className="menu-cta-title">Ready to Order?</h2>
            <p className="menu-cta-description">
              Visit us today or call ahead to place your order. 
              We can't wait to serve you the perfect cup!
            </p>
            <div className="menu-cta-buttons">
              <Link to="/contact" className="btn btn-white">
                <FaMapMarkerAlt className="btn-icon" />
                Visit Our Cafe
              </Link>
              <a href="tel:03-0000-0000" className="btn btn-outline-white">
                <FaPhone className="btn-icon" />
                Call to Order
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;