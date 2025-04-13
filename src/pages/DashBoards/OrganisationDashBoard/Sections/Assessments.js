import { useState } from 'react';
import { FaFileUpload, FaCalendarAlt } from 'react-icons/fa';
import './Assessments.css';

export default function Assessments() {
  const [activeForm, setActiveForm] = useState(null);
  const [assessmentData, setAssessmentData] = useState({
    studentId: "",
    rating: "",
    comments: "",
    strengths: "",
    areasForImprovement: ""
  });

  const students = [
    {
      id: 1,
      name: "John Doe",
      university: "University of Nairobi",
      course: "Computer Science"
    },
    {
      id: 2,
      name: "Jane Smith",
      university: "Kenyatta University",
      course: "Information Technology"
    }
  ];
  
  const assessments = [
    {
      id: 1,
      student: "John Doe",
      type: "Mid-Attachment",
      dueDate: "2023-07-15",
      status: "Completed",
      submittedDate: "2023-07-14"
    },
    // More assessments...
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssessmentData(prev => ({ ...prev, [name]: value }));
  };

  const submitAssessment = (e) => {
    e.preventDefault();
    // Submit logic here
    setActiveForm(null);
  };

  return (
    <div className="assessments-section">
      <div className="section-header">
        <h2>Student Assessments</h2>
      </div>

      <div className="assessment-types">
        <button 
          className={`assessment-btn ${activeForm === 'mid' ? 'active' : ''}`}
          onClick={() => setActiveForm('mid')}
        >
          Mid-Attachment Evaluation
        </button>
        <button 
          className={`assessment-btn ${activeForm === 'final' ? 'active' : ''}`}
          onClick={() => setActiveForm('final')}
        >
          Final Evaluation
        </button>
      </div>

      {activeForm && (
        <div className="assessment-form">
          <h3>{activeForm === 'mid' ? 'Mid-Attachment' : 'Final'} Evaluation Form</h3>
          
          <form onSubmit={submitAssessment}>
            <div className="form-group">
              <label>Student</label>
              <select
                name="studentId"
                value={assessmentData.studentId}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Student</option>
                {students.map(student => (
                  <option key={student.id} value={student.id}>
                    {student.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Overall Rating</label>
              <select
                name="rating"
                value={assessmentData.rating}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Rating</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Below Average">Below Average</option>
              </select>
            </div>

            {/* More form fields */}

            <div className="form-actions">
              <button type="button" onClick={() => setActiveForm(null)}>
                Cancel
              </button>
              <button type="submit">
                <FaFileUpload /> Submit Assessment
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="assessment-history">
        <h3>Assessment History</h3>
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Assessment Type</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Submitted Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assessments.map(assessment => (
              <tr key={assessment.id}>
                <td>{assessment.student}</td>
                <td>{assessment.type}</td>
                <td>
                  <FaCalendarAlt /> {assessment.dueDate}
                </td>
                <td className={`status ${assessment.status.toLowerCase()}`}>
                  {assessment.status}
                </td>
                <td>{assessment.submittedDate || '-'}</td>
                <td>
                  <button>View</button>
                  {assessment.status === 'Pending' && (
                    <button>Complete</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}