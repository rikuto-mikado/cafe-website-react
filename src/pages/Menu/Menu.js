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
  FaSeedling,
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

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: <FaUtensils /> },
    { id: 'coffee', name: 'Coffee', icon: <FaCoffee /> },
    { id: 'tea', name: 'Tea', icon: <FaLeaf /> },
    { id: 'pastries', name: 'Pastries', icon: <FaBreadSlice /> },
    { id: 'sandwiches', name: 'Sandwiches', icon: <FaUtensils /> },
    { id: 'drinks', name: 'Cold Drinks', icon: <FaGlassCheers /> }
  ];

  const menuItems = [
    // Coffee
    {
      id: 1,
      category: 'coffee',
      name: 'Signature Blend',
      description: 'Our house blend coffee with hints of chocolate and vanilla. Perfect for any time of day.',
      price: '¥480',
      image: coffeeImage,
      tags: ['popular'],
      rating: 4.8
    },
    {
      id: 2,
      category: 'coffee',
      name: 'Single Origin Ethiopia',
      description: 'Light roast coffee with bright, fruity notes and floral aroma from Ethiopian highlands.',
      price: '¥680',
      image: blackCoffeeImage,
      tags: ['new'],
      rating: 4.9
    },
    {
      id: 3,
      category: 'coffee',
      name: 'Espresso Romano',
      description: 'Traditional Italian espresso with a twist of lemon peel for a unique citrus finish.',
      price: '¥420',
      image: cafeMochaImage,
      tags: [],
      rating: 4.6
    },
    {
      id: 4,
      category: 'coffee',
      name: 'Decaf Colombia',
      description: 'Full-bodied decaffeinated coffee from Colombian mountains, smooth and rich.',
      price: '¥520',
      image: coffeeImage,
      tags: ['decaf'],
      rating: 4.4
    },
    
    // Tea
    {
      id: 5,
      category: 'tea',
      name: 'Premium Matcha Latte',
      description: 'Ceremonial grade matcha powder with steamed milk and a touch of sweetness.',
      price: '¥620',
      image: matchaLatteImage,
      tags: ['popular', 'vegan'],
      rating: 4.9
    },
    {
      id: 6,
      category: 'tea',
      name: 'Earl Grey Supreme',
      description: 'Classic Earl Grey tea blend with bergamot oil and cornflower petals.',
      price: '¥380',
      image: matchaLatteImage, // Placeholder
      tags: [],
      rating: 4.5
    },
    {
      id: 7,
      category: 'tea',
      name: 'Chamomile Honey',
      description: 'Relaxing chamomile tea with pure wildflower honey and dried apple pieces.',
      price: '¥420',
      image: matchaLatteImage, // Placeholder
      tags: ['vegan'],
      rating: 4.7
    },

    // Pastries
    {
      id: 8,
      category: 'pastries',
      name: 'Butter Croissant',
      description: 'Flaky, buttery croissant baked fresh daily with French technique and premium butter.',
      price: '¥320',
      image: croissantImage,
      tags: ['popular'],
      rating: 4.8
    },
    {
      id: 9,
      category: 'pastries',
      name: 'Chocolate Danish',
      description: 'Rich chocolate-filled Danish pastry with a crispy exterior and smooth chocolate center.',
      price: '¥420',
      image: chocolateCakeImage,
      tags: [],
      rating: 4.6
    },
    {
      id: 10,
      category: 'pastries',
      name: 'Seasonal Fruit Tart',
      description: 'Fresh seasonal fruits on vanilla custard base with a crispy pastry shell.',
      price: '¥580',
      image: shortCakeImage,
      tags: ['seasonal', 'new'],
      rating: 4.9
    },

    // Sandwiches
    {
      id: 11,
      category: 'sandwiches',
      name: 'Club Sandwich',
      description: 'Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo on toasted bread.',
      price: '¥780',
      image: sandwichImage,
      tags: ['popular'],
      rating: 4.7
    },
    {
      id: 12,
      category: 'sandwiches',
      name: 'Veggie Panini',
      description: 'Grilled vegetables with mozzarella and pesto sauce pressed in artisan bread.',
      price: '¥680',
      image: wheatBreadImage,
      tags: ['vegan'],
      rating: 4.5
    },

    // Cold Drinks
    {
      id: 13,
      category: 'drinks',
      name: 'Iced Vanilla Latte',
      description: 'Cold espresso with milk and vanilla syrup served over ice with whipped cream.',
      price: '¥520',
      image: icedCoffeeImage,
      tags: ['popular'],
      rating: 4.8
    },
    {
      id: 14,
      category: 'drinks',
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice from premium oranges, no additives or preservatives.',
      price: '¥380',
      image: strawberryImage, // Placeholder
      tags: ['vegan'],
      rating: 4.6
    }
  ];

  const popularItems = [
    {
      id: 1,
      name: 'Signature Blend Coffee',
      description: 'Our house blend coffee with hints of chocolate and vanilla, loved by customers for over 8 years.',
      price: '¥480',
      image: coffeeImage,
      rating: 4.8,
      orders: '500+ orders this month'
    },
    {
      id: 2,
      name: 'Premium Matcha Latte',
      description: 'Ceremonial grade matcha powder with perfectly steamed milk and artistic foam art.',
      price: '¥620',
      image: matchaLatteImage,
      rating: 4.9,
      orders: '300+ orders this month'
    },
    {
      id: 3,
      name: 'Butter Croissant',
      description: 'Flaky, buttery croissant baked fresh every morning using traditional French techniques.',
      price: '¥320',
      image: croissantImage,
      rating: 4.8,
      orders: '200+ orders this month'
    }
  ];

  const seasonalItems = [
    {
      name: 'Winter Spice Latte',
      description: 'Warm spiced coffee with cinnamon, nutmeg, and a hint of orange zest',
      price: '¥580',
      icon: <FaSnowflake />
    },
    {
      name: 'Pumpkin Spice Scone',
      description: 'Seasonal scone with pumpkin puree and warm autumn spices',
      price: '¥450',
      icon: <FaLeaf />
    },
    {
      name: 'Hot Chocolate Deluxe',
      description: 'Rich Belgian chocolate with marshmallows and whipped cream',
      price: '¥520',
      icon: <FaSnowflake />
    }
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
                        <img src={item.image} alt={item.name} />
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
                        <img src={item.image} alt={item.name} />
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
                  <img src={item.image} alt={item.name} />
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
                <div className="seasonal-icon">{item.icon}</div>
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