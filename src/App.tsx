import React, { useState, useEffect } from 'react';
import './App.css';

const properties = [
  {
    id: 1,
    title: 'Modern Family House',
    location: 'Los Angeles, CA',
    price: '$1,200,000',
    beds: 4,
    baths: 3,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Cozy Country Cottage',
    location: 'Nashville, TN',
    price: '$850,000',
    beds: 3,
    baths: 2,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Luxury City Apartment',
    location: 'New York, NY',
    price: '$2,500,000',
    beds: 2,
    baths: 2,
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80',
  },
];

const realtors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Real Estate Agent',
    phone: '+1 (555) 123-4567',
    email: 'sarah.johnson@propertyvalues.com',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Luxury Property Specialist',
    phone: '+1 (555) 234-5678',
    email: 'michael.chen@propertyvalues.com',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'First-Time Buyer Expert',
    phone: '+1 (555) 345-6789',
    email: 'emily.rodriguez@propertyvalues.com',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
];

const sliderImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    title: 'Luxury Homes',
    subtitle: 'Discover Your Dream Property'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    title: 'Modern Living',
    subtitle: 'Contemporary Design Meets Comfort'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1200&q=80',
    title: 'City Apartments',
    subtitle: 'Urban Living at Its Finest'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    title: 'Premium Properties',
    subtitle: 'Exclusive Real Estate Solutions'
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    if (currentPage === 'home') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [currentPage]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderHomePage = () => (
    <>
      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slider-container">
          {sliderImages.map((image, index) => (
            <div
              key={image.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="slide-content">
                <h1>{image.title}</h1>
                <p>{image.subtitle}</p>
                <button className="cta-button">Explore Properties</button>
              </div>
            </div>
          ))}
          
          <button className="slider-btn prev" onClick={prevSlide}>❮</button>
          <button className="slider-btn next" onClick={nextSlide}>❯</button>
          
          <div className="slider-dots">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-description">Comprehensive real estate solutions tailored to your needs</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Buy Properties</h3>
              <p>Find your perfect home with our extensive property listings and expert guidance.</p>
              <ul>
                <li>Browse thousands of properties</li>
                <li>Get pre-approved for financing</li>
                <li>Schedule viewings with our agents</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Sell Properties</h3>
              <p>Get the best value for your property with our professional selling services.</p>
              <ul>
                <li>Free property valuation</li>
                <li>Professional photography</li>
                <li>Marketing and advertising</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏛️</div>
              <h3>Succession Planning</h3>
              <p>Plan for the future with our comprehensive succession planning services.</p>
              <ul>
                <li>Estate planning</li>
                <li>Property transfer strategies</li>
                <li>Tax optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-properties">
        <div className="container">
          <h2>Featured Properties</h2>
          <p className="section-description">Discover our handpicked selection of premium properties</p>
          <div className="property-list">
            {properties.map((property) => (
              <div className="property-card" key={property.id}>
                <img src={property.image} alt={property.title} className="property-image" />
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p>📍 {property.location}</p>
                  <div className="property-details">
                    <span>🛏️ {property.beds} Beds</span>
                    <span>🚿 {property.baths} Baths</span>
                  </div>
                  <div className="property-price">
                    💰 {property.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Realtors */}
      <section className="featured-realtors">
        <div className="container">
          <h2>Meet Our Expert Realtors</h2>
          <p className="section-description">Our experienced team is here to help you find your perfect home</p>
          <div className="realtors-grid">
            {realtors.map((realtor) => (
              <div className="realtor-card" key={realtor.id}>
                <img src={realtor.image} alt={realtor.name} className="realtor-image" />
                <div className="realtor-info">
                  <h3>{realtor.name}</h3>
                  <p className="realtor-title">{realtor.title}</p>
                  <p>📞 {realtor.phone}</p>
                  <p>✉️ {realtor.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="quick-contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Ready to Find Your Dream Home?</h2>
              <p>Get in touch with our team today and let us help you navigate the real estate market with confidence.</p>
              <div className="contact-highlights">
                <div className="highlight">
                  <span className="highlight-icon">📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">✉️</span>
                  <div>
                    <strong>Email Us</strong>
                    <p>info@propertyvalues.com</p>
                  </div>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">📍</span>
                  <div>
                    <strong>Visit Us</strong>
                    <p>123 Real Estate Ave, City, State</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us a Quick Message</h3>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="tel" placeholder="Your Phone" />
              <select>
                <option value="">Select Service</option>
                <option value="buy">Buy Property</option>
                <option value="sell">Sell Property</option>
                <option value="rent">Rent Property</option>
                <option value="succession">Succession Planning</option>
              </select>
              <textarea placeholder="Your Message" rows={3}></textarea>
              <button type="submit" className="cta-button">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderBuySellPage = () => (
    <div className="page-content">
      <h1>Buy & Sell Your Property</h1>
      <div className="services-grid">
        <div className="service-card">
          <h2>🏠 Buy a Home</h2>
          <p>Find your perfect home with our extensive property listings and expert guidance.</p>
          <ul>
            <li>Browse thousands of properties</li>
            <li>Get pre-approved for financing</li>
            <li>Schedule viewings with our agents</li>
            <li>Negotiate the best price</li>
          </ul>
          <button className="cta-button">Start Your Search</button>
        </div>
        <div className="service-card">
          <h2>💰 Sell Your Property</h2>
          <p>Get the best value for your property with our professional selling services.</p>
          <ul>
            <li>Free property valuation</li>
            <li>Professional photography</li>
            <li>Marketing and advertising</li>
            <li>Negotiation support</li>
          </ul>
          <button className="cta-button">Get Free Valuation</button>
        </div>
      </div>
    </div>
  );

  const renderRealtorsPage = () => (
    <div className="page-content">
      <h1>Our Realtors</h1>
      <p className="page-description">Meet our team of experienced real estate professionals dedicated to helping you find your perfect home.</p>
      <div className="realtors-grid">
        {realtors.map((realtor) => (
          <div className="realtor-card" key={realtor.id}>
            <img src={realtor.image} alt={realtor.name} className="realtor-image" />
            <div className="realtor-info">
              <h3>{realtor.name}</h3>
              <p className="realtor-title">{realtor.title}</p>
              <p>📞 {realtor.phone}</p>
              <p>✉️ {realtor.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSuccessionPage = () => (
    <div className="page-content">
      <h1>Succession Planning</h1>
      <p className="page-description">Plan for the future with our comprehensive succession planning services for real estate assets.</p>
      <div className="succession-content">
        <div className="info-section">
          <h2>🏛️ Estate Planning</h2>
          <p>Ensure your real estate assets are properly managed and transferred according to your wishes.</p>
          <ul>
            <li>Will and trust preparation</li>
            <li>Property transfer strategies</li>
            <li>Tax optimization</li>
            <li>Legal documentation</li>
          </ul>
        </div>
        <div className="info-section">
          <h2>📋 Business Succession</h2>
          <p>Plan the smooth transition of your real estate business to the next generation.</p>
          <ul>
            <li>Leadership development</li>
            <li>Knowledge transfer</li>
            <li>Client relationship management</li>
            <li>Operational continuity</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="page-content">
      <h1>Contact Us</h1>
      <p className="page-description">Get in touch with our team for any questions or assistance.</p>
      <div className="contact-container">
        <div className="contact-info">
          <h2>📞 Get In Touch</h2>
          <div className="contact-item">
            <strong>Phone:</strong> +1 (555) 123-4567
          </div>
          <div className="contact-item">
            <strong>Email:</strong> info@propertyvalues.com
          </div>
          <div className="contact-item">
            <strong>Address:</strong> 123 Real Estate Ave, City, State 12345
          </div>
          <div className="contact-item">
            <strong>Hours:</strong> Mon-Fri: 9AM-6PM, Sat: 10AM-4PM
          </div>
        </div>
        <form className="contact-form">
          <h2>📝 Send us a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" />
          <select>
            <option value="">Select Service</option>
            <option value="buy">Buy Property</option>
            <option value="sell">Sell Property</option>
            <option value="rent">Rent Property</option>
            <option value="succession">Succession Planning</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Your Message" rows={5} required></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'buy-sell':
        return renderBuySellPage();
      case 'realtors':
        return renderRealtorsPage();
      case 'succession':
        return renderSuccessionPage();
      case 'contact':
        return renderContactPage();
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="App">
      <nav className="main-nav">
        <div className="nav-brand">
          <span className="nav-icon">🏠</span>
          <span className="nav-title">Property Values</span>
        </div>
        <div className="nav-links">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${currentPage === 'buy-sell' ? 'active' : ''}`}
            onClick={() => setCurrentPage('buy-sell')}
          >
            Buy/Sell
          </button>
          <button 
            className={`nav-link ${currentPage === 'realtors' ? 'active' : ''}`}
            onClick={() => setCurrentPage('realtors')}
          >
            Our Realtors
          </button>
          <button 
            className={`nav-link ${currentPage === 'succession' ? 'active' : ''}`}
            onClick={() => setCurrentPage('succession')}
          >
            Succession
          </button>
          <button 
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => setCurrentPage('contact')}
          >
            Contact Us
          </button>
        </div>
      </nav>
      
      <main className="main-content">
        {renderPage()}
      </main>

      <footer className="main-footer">
        &copy; {new Date().getFullYear()} Property Values. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
