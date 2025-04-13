import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaBuilding, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaIndustry, 
  FaUserTie, 
  FaCheck,
  FaGlobe
} from 'react-icons/fa';
import './OrganisationRegistration.css';

export default function OrganizationRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationName: '',
    address: '',
    city: '',
    country: 'Kenya', // Default country
    contactPerson: '',
    phone: '',
    email: '',
    industry: '',
    website: '',
    description: ''
  });
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const industries = [
    'Information Technology',
    'Finance',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Retail',
    'Hospitality',
    'Other'
  ];

  const countries = [
    'Kenya',
    'Uganda',
    'Tanzania',
    'Rwanda',
    'Ethiopia',
    'Nigeria',
    'South Africa',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Organization registered:', formData);
    setSubmitted(true);
    setTimeout(() => navigate('/organisation/dashboard'), 2000);
  };

  const nextStep = () => {
    // Validate current step before proceeding
    if (step === 1 && (!formData.organizationName || !formData.industry || !formData.address)) {
      alert('Please fill all required fields');
      return;
    }
    if (step === 2 && (!formData.contactPerson || !formData.phone || !formData.email)) {
      alert('Please fill all required fields');
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  if (submitted) {
    return (
      <div className="registration-success">
        <div className="success-card">
          <FaCheck className="success-icon" />
          <h2>Registration Successful!</h2>
          <p>Your organization profile has been created.</p>
          <p>You'll be redirected to your dashboard shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h1>Organization Registration</h1>
        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className="progress-line"></div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className="progress-line"></div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        {step === 1 && (
          <div className="form-section">
            <h2>Basic Information</h2>
            <div className="input-group">
              <FaBuilding className="input-icon" />
              <input
                type="text"
                name="organizationName"
                placeholder="Organization Name *"
                value={formData.organizationName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <FaIndustry className="input-icon" />
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
              >
                <option value="">Select Industry *</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <FaMapMarkerAlt className="input-icon" />
              <input
                type="text"
                name="address"
                placeholder="Street Address *"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="input-group">
                <input
                  type="text"
                  name="city"
                  placeholder="City *"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-section">
            <h2>Contact Information</h2>
            <div className="input-group">
              <FaUserTie className="input-icon" />
              <input
                type="text"
                name="contactPerson"
                placeholder="Contact Person *"
                value={formData.contactPerson}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="input-group">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <FaGlobe className="input-icon" />
              <input
                type="url"
                name="website"
                placeholder="Website (optional)"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-section">
            <h2>Additional Details</h2>
            <div className="input-group">
              <textarea
                name="description"
                placeholder="Brief description of your organization (optional)"
                value={formData.description}
                onChange={handleChange}
                rows={5}
              />
            </div>
          </div>
        )}

        <div className="form-actions">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="secondary-button">
              Back
            </button>
          )}
          {step < 3 ? (
            <button type="button" onClick={nextStep} className="primary-button">
              Next
            </button>
          ) : (
            <button type="submit" className="submit-button">
              Complete Registration
            </button>
          )}
        </div>
      </form>
    </div>
  );
}