import React from 'react';
import icon from '../img/icon.png';
import './footer.css';
function Footer() {
  return (
    <div>
          <div>
            <h1>
            The best day to join Bankist was one year ago. The second best is today!
            </h1>
            <button> Open your free account today! </button>
        </div>

        <div>
            <p><a> About </a></p>   
            <p><a> Pricing </a></p>   
            <p><a> Terms of Use </a></p>   
            <p><a> Privacy Policy </a></p>   
            <p><a> Careers </a></p>   
            <p><a> Blog </a></p>   
            <p><a> Contact Us </a></p>   
        
        </div>

<div>

<img src={icon} alt="icon" className="icon" />
</div>

        <div>
    <p>© Copyright by Rayen Mhamed Feres Thameur All Right Reserved</p>
        </div>
 
    </div>
  );
}

export default Footer;
