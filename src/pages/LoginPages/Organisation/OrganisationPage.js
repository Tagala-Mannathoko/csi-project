/* import Org_Login from '../../../components/Forms/Org_login';
import './OrganisationPage.css'
import NavigationBar from '../../../components/layout/NavigationBar';
 */
/* function OrganisationPage() {
  return (
    <div>
      <h1>This is Page 2</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
} */

/*   function OrganisationPage()
  {
    return (
      <div className='orgPage-container'>
        <NavigationBar />
        <div className='info'>Want to join the Attachment System</div>
        <div className='orgLogin-container'>
          <Org_Login />
        </div>
  
      </div>
    );
  }

export default OrganisationPage; 

function OrganisationPage() {
  return (
    <div className='orgPage-container'>
      <NavigationBar />
      <div className='org-content'>
        <div className='info-section'>
          <h2>Join Our Industrial Attachment System</h2>
          <div className='info-card'>
            <h3>Benefits for Organizations:</h3>
            <ul>
              <li>Access to qualified student candidates</li>
              <li>Streamlined recruitment process</li>
              <li>Opportunity to shape future professionals</li>
              <li>Dedicated support throughout the attachment period</li>
            </ul>
            
            <h3>How to Register:</h3>
            <ol>
              <li>Prepare your organization's registration documents</li>
              <li>Have your company email address ready</li>
              <li>Ensure you have authority to approve student attachments</li>
              <li>Our team will verify your details within 2 business days</li>
            </ol>
            
            <button className='signup-button'>Register Your Organization</button>
          </div>
        </div>
        
        <div className='login-section'>
          <div className='login-box'>
            <Org_Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganisationPage;
*/

import { Routes, Route, useNavigate } from 'react-router-dom';
import OrgRoutes from '../../DashBoards/OrganisationDashBoard/OrgRoutes';
import Org_Login from '../../../components/Forms/Org_login';
import './OrganisationPage.css';
import NavigationBar from '../../../components/layout/NavigationBar';

function OrganisationPage() {

  const navigate = useNavigate();
  return (
    <div className='orgPage-container'>
      <NavigationBar />
      <Routes>
        <Route path="/" element={
          <div className='org-content'>
             <div className='info-section'>
              <h2>Join Our Industrial Attachment System</h2>
                <div className='info-card'>
                  <h3>Benefits for Organizations:</h3>
                  <ul>
                    <li>Access to qualified student candidates</li>
                    <li>Streamlined recruitment process</li>
                    <li>Opportunity to shape future professionals</li>
                    <li>Dedicated support throughout the attachment period</li>
                  </ul>
            
                  <h3>How to Register:</h3>
                  <ol>
                    <li>Prepare your organization's registration documents</li>
                    <li>Have your company email address ready</li>
                    <li>Ensure you have authority to approve student attachments</li>
                    <li>Our team will verify your details within 2 business days</li>
                  </ol>
                  
                  <button className='signup-button' onClick={() => navigate('/organisation/register')} >Register Your Organization</button>
                </div>
            </div>
            <div className='login-section'>
              <div className='login-box'>
                <Org_Login />
              </div>
            </div>
          </div>
        }/>
        <Route path="/*" element={<OrgRoutes />} />
      </Routes>
    </div>
  );
}

export default OrganisationPage;


