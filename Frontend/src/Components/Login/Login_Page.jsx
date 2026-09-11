import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import { toast } from 'react-toastify';

export default function Login() {
  
  const navigate = useNavigate();
  const [loginData,setLoginData] = useState({
    email:"",
    password:""
  });
  const handleChange=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
        credentials:"include",
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Login Successful! "); // ✅
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
    
  }
  return (
    <div className="container-fluid background">
      <div className="col main-col">
        <div className="row main-card">
          <div className="col">
            <h3>Welcome Back</h3>
            <p>Sign in to continue to your account</p>

            {/* Toggle Buttons */}
            <div className="btn-switch">
              <Link to="/Login" className="btn btn-primary me-2">Login</Link>
              <Link to="/Signup" className="btn btn-outline-primary">Signup</Link>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="text-end mb-3">
                <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
              </div>

              <button type="submit" className="btn btn-primary w-100">Login</button>

              <p className="mt-3 text-center">
                Don't have an account? <Link to="/Signup">Sign up</Link>
              </p>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}