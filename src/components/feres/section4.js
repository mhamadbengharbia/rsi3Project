import React from 'react';
import hero from '../img/hero.png';
import './section4.css';
function Section4() {
  return (
    <div>
          <div>
            <h1>
            When banking meets
            minimalist
            </h1>
            <h2>
            A simpler banking experience for a simpler life.
            </h2>
            <p><a href=''>Learn more ↓</a></p>
        </div>
        <div>
        <img src={hero} alt="hero" className="hero" />

        </div>
 
    </div>
  );
}

export default Section4;
