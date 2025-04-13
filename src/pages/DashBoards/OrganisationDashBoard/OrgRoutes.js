import { Routes, Route } from 'react-router-dom';
import OrgDashboard from './OrgDashboard';
import Profile from './Sections/Profile';
import Students from './Sections/Students';
import Assessments from './Sections/Assessments';
import Communication from './Sections/Communication';

function OrgRoutes() {
  return (
    <Routes>
      <Route path="/" element={<OrgDashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="students" element={<Students />} />
        <Route path="assessments" element={<Assessments />} />
        <Route path="communication" element={<Communication />} />
      </Route>
    </Routes>
  );
}

export default OrgRoutes;