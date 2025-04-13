import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/OrgDashboard/Sidebar';
import './OrgDashboard.css';

function OrgDashboard() {
  return (
    <div className="org-dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}

export default OrgDashboard;