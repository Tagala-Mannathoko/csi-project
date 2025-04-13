import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './NavigationBar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Left side - Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L2 10V22L16 30L30 22V10L16 2Z" fill="#0061FF"/>
              <path d="M16 2L2 10L16 18L30 10L16 2Z" fill="#0061FF" fillOpacity="0.4"/>
              <path d="M16 18L2 10V22L16 30V18Z" fill="#0061FF" fillOpacity="0.6"/>
            </svg>
            <span>Attachment Service</span>
          </div>
        </Link>
        
        {/* Main Navigation Links */}
        <div className="nav-links">
          <button onClick={() => navigate('/placements')}>Placements</button>
          <button onClick={() => navigate('/applications')}>Applications</button>
          <button onClick={() => navigate('/resources')}>Resources</button>
        </div>
      </div>

      {/* Right side - User controls */}
      <div className="navbar-right">
        <button className="search-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        
        <div className="user-menu">
          <button 
            className="user-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="avatar">KS</div>
          </button>
          
          {showMenu && (
            <div className="dropdown-menu">
              <Link to="/profile">Profile</Link>
              <Link to="/settings">Settings</Link>
              <button className="signout-btn">Sign out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;