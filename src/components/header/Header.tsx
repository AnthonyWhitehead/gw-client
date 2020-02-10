import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="header-container">
      <div className="header-grid-container">
        <img
          className="brand"
          src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/245/2635047245_245887ae-9535-4c56-a5d5-388fc1f0679b.png?cb=1581238074"
          alt="brand"
        ></img>
      </div>
    </nav>
  );
};

export default Header;
