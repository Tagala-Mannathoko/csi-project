import { Link } from 'react-router-dom';

function StudentPage() {
  return (
    <div>
      <h1 style={{alignContent: 'center'}}>StudentPage</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default StudentPage;