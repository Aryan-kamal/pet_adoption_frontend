import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import message from '../../helper/message';
import './Register.css'; 
import { serverUrl } from '../..';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/'; 
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverUrl}/auth/register`, { username, email, password });
      if (res.data.token) {
        
        localStorage.setItem('token', res.data.token);

        const decodedToken = jwtDecode(res.data.token);
        localStorage.setItem('userId', decodedToken.id);
        localStorage.setItem('username', decodedToken.username);
        localStorage.setItem('email', decodedToken.email);

        message("Registration Successful", "Welcome to the platform!", "success", "OK");
        window.location.href = '/'; 
      }
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Registration failed';
      
      message("Registration Failed", errorMsg, "error", "OK");
      console.error(errorMsg);
    }
  };

  return (
    <div className="register-container"> 
      <div className="row ">
        <div className="col-md-6">
          <div className="card custom-card"> 
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
