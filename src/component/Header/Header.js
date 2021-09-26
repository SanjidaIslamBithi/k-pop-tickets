import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
       <h1>K-POP CONCERT 2021</h1>
       <h2><small style={{"fontStyle": "italic"}}>-live your dreams<i className="fas fa-heart"></i></small></h2>
       <h3 className="fw-bold py-3">Number of Tickets: 3 MILLION</h3>
        </div>
    );
};

export default Header;