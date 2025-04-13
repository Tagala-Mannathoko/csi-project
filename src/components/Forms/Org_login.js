/* import React, { useState } from "react";
import { FaBuilding, FaLock, FaUser } from "react-icons/fa";
import "./Org_login.css"; 
import { Link } from 'react-router-dom';

function Org_Login() {
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your authentication logic here
    };

    return (
        <div className="login-container">
            
            <div className="login-box">
                <div className="login-icon">
                    <FaBuilding size={30} />
                </div>
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <span className="input-icon">
                            <FaUser />
                        </span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Organization Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="login-input"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <span className="input-icon">
                            <FaLock />
                        </span>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="login-input"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <div className="login-footer">
                    <a style={{color: "white"}} href="#forgot" className="login-link">
                        Forgot password?
                    </a>
                    <div className="back-to-home">
                        <Link to="/">HomePage</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Org_Login; */


import React, { useState } from "react";
import { FaBuilding, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "./Org_login.css";

function Org_Login() {
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Add your actual authentication logic here
        if (formData.name && formData.password) {
            // On successful login:
            // 1. Store auth token (if using API)
            // 2. Redirect to dashboard
            navigate("/organisation/dashboard");
        } else {
            setError("Please fill in all fields");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-icon">
                    <FaBuilding size={30} />
                </div>
                <h2 className="login-title">Organization Login</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                        <span className="input-icon">
                            <FaUser />
                        </span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Organization Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="login-input"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <span className="input-icon">
                            <FaLock />
                        </span>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="login-input"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <div className="login-footer">
                    <Link to="/" className="back-to-home">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Org_Login;