import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

/**
 * Home page component for Elephant Insights blog
 * Serves as the landing page with featured content
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Elephant Insights</h1>
            <h2 className="hero-subtitle">Exploring Behavior, Conservation, and Ecology</h2>
            <p className="hero-description">
              Discover the fascinating world of elephants through our comprehensive blog
              focusing on elephant behavior, conservation efforts, and ecological importance.
            </p>
            <div className="hero-buttons">
              <Link to="/behavior" className="btn btn-large">Explore Behavior</Link>
              <Link to="/conservation" className="btn btn-outline">Learn About Conservation</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Insights</h2>
          <div className="featured-grid">
            <div className="featured-card">
              <div className="featured-image behavior-image"></div>
              <h3 className="featured-title">Social Structures</h3>
              <p className="featured-description">
                Elephants maintain complex social structures led by matriarchs, with deep family bonds
                that last throughout their lifetime.
              </p>
              <Link to="/behavior" className="featured-link">Read More</Link>
            </div>
            
            <div className="featured-card">
              <div className="featured-image conservation-image"></div>
              <h3 className="featured-title">Protection Efforts</h3>
              <p className="featured-description">
                Learn about global initiatives to protect elephant habitats and combat poaching
                to ensure these magnificent creatures survive for generations to come.
              </p>
              <Link to="/conservation" className="featured-link">Read More</Link>
            </div>
            
            <div className="featured-card">
              <div className="featured-image ecology-image"></div>
              <h3 className="featured-title">Ecosystem Engineers</h3>
              <p className="featured-description">
                Discover how elephants shape their environments, creating pathways for other species
                and dispersing seeds that maintain biodiversity.
              </p>
              <Link to="/ecology" className="featured-link">Read More</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Our Blog</h2>
              <p className="about-description">
                Elephant Insights is dedicated to sharing knowledge about elephants through well-researched articles,
                captivating stories, and educational content. Our team of conservationists, researchers, and writers
                works tirelessly to bring you the latest information on elephant behavior, conservation initiatives,
                and ecological impact.
              </p>
              <p className="about-description">
                Join us in our mission to promote awareness and appreciation for these magnificent animals.
                Together, we can ensure a bright future for elephants worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
