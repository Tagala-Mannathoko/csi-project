import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentPage from './pages/LoginPages/Student/StudentPage';
import OrganisationPage from './pages/LoginPages/Organisation/OrganisationPage';
import AdminPage from './pages/LoginPages/Admin/AdminPage';
import Org_Login from './components/Forms/Org_login';
import OrgDashboard from './pages/DashBoards/OrganisationDashBoard/OrgDashboard';
import Profile from './pages/DashBoards/OrganisationDashBoard/Sections/Profile';
import Students from './pages/DashBoards/OrganisationDashBoard/Sections/Students';
import Assessments from './pages/DashBoards/OrganisationDashBoard/Sections/Assessments';
import Communication from './pages/DashBoards/OrganisationDashBoard/Sections/Communication';
import OrganizationRegistration from './pages/LoginPages/Organisation/OrganisationRegister/OrganisationRegistration';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/admin" element={<AdminPage />} />
        
        {/* Organization Routes */}
        <Route path="/organisation" element={<OrganisationPage />} />
        <Route path="/organisation/login" element={<Org_Login />} />
        <Route path="/organisation/register" element={<OrganizationRegistration />} />
        
        {/* Organization Dashboard with Nested Routes */}
        <Route path="/organisation/dashboard" element={<OrgDashboard />}>
          <Route index element={<Profile />} />  {/* Default dashboard route */}
          <Route path="profile" element={<Profile />} />
          <Route path="students" element={<Students />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="communication" element={<Communication />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;