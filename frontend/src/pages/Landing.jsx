import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
  const navigate = useNavigate();
  const [showTerms, setShowTerms] = useState(false);
  
  const calculateFare = (km) => Math.max(25, Math.ceil(km * 5));
  
  const [fares] = useState([
    { distance: '1-2 km', fare: `₹${calculateFare(2)}`, label: 'Minimum Fare' },
    { distance: '5 km', fare: `₹${calculateFare(5)}`, label: 'Short Trip' },
    { distance: '10 km', fare: `₹${calculateFare(10)}`, label: 'Medium Trip' },
    { distance: '20 km', fare: `₹${calculateFare(20)}`, label: 'Long Trip' }
  ]);

  return (
    <div className="landing-container">
      {/* Navigation Header */}
      <header className="landing-header">
        <div className="header-left">
          <img 
            src="/KozhGo-LOGO.png" 
            alt="KozhiGo" 
            className="header-logo"
          />
          <span className="header-brand">KozhiGo</span>
        </div>
        <nav className="header-nav">
          <button className="nav-btn nav-login" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="nav-btn nav-signup" onClick={() => navigate('/register')}>
            Sign Up
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-section">
            <img 
              src="/KozhGo-LOGO.png" 
              alt="KozhiGo" 
              className="hero-logo"
            />
            <h1>KozhiGo</h1>
          </div>
          <p className="tagline">Ride Smart. Ride Fast.</p>
          <p className="subtitle">Your trusted campus ride-sharing platform</p>
          <p className="hero-description">
            KozhiGo is a modern, eco-friendly ride-sharing platform designed for students and commuters. 
            We connect drivers and passengers with transparent pricing, real-time tracking, and a focus on safety and affordability.
          </p>
        </div>
      </section>

      {/* Fare Information Section */}
      <section className="fares-section">
        <h2>Our Transparent Pricing</h2>
        <p className="section-subtitle">No hidden charges. Always fair pricing.</p>
        
        <div className="pricing-info">
          <div className="pricing-card highlighted">
            <div className="pricing-header">Base Rate</div>
            <div className="pricing-amount">₹25</div>
            <div className="pricing-detail">Minimum fare for any ride</div>
          </div>

          <div className="pricing-card">
            <div className="pricing-header">Per Kilometer</div>
            <div className="pricing-amount">₹5</div>
            <div className="pricing-detail">Additional charge per km</div>
          </div>
        </div>

        <div className="fare-examples">
          <h3>Fare Examples</h3>
          <div className="fares-grid">
            {fares.map((fare, index) => (
              <div key={index} className="fare-item">
                <div className="fare-distance">{fare.distance}</div>
                <div className="fare-value">{fare.fare}</div>
                <div className="fare-label">{fare.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-formula">
          <h4>How We Calculate:</h4>
          <p className="formula">
            Fare = <strong>MAX(₹25, Distance in km × ₹5)</strong>
          </p>
          <p className="formula-note">
            * The minimum fare is ₹25, and after that, you pay ₹5 for every kilometer traveled.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose KozhiGo?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">�</div>
            <h3>Made for Kozhikode Students</h3>
            <p>Designed specifically for students travelling daily within Kozhikode city and nearby areas</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💵</div>
            <h3>Affordable Daily Travel</h3>
            <p>Share petrol costs and reduce dependency on expensive auto rides and crowded buses</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚦</div>
            <h3>Reduce City Traffic</h3>
            <p>Encourages ride sharing and reduces the number of single-rider two-wheelers on roads</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Built for Student Community</h3>
            <p>Safe and trusted travel within college networks in Kozhikode</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛵</div>
            <h3>Smarter Urban Mobility</h3>
            <p>Promotes efficient use of existing two-wheelers for daily commuting</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of happy riders and drivers on KozhiGo today</p>
        
        <div className="cta-buttons-large">
          <button className="btn btn-primary-large" onClick={() => navigate('/register')}>
            Get Started Now
          </button>
          <button className="btn btn-secondary-large" onClick={() => navigate('/login')}>
            Already a Member?
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; 2026 KozhiGo. All rights reserved.</p>
        <p>Your trusted ride-sharing platform for campus and beyond</p>
        <p style={{ marginTop: '0.5rem' }}>
          <span 
            onClick={() => setShowTerms(true)} 
            style={{ cursor: 'pointer', textDecoration: 'underline', color: '#4a90e2' }}
          >
            Terms & Conditions
          </span>
        </p>
      </footer>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="terms-overlay" onClick={() => setShowTerms(false)}>
          <div className="terms-modal" onClick={(e) => e.stopPropagation()}>
            <button className="terms-close" onClick={() => setShowTerms(false)}>&times;</button>
            <h2>Terms & Conditions – KozhiGo</h2>
            
            <div className="terms-content">
              <h3>1. Acceptance of Terms</h3>
              <p>By using KozhiGo, users agree to follow the terms and conditions of the platform. The service is intended only for students commuting within Kozhikode.</p>

              <h3>2. Student-Only Platform</h3>
              <p>KozhiGo is designed exclusively for college students. Users must provide valid student details while registering and must use the platform responsibly.</p>

              <h3>3. Ride Sharing Responsibility</h3>
              <p>Drivers and passengers are responsible for coordinating rides, timings, and locations. KozhiGo only connects users and does not operate as a transport provider.</p>

              <h3>4. Two-Wheeler Usage</h3>
              <p>The platform supports ride sharing only through two-wheelers such as scooters and bikes. Users must follow traffic rules and safety practices during travel.</p>

              <h3>5. Cost Sharing</h3>
              <p>Petrol expenses may be shared between driver and passenger based on the distance travelled. KozhiGo does not handle payments directly and is not responsible for disputes regarding cost sharing.</p>

              <h3>6. User Conduct</h3>
              <p>Users must:</p>
              <ul>
                <li>Provide accurate information</li>
                <li>Behave respectfully with other users</li>
                <li>Avoid misuse of the platform</li>
                <li>Follow local traffic and safety regulations</li>
              </ul>
              <p>Any misuse may lead to account restriction.</p>

              <h3>7. Ride Status Updates</h3>
              <p>Users are expected to update ride progress during and after trips to maintain transparency and coordination.</p>

              <h3>8. Safety Disclaimer</h3>
              <p>KozhiGo is a student-initiated platform that connects riders and passengers. The platform is not responsible for accidents, delays, or personal issues that may occur during travel.</p>

              <h3>9. Admin Rights</h3>
              <p>Admins reserve the right to:</p>
              <ul>
                <li>Monitor activity</li>
                <li>Remove rides</li>
                <li>Restrict users in case of misuse</li>
              </ul>

              <h3>10. Changes to Terms</h3>
              <p>These terms may be updated as the platform evolves. Continued use of KozhiGo implies acceptance of any updates.</p>

              <h3>11. Disclaimer</h3>
              <p>Any violation of the above Terms and Conditions will be taken seriously. KozhiGo reserves the right to restrict, suspend, or remove user access in cases of misuse, false information, unsafe behavior, or non-compliance with platform guidelines.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
