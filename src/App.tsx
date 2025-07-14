import React, { useState, useEffect } from 'react';
import './App.css';

const properties = [
  {
    id: 1,
    title: 'Spacious Family Home with Pool',
    location: 'Beverly Hills, Los Angeles, CA',
    price: '$2,850,000',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    yearBuilt: 2018,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    description: 'Stunning modern home with open floor plan, gourmet kitchen, and resort-style backyard with pool and spa.',
    features: ['Pool & Spa', 'Gourmet Kitchen', 'Home Theater', 'Wine Cellar']
  },
  {
    id: 2,
    title: 'Charming Victorian Cottage',
    location: 'Franklin, Nashville, TN',
    price: '$1,250,000',
    beds: 4,
    baths: 3,
    sqft: '2,800',
    yearBuilt: 1895,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Beautifully restored Victorian home with original details, modern amenities, and a large garden.',
    features: ['Original Hardwood', 'Chef\'s Kitchen', 'Garden', 'Historical Charm']
  },
  {
    id: 3,
    title: 'Luxury Penthouse with City Views',
    location: 'Upper East Side, New York, NY',
    price: '$4,200,000',
    beds: 3,
    baths: 3.5,
    sqft: '3,100',
    yearBuilt: 2020,
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80',
    description: 'Exclusive penthouse with panoramic city views, private terrace, and luxury finishes throughout.',
    features: ['City Views', 'Private Terrace', 'Concierge', 'Gym Access']
  },
  {
    id: 4,
    title: 'Modern Farmhouse Estate',
    location: 'Austin, Texas',
    price: '$3,500,000',
    beds: 6,
    baths: 5,
    sqft: '5,800',
    yearBuilt: 2021,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Custom-built modern farmhouse on 5 acres with stunning architecture and premium amenities.',
    features: ['5 Acres', 'Custom Kitchen', 'Home Office', 'Guest House']
  },
  {
    id: 5,
    title: 'Waterfront Condo with Marina Access',
    location: 'Miami Beach, FL',
    price: '$1,800,000',
    beds: 2,
    baths: 2,
    sqft: '1,850',
    yearBuilt: 2019,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    description: 'Luxury waterfront condo with marina access, private balcony, and resort-style amenities.',
    features: ['Waterfront', 'Marina Access', 'Pool', 'Fitness Center']
  },
  {
    id: 6,
    title: 'Mountain Retreat with Views',
    location: 'Aspen, Colorado',
    price: '$5,500,000',
    beds: 4,
    baths: 4,
    sqft: '4,500',
    yearBuilt: 2017,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    description: 'Spectacular mountain home with panoramic views, ski-in/ski-out access, and luxury finishes.',
    features: ['Mountain Views', 'Ski Access', 'Hot Tub', 'Fireplace']
  }
];

const realtors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Real Estate Agent',
    phone: '+1 (555) 123-4567',
    email: 'sarah.johnson@propertyvalues.com',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80',
    experience: '15+ years',
    specialties: ['Luxury Homes', 'First-time Buyers', 'Investment Properties'],
    bio: 'Sarah has helped over 500 families find their dream homes. She specializes in luxury properties and first-time buyer guidance.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Luxury Property Specialist',
    phone: '+1 (555) 234-5678',
    email: 'michael.chen@propertyvalues.com',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    experience: '12+ years',
    specialties: ['Luxury Estates', 'International Buyers', 'New Construction'],
    bio: 'Michael is our go-to expert for luxury properties and international clients. He has closed deals worth over $100M.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'First-Time Buyer Expert',
    phone: '+1 (555) 345-6789',
    email: 'emily.rodriguez@propertyvalues.com',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    experience: '8+ years',
    specialties: ['First-time Buyers', 'Condos', 'Townhouses'],
    bio: 'Emily loves helping first-time buyers navigate the exciting journey of homeownership with patience and expertise.'
  },
  {
    id: 4,
    name: 'David Thompson',
    title: 'Investment Property Specialist',
    phone: '+1 (555) 456-7890',
    email: 'david.thompson@propertyvalues.com',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    experience: '20+ years',
    specialties: ['Investment Properties', 'Multi-family', 'Commercial'],
    bio: 'David has been helping investors build wealth through real estate for over two decades.'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Jennifer & Mark Wilson',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    text: 'Sarah made our first home buying experience so smooth! She understood exactly what we were looking for and found us the perfect family home. We couldn\'t be happier!',
    rating: 5,
    property: 'Beverly Hills Family Home'
  },
  {
    id: 2,
    name: 'Alexandra Martinez',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
    text: 'Michael helped me find my dream penthouse in record time. His knowledge of the luxury market is unmatched, and he negotiated an amazing deal for me.',
    rating: 5,
    property: 'Upper East Side Penthouse'
  },
  {
    id: 3,
    name: 'Robert & Lisa Chang',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    text: 'Emily was incredible throughout our entire buying process. She took the time to explain everything and made sure we felt confident with our decision.',
    rating: 5,
    property: 'Modern Farmhouse Estate'
  }
];

const sliderImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    title: 'Find Your Dream Home',
    subtitle: 'Discover exceptional properties in the most desirable locations'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    title: 'Luxury Living Awaits',
    subtitle: 'Experience the finest in modern architecture and design'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1200&q=80',
    title: 'Urban Sophistication',
    subtitle: 'City living at its most elegant and convenient'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    title: 'Premium Properties',
    subtitle: 'Exclusive real estate solutions for discerning clients'
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Buy form state
  const [buyForm, setBuyForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    budget: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    timeline: '',
    additionalInfo: ''
  });

  // Sell form state
  const [sellForm, setSellForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    city: '',
    state: '',
    zipCode: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    yearBuilt: '',
    estimatedValue: '',
    timeline: '',
    additionalInfo: ''
  });

  const [showBuyForm, setShowBuyForm] = useState(false);
  const [showSellForm, setShowSellForm] = useState(false);

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

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setContactForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  // Buy form handlers
  const handleBuyFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBuyForm({
      ...buyForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBuyFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/submit-buy-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(buyForm),
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Buy form submitted successfully! We\'ll contact you within 24 hours.');
        setBuyForm({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          budget: '',
          propertyType: '',
          bedrooms: '',
          bathrooms: '',
          timeline: '',
          additionalInfo: ''
        });
        setShowBuyForm(false);
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting buy form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  // Sell form handlers
  const handleSellFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSellForm({
      ...sellForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSellFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/submit-sell-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sellForm),
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Sell form submitted successfully! We\'ll contact you within 24 hours.');
        setSellForm({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          propertyAddress: '',
          city: '',
          state: '',
          zipCode: '',
          propertyType: '',
          bedrooms: '',
          bathrooms: '',
          squareFootage: '',
          yearBuilt: '',
          estimatedValue: '',
          timeline: '',
          additionalInfo: ''
        });
        setShowSellForm(false);
      } else {
        alert('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting sell form:', error);
      alert('Error submitting form. Please try again.');
    }
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
          <p className="section-description">Comprehensive real estate solutions tailored to your unique needs and lifestyle</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Buy Properties</h3>
              <p>Find your perfect home with our extensive property listings and personalized guidance from experienced agents.</p>
              <ul>
                <li>Browse thousands of curated properties</li>
                <li>Get pre-approved for financing</li>
                <li>Schedule private viewings with our agents</li>
                <li>Expert negotiation and closing support</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Sell Properties</h3>
              <p>Get the maximum value for your property with our comprehensive selling services and market expertise.</p>
              <ul>
                <li>Free professional property valuation</li>
                <li>High-quality photography and virtual tours</li>
                <li>Strategic marketing and advertising</li>
                <li>Skilled negotiation to maximize your return</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏛️</div>
              <h3>Succession Planning</h3>
              <p>Secure your family's future with our comprehensive succession planning services for real estate assets.</p>
              <ul>
                <li>Estate planning and trust preparation</li>
                <li>Property transfer strategies</li>
                <li>Tax optimization and legal guidance</li>
                <li>Multi-generational wealth preservation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-properties">
        <div className="container">
          <h2>Featured Properties</h2>
          <p className="section-description">Discover our handpicked selection of exceptional properties in prime locations</p>
          <div className="property-list">
            {properties.slice(0, 3).map((property) => (
              <div className="property-card" key={property.id}>
                <img src={property.image} alt={property.title} className="property-image" />
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p className="property-location">📍 {property.location}</p>
                  <div className="property-details">
                    <span>🛏️ {property.beds} Beds</span>
                    <span>🚿 {property.baths} Baths</span>
                    <span>📐 {property.sqft} sq ft</span>
                  </div>
                  <p className="property-description">{property.description}</p>
                  <div className="property-features">
                    {property.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="property-price">
                    💰 {property.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-container">
            <button className="view-all-button">View All Properties</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <p className="section-description">Real stories from real people who found their dream homes with us</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-header">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p className="testimonial-location">{testimonial.location}</p>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-property">Property: {testimonial.property}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Realtors */}
      <section className="featured-realtors">
        <div className="container">
          <h2>Meet Our Expert Realtors</h2>
          <p className="section-description">Our experienced team is here to guide you through every step of your real estate journey</p>
          <div className="realtors-grid">
            {realtors.map((realtor) => (
              <div className="realtor-card" key={realtor.id}>
                <img src={realtor.image} alt={realtor.name} className="realtor-image" />
                <div className="realtor-info">
                  <h3>{realtor.name}</h3>
                  <p className="realtor-title">{realtor.title}</p>
                  <p className="realtor-experience">Experience: {realtor.experience}</p>
                  <div className="realtor-specialties">
                    {realtor.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                  <p className="realtor-bio">{realtor.bio}</p>
                  <div className="realtor-contact">
                    <p>📞 {realtor.phone}</p>
                    <p>✉️ {realtor.email}</p>
                  </div>
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
              <p>Get in touch with our team today and let us help you navigate the real estate market with confidence and expertise.</p>
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
                    <p>123 Real Estate Ave, Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🕒</span>
                  <div>
                    <strong>Office Hours</strong>
                    <p>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <h3>Send us a Quick Message</h3>
              <div className="form-row">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First Name *" 
                  value={contactForm.firstName}
                  onChange={handleContactFormChange}
                  required
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last Name *" 
                  value={contactForm.lastName}
                  onChange={handleContactFormChange}
                  required
                />
              </div>
              <div className="form-row">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address *" 
                  value={contactForm.email}
                  onChange={handleContactFormChange}
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={contactForm.phone}
                  onChange={handleContactFormChange}
                />
              </div>
              <select 
                name="service"
                value={contactForm.service}
                onChange={handleContactFormChange}
              >
                <option value="">Select Service *</option>
                <option value="buy">Buy Property</option>
                <option value="sell">Sell Property</option>
                <option value="rent">Rent Property</option>
                <option value="succession">Succession Planning</option>
                <option value="consultation">Free Consultation</option>
              </select>
              <textarea 
                name="message"
                placeholder="Tell us about your real estate needs, timeline, and any specific questions you have. We'll get back to you within 24 hours..." 
                rows={4}
                value={contactForm.message}
                onChange={handleContactFormChange}
              ></textarea>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );

  const renderBuySellPage = () => (
    <div className="page-content">
      <h1>Buy & Sell Your Property</h1>
      <p className="page-description">Whether you're buying your first home or selling your current property, our expert team is here to guide you through every step of the process.</p>
      
      {!showBuyForm && !showSellForm && (
        <div className="services-grid">
          <div className="service-card">
            <h2>🏠 Buy a Home</h2>
            <p>Find your perfect home with our extensive property listings and expert guidance from experienced agents who understand your needs.</p>
            <ul>
              <li>Browse thousands of carefully curated properties</li>
              <li>Get pre-approved for financing with our partners</li>
              <li>Schedule private viewings with our dedicated agents</li>
              <li>Expert negotiation to get you the best possible price</li>
              <li>Comprehensive closing support and guidance</li>
            </ul>
            <button className="cta-button" onClick={() => setShowBuyForm(true)}>Fill Buy Form</button>
          </div>
          <div className="service-card">
            <h2>💰 Sell Your Property</h2>
            <p>Get the maximum value for your property with our professional selling services and market expertise that delivers results.</p>
            <ul>
              <li>Free professional property valuation and market analysis</li>
              <li>High-quality photography and virtual tour creation</li>
              <li>Strategic marketing and advertising campaigns</li>
              <li>Skilled negotiation to maximize your return on investment</li>
              <li>Complete transaction management and support</li>
            </ul>
            <button className="cta-button" onClick={() => setShowSellForm(true)}>Fill Sell Form</button>
          </div>
        </div>
      )}

      {/* Buy Form */}
      {showBuyForm && (
        <div className="form-container">
          <div className="form-header">
            <h2>🏠 Buy Property Form</h2>
            <p>Please fill out the form below and we'll help you find your perfect home.</p>
            <button className="back-button" onClick={() => setShowBuyForm(false)}>← Back to Services</button>
          </div>
          
          <form className="buy-sell-form" onSubmit={handleBuyFormSubmit}>
            <div className="form-section">
              <h3>📋 Personal Information</h3>
              <div className="form-row">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First Name *" 
                  value={buyForm.firstName}
                  onChange={handleBuyFormChange}
                  required
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last Name *" 
                  value={buyForm.lastName}
                  onChange={handleBuyFormChange}
                  required
                />
              </div>
              <div className="form-row">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address *" 
                  value={buyForm.email}
                  onChange={handleBuyFormChange}
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number *" 
                  value={buyForm.phone}
                  onChange={handleBuyFormChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>📍 Current Address</h3>
              <input 
                type="text" 
                name="address"
                placeholder="Street Address *" 
                value={buyForm.address}
                onChange={handleBuyFormChange}
                required
              />
              <div className="form-row">
                <input 
                  type="text" 
                  name="city"
                  placeholder="City *" 
                  value={buyForm.city}
                  onChange={handleBuyFormChange}
                  required
                />
                <input 
                  type="text" 
                  name="state"
                  placeholder="State *" 
                  value={buyForm.state}
                  onChange={handleBuyFormChange}
                  required
                />
                <input 
                  type="text" 
                  name="zipCode"
                  placeholder="ZIP Code *" 
                  value={buyForm.zipCode}
                  onChange={handleBuyFormChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>🏠 Property Requirements</h3>
              <div className="form-row">
                <select 
                  name="budget"
                  value={buyForm.budget}
                  onChange={handleBuyFormChange}
                  required
                >
                  <option value="">Select Budget Range *</option>
                  <option value="Under $300,000">Under $300,000</option>
                  <option value="$300,000 - $500,000">$300,000 - $500,000</option>
                  <option value="$500,000 - $750,000">$500,000 - $750,000</option>
                  <option value="$750,000 - $1,000,000">$750,000 - $1,000,000</option>
                  <option value="$1,000,000 - $2,000,000">$1,000,000 - $2,000,000</option>
                  <option value="Over $2,000,000">Over $2,000,000</option>
                </select>
                <select 
                  name="propertyType"
                  value={buyForm.propertyType}
                  onChange={handleBuyFormChange}
                  required
                >
                  <option value="">Select Property Type *</option>
                  <option value="Single Family Home">Single Family Home</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Condo">Condo</option>
                  <option value="Multi-family">Multi-family</option>
                  <option value="Luxury Home">Luxury Home</option>
                  <option value="Investment Property">Investment Property</option>
                </select>
              </div>
              <div className="form-row">
                <select 
                  name="bedrooms"
                  value={buyForm.bedrooms}
                  onChange={handleBuyFormChange}
                  required
                >
                  <option value="">Number of Bedrooms *</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
                <select 
                  name="bathrooms"
                  value={buyForm.bathrooms}
                  onChange={handleBuyFormChange}
                  required
                >
                  <option value="">Number of Bathrooms *</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
                <select 
                  name="timeline"
                  value={buyForm.timeline}
                  onChange={handleBuyFormChange}
                  required
                >
                  <option value="">Timeline to Buy *</option>
                  <option value="Immediately">Immediately</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="Over 1 year">Over 1 year</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3>📝 Additional Information</h3>
              <textarea 
                name="additionalInfo"
                placeholder="Tell us about your specific needs, preferences, or any other requirements for your new home..." 
                rows={4}
                value={buyForm.additionalInfo}
                onChange={handleBuyFormChange}
              ></textarea>
            </div>

            <button type="submit" className="cta-button">Submit Buy Form</button>
          </form>
        </div>
      )}

      {/* Sell Form */}
      {showSellForm && (
        <div className="form-container">
          <div className="form-header">
            <h2>💰 Sell Property Form</h2>
            <p>Please fill out the form below and we'll help you get the best value for your property.</p>
            <button className="back-button" onClick={() => setShowSellForm(false)}>← Back to Services</button>
          </div>
          
          <form className="buy-sell-form" onSubmit={handleSellFormSubmit}>
            <div className="form-section">
              <h3>📋 Personal Information</h3>
              <div className="form-row">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First Name *" 
                  value={sellForm.firstName}
                  onChange={handleSellFormChange}
                  required
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last Name *" 
                  value={sellForm.lastName}
                  onChange={handleSellFormChange}
                  required
                />
              </div>
              <div className="form-row">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address *" 
                  value={sellForm.email}
                  onChange={handleSellFormChange}
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number *" 
                  value={sellForm.phone}
                  onChange={handleSellFormChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>🏠 Property Information</h3>
              <input 
                type="text" 
                name="propertyAddress"
                placeholder="Property Address *" 
                value={sellForm.propertyAddress}
                onChange={handleSellFormChange}
                required
              />
              <div className="form-row">
                <input 
                  type="text" 
                  name="city"
                  placeholder="City *" 
                  value={sellForm.city}
                  onChange={handleSellFormChange}
                  required
                />
                <input 
                  type="text" 
                  name="state"
                  placeholder="State *" 
                  value={sellForm.state}
                  onChange={handleSellFormChange}
                  required
                />
                <input 
                  type="text" 
                  name="zipCode"
                  placeholder="ZIP Code *" 
                  value={sellForm.zipCode}
                  onChange={handleSellFormChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>📐 Property Details</h3>
              <div className="form-row">
                <select 
                  name="propertyType"
                  value={sellForm.propertyType}
                  onChange={handleSellFormChange}
                  required
                >
                  <option value="">Select Property Type *</option>
                  <option value="Single Family Home">Single Family Home</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Condo">Condo</option>
                  <option value="Multi-family">Multi-family</option>
                  <option value="Luxury Home">Luxury Home</option>
                  <option value="Investment Property">Investment Property</option>
                </select>
                <input 
                  type="text" 
                  name="squareFootage"
                  placeholder="Square Footage *" 
                  value={sellForm.squareFootage}
                  onChange={handleSellFormChange}
                  required
                />
              </div>
              <div className="form-row">
                <select 
                  name="bedrooms"
                  value={sellForm.bedrooms}
                  onChange={handleSellFormChange}
                  required
                >
                  <option value="">Number of Bedrooms *</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
                <select 
                  name="bathrooms"
                  value={sellForm.bathrooms}
                  onChange={handleSellFormChange}
                  required
                >
                  <option value="">Number of Bathrooms *</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
                <input 
                  type="text" 
                  name="yearBuilt"
                  placeholder="Year Built *" 
                  value={sellForm.yearBuilt}
                  onChange={handleSellFormChange}
                  required
                />
              </div>
              <div className="form-row">
                <input 
                  type="text" 
                  name="estimatedValue"
                  placeholder="Estimated Property Value *" 
                  value={sellForm.estimatedValue}
                  onChange={handleSellFormChange}
                  required
                />
                <select 
                  name="timeline"
                  value={sellForm.timeline}
                  onChange={handleSellFormChange}
                  required
                >
                  <option value="">Timeline to Sell *</option>
                  <option value="Immediately">Immediately</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="Over 1 year">Over 1 year</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3>📝 Additional Information</h3>
              <textarea 
                name="additionalInfo"
                placeholder="Tell us about your property, any recent renovations, special features, or any other relevant information..." 
                rows={4}
                value={sellForm.additionalInfo}
                onChange={handleSellFormChange}
              ></textarea>
            </div>

            <button type="submit" className="cta-button">Submit Sell Form</button>
          </form>
        </div>
      )}
    </div>
  );

  const renderRealtorsPage = () => (
    <div className="page-content">
      <h1>Our Realtors</h1>
      <p className="page-description">Meet our team of experienced real estate professionals who are passionate about helping you find your perfect home and achieve your real estate goals.</p>
      <div className="realtors-grid">
        {realtors.map((realtor) => (
          <div className="realtor-card" key={realtor.id}>
            <img src={realtor.image} alt={realtor.name} className="realtor-image" />
            <div className="realtor-info">
              <h3>{realtor.name}</h3>
              <p className="realtor-title">{realtor.title}</p>
              <p className="realtor-experience">Experience: {realtor.experience}</p>
              <div className="realtor-specialties">
                {realtor.specialties.map((specialty, index) => (
                  <span key={index} className="specialty-tag">{specialty}</span>
                ))}
              </div>
              <p className="realtor-bio">{realtor.bio}</p>
              <div className="realtor-contact">
                <p>📞 {realtor.phone}</p>
                <p>✉️ {realtor.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSuccessionPage = () => (
    <div className="page-content">
      <h1>Succession Planning</h1>
      <p className="page-description">Plan for the future with our comprehensive succession planning services designed to protect and preserve your real estate assets for generations to come.</p>
      <div className="succession-content">
        <div className="info-section">
          <h2>🏛️ Estate Planning</h2>
          <p>Ensure your real estate assets are properly managed and transferred according to your wishes with our expert estate planning services.</p>
          <ul>
            <li>Will and trust preparation with legal experts</li>
            <li>Property transfer strategies and documentation</li>
            <li>Tax optimization and minimization strategies</li>
            <li>Comprehensive legal documentation and filing</li>
            <li>Family wealth preservation planning</li>
          </ul>
        </div>
        <div className="info-section">
          <h2>📋 Business Succession</h2>
          <p>Plan the smooth transition of your real estate business to the next generation with our specialized business succession services.</p>
          <ul>
            <li>Leadership development and training programs</li>
            <li>Knowledge transfer and documentation</li>
            <li>Client relationship management strategies</li>
            <li>Operational continuity planning</li>
            <li>Succession timeline and milestone tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="page-content">
      <h1>Contact Us</h1>
      <p className="page-description">Get in touch with our team for any questions, assistance, or to schedule a consultation. We're here to help you achieve your real estate goals.</p>
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
            <strong>Address:</strong> 123 Real Estate Ave, Beverly Hills, CA 90210
          </div>
          <div className="contact-item">
            <strong>Hours:</strong> Mon-Fri: 9AM-6PM, Sat: 10AM-4PM
          </div>
          <div className="contact-item">
            <strong>Emergency:</strong> +1 (555) 999-8888 (24/7)
          </div>
        </div>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <h2>📝 Send us a Message</h2>
          <div className="form-row">
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name *" 
              value={contactForm.firstName}
              onChange={handleContactFormChange}
              required
            />
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name *" 
              value={contactForm.lastName}
              onChange={handleContactFormChange}
              required
            />
          </div>
          <div className="form-row">
            <input 
              type="email" 
              name="email"
              placeholder="Email Address *" 
              value={contactForm.email}
              onChange={handleContactFormChange}
              required
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              value={contactForm.phone}
              onChange={handleContactFormChange}
            />
          </div>
          <select 
            name="service"
            value={contactForm.service}
            onChange={handleContactFormChange}
          >
            <option value="">Select Service *</option>
            <option value="buy">Buy Property</option>
            <option value="sell">Sell Property</option>
            <option value="rent">Rent Property</option>
            <option value="succession">Succession Planning</option>
            <option value="consultation">Free Consultation</option>
            <option value="valuation">Property Valuation</option>
            <option value="other">Other</option>
          </select>
          <textarea 
            name="message"
            placeholder="Please tell us about your real estate needs, timeline, and any specific questions you have. We'll get back to you within 24 hours..." 
            rows={5}
            value={contactForm.message}
            onChange={handleContactFormChange}
            required
          ></textarea>
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
        <div className="footer-content">
          <div className="footer-section">
            <h3>Property Values</h3>
            <p>Your trusted partner in real estate for over 25 years.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
              <li><button onClick={() => setCurrentPage('buy-sell')}>Buy/Sell</button></li>
              <li><button onClick={() => setCurrentPage('realtors')}>Our Realtors</button></li>
              <li><button onClick={() => setCurrentPage('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ info@propertyvalues.com</p>
            <p>📍 123 Real Estate Ave, Beverly Hills, CA 90210</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Property Values. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
