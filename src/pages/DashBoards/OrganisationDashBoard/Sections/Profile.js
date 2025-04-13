import { useState } from 'react';
import { FaSave, FaEdit, FaPlus } from 'react-icons/fa';
import './Profile.css';

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [orgData, setOrgData] = useState({
    name: "Tech Solutions Inc.",
    industry: "Information Technology",
    contactEmail: "hr@techsolutions.com",
    phone: "+254712345678",
    address: "Nairobi, Kenya",
    website: "www.techsolutions.com",
    description: "Leading IT solutions provider specializing in enterprise software development."
  });

  const [opportunities, setOpportunities] = useState([
    { id: 1, title: "Software Developer Intern", skills: "JavaScript, React, Node.js", slots: 3 },
    { id: 2, title: "Data Analyst Intern", skills: "Python, SQL, Data Visualization", slots: 2 }
  ]);

  const [newOpportunity, setNewOpportunity] = useState({
    title: "",
    skills: "",
    slots: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrgData(prev => ({ ...prev, [name]: value }));
  };

  const handleOpportunityChange = (e) => {
    const { name, value } = e.target;
    setNewOpportunity(prev => ({ ...prev, [name]: value }));
  };

  const addOpportunity = () => {
    setOpportunities([...opportunities, { ...newOpportunity, id: opportunities.length + 1 }]);
    setNewOpportunity({ title: "", skills: "", slots: "" });
  };

  return (
    <div className="profile-section">
      <div className="section-header">
        <h2 style={{color:'#E78B48'}}>Organization Profile</h2>
        <button 
          className="edit-btn"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? <FaSave /> : <FaEdit />}
          {editMode ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      <div className="profile-card">
        <div className="form-group">
          <label>Organization Name</label>
          <input
            type="text"
            name="name"
            value={orgData.name}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
        
        {/* Other profile fields similarly */}

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={orgData.description}
            onChange={handleInputChange}
            disabled={!editMode}
            rows={4}
          />
        </div>
      </div>

      <div className="opportunities-section">
        <h3>Placement Opportunities</h3>
        
        <div className="add-opportunity">
          <input
            type="text"
            name="title"
            placeholder="Position Title"
            value={newOpportunity.title}
            onChange={handleOpportunityChange}
          />
          <input
            type="text"
            name="skills"
            placeholder="Required Skills"
            value={newOpportunity.skills}
            onChange={handleOpportunityChange}
          />
          <input
            type="number"
            name="slots"
            placeholder="Available Slots"
            value={newOpportunity.slots}
            onChange={handleOpportunityChange}
          />
          <button onClick={addOpportunity}>
            <FaPlus /> Add Opportunity
          </button>
        </div>

        <div className="opportunities-list">
          {opportunities.map(opp => (
            <div key={opp.id} className="opportunity-card">
              <h4>{opp.title}</h4>
              <p><strong>Skills:</strong> {opp.skills}</p>
              <p><strong>Available Slots:</strong> {opp.slots}</p>
              <div className="opportunity-actions">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;