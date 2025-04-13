import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { 
    FaBuilding, 
    FaUserGraduate, 
    FaClipboardList, 
    FaComments,
    FaHome 
  } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="org-sidebar">
      <div className="sidebar-header">
        <h3>Organisation Portal</h3>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="profile" className={({ isActive }) => isActive ? "active" : ""}>
          <FaBuilding /> Profile
        </NavLink>
        <NavLink to="students" className={({ isActive }) => isActive ? "active" : ""}>
          <FaUserGraduate /> Students
        </NavLink>
        <NavLink to="assessments" className={({ isActive }) => isActive ? "active" : ""}>
          <FaClipboardList /> Assessments
        </NavLink>
        <NavLink to="communication" className={({ isActive }) => isActive ? "active" : ""}>
          <FaComments /> Communication
        </NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          <FaHome /> Homepage
        </NavLink>

      </nav>
    </div>
  );
}

export default Sidebar;