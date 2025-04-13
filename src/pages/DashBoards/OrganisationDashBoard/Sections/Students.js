import { useState } from 'react';
import { FaSearch, FaFileAlt, FaChartLine } from 'react-icons/fa';
import './Students.css';

export default function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('current');

  const students = [
    {
      id: 1,
      name: "John Doe",
      university: "University of Nairobi",
      course: "Computer Science",
      startDate: "2023-06-01",
      endDate: "2023-08-31",
      status: "In Progress",
      progress: 65,
      lastLogbook: "2023-07-15"
    },
    // More students...
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="students-section">
      <div className="section-header">
        <h2>Student Management</h2>
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="tabs">
        <button
          className={activeTab === 'current' ? 'active' : ''}
          onClick={() => setActiveTab('current')}
        >
          Current Students
        </button>
        <button
          className={activeTab === 'past' ? 'active' : ''}
          onClick={() => setActiveTab('past')}
        >
          Past Students
        </button>
      </div>

      <div className="students-list">
        {filteredStudents.map(student => (
          <div key={student.id} className="student-card">
            <div className="student-info">
              <h3>{student.name}</h3>
              <p>{student.university} - {student.course}</p>
              <p>Attachment Period: {student.startDate} to {student.endDate}</p>
            </div>
            
            <div className="student-progress">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${student.progress}%` }}
                ></div>
                <span>{student.progress}%</span>
              </div>
              <p>Last logbook: {student.lastLogbook}</p>
            </div>

            <div className="student-actions">
              <button>
                <FaFileAlt /> View Logbooks
              </button>
              <button>
                <FaChartLine /> Progress Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}