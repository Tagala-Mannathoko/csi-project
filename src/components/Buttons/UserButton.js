/* import React from 'react';
import './UserButton.css';
function UserButton({
  text = 'Student',
  icon = (
    <>
      <path 
        d="M12 4L10 6H6V10L4 12L6 14V18H10L12 20L14 18H18V14L20 12L18 10V6H14L12 4Z" 
        fill="currentColor"
      />
      <path 
        d="M12 16V8M9 11L12 8L15 11" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        className="download-arrow"
      />
    </>
  ),
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ariaLabel,
  title
}) {
  return (
    <button 
      className={`user-button ${variant} ${size} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || text}
      title={title || text}
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="button-icon"
        aria-hidden="true"
        focusable="false"
      >
        {icon}
      </svg>
      <span className="button-text">{text}</span>
    </button>
  );
}

export default UserButton; */

import React from 'react';
import { 
  FaUserGraduate, 
  FaChalkboardTeacher, 
  FaUserShield, 
  FaUserTie,
  FaUser,
  FaBuilding 
} from 'react-icons/fa';
import './UserButton.css';

function UserButton({
  text = 'Student',
  iconType = 'student', // New prop to specify icon type
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ariaLabel,
  title
}) {
  // Map icon types to actual icons
  const getIcon = () => {
    const iconSize = 18; // Adjust based on your design needs
    switch (iconType.toLowerCase()) {
      case 'student':
        return <FaUserGraduate size={iconSize} />;
      case 'teacher':
        return <FaChalkboardTeacher size={iconSize} />;
      case 'admin':
        return <FaUserShield size={iconSize} />;
      case 'staff':
        return <FaUserTie size={iconSize} />;
      case 'organization':
        return <FaBuilding size={iconSize} />;
      case 'generic':
      default:
        return <FaUser size={iconSize} />;
    }
  };

  return (
    <button 
      className={`user-button ${variant} ${size} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || text}
      title={title || text}
    >
      <span className="button-icon">
        {getIcon()}
      </span>
      <span className="button-text">{text}</span>
    </button>
  );
}

export default UserButton;