import React, { useState } from 'react';
import Home from './Home'; // Import your Home component
import Analysis from './Analysis'; // Import your Analysis component

const Header = ({ onButtonClick }) => {


  return (
    <nav className='nav'>
        <img src="https://www.vedantu.com/cdn/images/new-header/img/vedantu-logo.svg" alt="vadantu" />
        <div className='call'> 
            <div className="Header_headerPhoneIcon__3JDrA" style={{position:'relative', top:'10px', left:'-8px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" fill="#01202B">
                    <path fillRule="evenodd" d="M3.2 6.933c1.244 2.49 3.378 4.534 5.867 5.867l1.955-1.956c.267-.266.622-.355.89-.177.977.355 2.044.533 3.2.533.532 0 .888.356.888.889v3.022c0 .533-.356.889-.889.889C6.756 16 0 9.244 0 .889 0 .356.356 0 .889 0H4c.533 0 .889.356.889.889 0 1.067.178 2.133.533 3.2.09.267 0 .622-.178.889L3.2 6.933Z" clipRule="evenodd"></path>
                </svg>
            </div>
            <div className='text_num'>
                <p style={{fontSize: '12px', lineHeight: '130%', color: '#51626a', fontWeight: '200'}}>Talk to our experts</p>
                <span style={{fontWeight: '600', fontSize: '14px'}}>1800-120-456-456</span>
            </div>
        </div>
        <div className='nav_button'>
            <button onClick={() => onButtonClick('home')}
            style={{ fontWeight: '500',fontSize: '14px',lineHeight: '28px',letterSpacing: '.2px',color: 'orange'}}>
            Home</button>
            <button onClick={() => onButtonClick('analysis')}
            style={{ fontWeight: '500',fontSize: '14px',lineHeight: '28px',letterSpacing: '.2px',color: 'orange'}}>
            Analysis</button>
        </div>
    </nav>
  )
}

export default Header;
