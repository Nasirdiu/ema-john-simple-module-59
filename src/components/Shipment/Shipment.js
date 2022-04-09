import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Shipment = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirampassword, setConfiramPassword] = useState("");
    const [error, setError] = useState("");
  
    const nagative = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePassword = (event) => {
        setPassword(event.target.value);
      };
      const handleConfiramPassword = (event) => {
        setConfiramPassword(event.target.value);
      };

      const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirampassword) {
          setError("Your two password did not match");
          return;
        }
        if (password.length < 6) {
          setError("please 6 characters or longer");
          return;
        }
        createUserWithEmailAndPassword(email, password).then((result) => {
          console.log("user cereat");
        });
      };
  
    
    return (
        <div className="from-container">
      <div>
        <h1 className="from-title">Shipping Information</h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="Password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              onBlur={handleConfiramPassword}
              type="password"
              name="Password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          
          <input className="from-submit" type="submit" value="Login" required />
        </form>
        <p>
          AllReady Have and account?
          <Link className="from-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Shipment;