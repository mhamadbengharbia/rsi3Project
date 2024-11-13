import React from 'react';
import './section3.css';

function Section3({ title, content, imageUrl }) {
  return (
    <div >
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={imageUrl} />
    </div>
  );
}

export default Section3;
