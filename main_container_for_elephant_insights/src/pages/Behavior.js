import React from 'react';
import './Pages.css';

/**
 * Behavior page component for Elephant Insights blog
 * Features content about elephant behavior and social structures
 * @returns {JSX.Element} The rendered Behavior component
 */
const Behavior = () => {
  return (
    <div className="page behavior-page">
      <section className="page-hero behavior-hero">
        <div className="container">
          <h1 className="page-title">Elephant Behavior</h1>
          <p className="page-description">
            Elephants display complex behaviors and emotional intelligence that rivals many species.
            Learn about their social structures, communication methods, and cognitive abilities.
          </p>
        </div>
      </section>
      
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-card">
              <h2 className="content-title">Social Structures</h2>
              <p className="content-text">
                Elephant herds are led by a matriarch, usually the oldest and most experienced female.
                These family units typically consist of related females and their young, forming strong
                social bonds that can last a lifetime.
              </p>
              <p className="content-text">
                Males generally leave the herd upon reaching adolescence and may form bachelor groups
                or live solitary lives, rejoining female groups primarily for breeding purposes.
              </p>
            </div>
            
            <div className="content-card">
              <h2 className="content-title">Communication</h2>
              <p className="content-text">
                Elephants communicate through a variety of methods, including vocalizations, body language,
                touch, and infrasound rumbles that can travel over long distances. Their communication system
                is one of the most sophisticated in the animal kingdom.
              </p>
              <p className="content-text">
                They can recognize and respond to specific alarm calls, coordinate group movements,
                and even identify individual family members by their unique calls.
              </p>
            </div>
            
            <div className="content-card">
              <h2 className="content-title">Intelligence & Emotion</h2>
              <p className="content-text">
                Elephants exhibit remarkable cognitive abilities, including self-awareness, problem-solving,
                tool use, and empathy. They can recognize themselves in mirrors and use objects as tools
                to accomplish specific tasks.
              </p>
              <p className="content-text">
                They also display complex emotional behaviors, such as mourning their dead, comforting
                distressed herd members, and exhibiting signs of joy during reunions with family members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Behavior;
