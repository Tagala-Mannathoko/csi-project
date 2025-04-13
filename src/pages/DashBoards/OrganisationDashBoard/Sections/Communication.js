import { useState } from 'react';
import { FaPaperPlane, FaInbox, FaUser, FaUniversity } from 'react-icons/fa';
import './Communication.css';

export default function Communication() {
  const [activeTab, setActiveTab] = useState('inbox');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [newMessage, setNewMessage] = useState({
    recipient: "",
    subject: "",
    message: ""
  });

  const messages = [
    {
      id: 1,
      sender: "Jane Smith (University Supervisor)",
      subject: "Upcoming Site Visit",
      date: "2023-07-10",
      read: false,
      content: "Dear Organization, I would like to schedule a site visit for next week..."
    },
    // More messages...
  ];

  const students = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Alice Johnson" }
  ];

  const supervisors = [
    { id: 1, name: "Dr. Jane Smith" },
    { id: 2, name: "Prof. Michael Brown" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage(prev => ({ ...prev, [name]: value }));
  };

  const sendMessage = (e) => {
    e.preventDefault();
    // Send logic here
    setNewMessage({ recipient: "", subject: "", message: "" });
  };

  return (
    <div className="communication-section">
      <div className="section-header">
        <h2>Communication Center</h2>
      </div>

      <div className="communication-container">
        <div className="sidebar">
          <div className="tabs">
            <button
              className={activeTab === 'inbox' ? 'active' : ''}
              onClick={() => setActiveTab('inbox')}
            >
              <FaInbox /> Inbox
            </button>
            <button
              className={activeTab === 'compose' ? 'active' : ''}
              onClick={() => setActiveTab('compose')}
            >
              <FaPaperPlane /> Compose
            </button>
          </div>

          {activeTab === 'inbox' && (
            <div className="message-list">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`message-preview ${!msg.read ? 'unread' : ''} ${selectedMessage?.id === msg.id ? 'selected' : ''}`}
                  onClick={() => setSelectedMessage(msg)}
                >
                  <h4>{msg.sender}</h4>
                  <p>{msg.subject}</p>
                  <small>{msg.date}</small>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'compose' && (
            <div className="recipient-list">
              <h3>Students</h3>
              {students.map(student => (
                <div
                  key={student.id}
                  className={`recipient ${newMessage.recipient === `student-${student.id}` ? 'selected' : ''}`}
                  onClick={() => setNewMessage(prev => ({ ...prev, recipient: `student-${student.id}` }))}
                >
                  <FaUser /> {student.name}
                </div>
              ))}

              <h3>University Supervisors</h3>
              {supervisors.map(supervisor => (
                <div
                  key={supervisor.id}
                  className={`recipient ${newMessage.recipient === `supervisor-${supervisor.id}` ? 'selected' : ''}`}
                  onClick={() => setNewMessage(prev => ({ ...prev, recipient: `supervisor-${supervisor.id}` }))}
                >
                  <FaUniversity /> {supervisor.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="message-content">
          {activeTab === 'inbox' && selectedMessage ? (
            <div className="message-view">
              <div className="message-header">
                <h3>{selectedMessage.subject}</h3>
                <p>From: {selectedMessage.sender}</p>
                <p>Date: {selectedMessage.date}</p>
              </div>
              <div className="message-body">
                <p>{selectedMessage.content}</p>
              </div>
              <div className="message-actions">
                <button>Reply</button>
                <button>Forward</button>
              </div>
            </div>
          ) : activeTab === 'compose' ? (
            <div className="compose-message">
              <form onSubmit={sendMessage}>
                <div className="form-group">
                  <label>To:</label>
                  <input
                    type="text"
                    value={newMessage.recipient}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Subject:</label>
                  <input
                    type="text"
                    name="subject"
                    value={newMessage.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message:</label>
                  <textarea
                    name="message"
                    value={newMessage.message}
                    onChange={handleInputChange}
                    required
                    rows={8}
                  />
                </div>
                <div className="form-actions">
                  <button type="submit">
                    <FaPaperPlane /> Send Message
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="empty-state">
              <h3>Select a message to view</h3>
              <p>Or compose a new message</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}