import React from 'react';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
  return (
    <div className="side-bar-container">
      <div className="side-bar-grid-container">
        <ul>
          <li className="active">
            <Link to="/category/war">
              <i className="fas fa-peace"></i>
            </Link>
          </li>
          <li>
            <Link to="/category/family">
              <i className="fas fa-users"></i>
            </Link>
          </li>
          <li>
            <Link to="/category/nature">
              <i className="fab fa-pagelines"></i>
            </Link>
          </li>
          <li>
            <Link to="/category/science">
              <i className="fas fa-microscope"></i>
            </Link>
          </li>
          <li>
            <Link to="/category/travel">
              <i className="fas fa-globe-europe"></i>
            </Link>
          </li>
          <li>
            <Link to="/category/children">
              <i className="fas fa-child"></i>
            </Link>
          </li>
          <li>
            <Link to="/category/general">
              <i className="fas fa-book"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
