import React from 'react';
import './Pages.css';

/**
 * Ecology page component for Elephant Insights blog
 * Features content about elephants' ecological importance
 * @returns {JSX.Element} The rendered Ecology component
 */
const Ecology = () => {
  return (
    <div className="page ecology-page">
      <section className="page-hero ecology-hero">
        <div className="container">
          <h1 className="page-title">Elephant Ecology</h1>
          <p className="page-description">
            Elephants are keystone species that shape entire ecosystems.
            Discover their ecological importance and the impact they have on their environments.
          </p>
        </div>
      </section>
      
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-card">
              <h2 className="content-title">Ecosystem Engineers</h2>
              <p className="content-text">
                Elephants physically alter their habitats by creating water holes, clearing paths through
                dense vegetation, and maintaining open grasslands. These modifications benefit numerous
                other species that rely on these ecosystem services.
              </p>
              <p className="content-text">
                Their foraging behavior helps maintain plant diversity by preventing any single species
                from becoming dominant, creating a mosaic of habitats that support greater biodiversity.
              </p>
            </div>
            
            <div className="content-card">
              <h2 className="content-title">Seed Dispersal</h2>
              <p className="content-text">
                As they roam across vast territories, elephants consume a wide variety of plant species
                and disperse the seeds through their dung, often far from the parent plants. Some seeds
                even germinate better after passing through an elephant's digestive system.
              </p>
              <p className="content-text">
                This seed dispersal service is crucial for forest regeneration and maintaining plant
                genetic diversity across landscapes.
              </p>
            </div>
            
            <div className="content-card">
              <h2 className="content-title">Ecological Relationships</h2>
              <p className="content-text">
                Elephants interact with countless other species, from the birds that follow herds to
                catch insects disturbed by their movement, to the dung beetles that rely on elephant
                waste for reproduction and food.
              </p>
              <p className="content-text">
                The loss of elephants from an ecosystem can trigger cascading effects that negatively
                impact many other species, demonstrating their importance as keystone species in
                maintaining ecological balance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecology;
