import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="about-container">

      {/* FIXED HEADER */}
      <header className="about-header">
        <Link to="/home" className="about-brand-link">
          <h1 className="about-brand-name">Elite Nest</h1>
        </Link>
        <div className="about-nav-links">
          <Link to="/home" className="about-nav-link">Home</Link>
          <Link to="/contact" className="about-nav-link">Contact</Link>
          <Link to="/about" className="about-nav-link">About Us</Link>
        </div>
      </header>

      {/* HERO */}
      <section className="about-hero">
        <h1>About Elite Nest</h1>
        <p>Building Trust. Delivering Homes. Creating Lifestyle.</p>
      </section>

      {/* INTRO */}
      <section className="about-intro">
        <p>
          Elite Nest is a modern real estate platform designed to make property
          renting simple, transparent, and stress-free. Whether you're searching
          for your first apartment, a premium luxury rental, or the perfect
          place to call home — Elite Nest connects people to trusted homeowners
          and verified listings across India.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="mv-section">
        <div style={{display:"flex",flexDirection:"row"}}>
        <div className="mv-box">
          <h2>🎯 Our Mission</h2>
          <p>
            To revolutionize the rental experience by offering safe, verified,
            and premium housing solutions with complete transparency and
            efficiency.
          </p>
        </div>

        <div className="mv-box">
          <h2>🚀 Our Vision</h2>
          <p>
            To become India's most trusted rental housing brand by blending
            smart technology, personalized support, and premium living solutions.
          </p>
        </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">💙 Trust & Transparency</div>
          <div className="value-card">🏡 Quality Living</div>
          <div className="value-card">🤝 Customer First</div>
          <div className="value-card">💡 Innovation & Technology</div>
        </div>
      </section>

     

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to Find Your Next Home?</h2>
        <button className="cta-btn">Explore Properties →</button>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        © {new Date().getFullYear()} Elite Nest — Premium Living Made Simple.
      </footer>
    </div>
  );
};

export default AboutPage;
