import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/layout/NavigationBar';
import UserButton from '../components/Buttons/UserButton';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <NavigationBar />
      <h1>Welcome To the Industrial Attachment Online Service</h1>
      <div className="buttons-container">
        <UserButton 
          text="Student"
          iconType="student"  // Added icon type
          onClick={() => navigate('/student')}
          variant="primary"
          ariaLabel="Navigate to Student Portal"
        />
        <UserButton 
          text="Organization"
          iconType="organization"  // Added icon type
          onClick={() => navigate('/organisation')}
          variant="primary"
          ariaLabel="Navigate to Organization Portal"
        />
        <UserButton 
          text="Other"
          iconType="generic"  // Added icon type
          onClick={() => navigate('/admin')}
          variant="primary"
          ariaLabel="Navigate to Other Options"
        />
      </div>
    </div>
  );
}

export default Home;