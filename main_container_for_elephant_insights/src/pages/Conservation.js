import React from 'react';
import './Pages.css';

/**
 * Conservation page component for Elephant Insights blog
 * Features content about elephant conservation efforts
 * @returns {JSX.Element} The rendered Conservation component
 */
const Conservation = () => {
  return (
    <div className="page conservation-page">
      <section className="page-hero conservation-hero">
        <div className="container">
          <h1 className="page-title">Elephant Conservation</h1>
          <p className="page-description">
            Elephants face numerous threats in the wild, from habitat loss to poaching.
            Learn about conservation efforts and how you can help protect these magnificent creatures.
          </p>
        </div>
      </section>
      
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-card">
              <h2 className="content-title">Current Threats</h2>
              <p className="content-text">
                Elephant populations face serious threats from poaching for ivory, habitat loss due to
                human expansion, and human-wildlife conflict. African elephant numbers have declined by
                more than 30% in the last decade alone.
              </p>
              <p className="content-text">
                Asian elephants are even more endangered, with fewer than 50,000 remaining in the wild,
                threatened by habitat fragmentation and conflict with humans.
              </p>
            </div>
            
            <div className="content-card">
              <h2 className="content-title">Conservation Initiatives</h2>
              <p className="content-text">
                Conservation organizations worldwide are working to establish protected areas,
                create wildlife corridors, reduce human-elephant conflict, and enforce anti-poaching laws.
              </p>
              <p className="content-text">
                Community-based conservation programs engage local communities in protection efforts,
                providing economic incentives for conservation and education about the importance of
                elephants to ecosystems.
              </p>
            </div>
            
            <div className="content-card">
              <h2 className="content-title">How You Can Help</h2>
              <p className="content-text">
                Support reputable conservation organizations working to protect elephant populations
                and their habitats. Avoid purchasing ivory products and spread awareness about the
                devastating impact of the ivory trade.
              </p>
              <p className="content-text">
                Travel responsibly by choosing ethical elephant experiences that prioritize animal
                welfare over entertainment. Educate others about elephant conservation and the importance
                of preserving these keystone species.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conservation;
