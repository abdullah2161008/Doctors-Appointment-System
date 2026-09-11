import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';

export default function Signup() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  // ✅ handleChange missing tha
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Account Created Successfully! 🎉");
        navigate("/home");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container-fluid background">
      <div className="col main-col">
        <div className="row main-card">
          <div className="col">
            <h3>Create Account</h3>
            <p>Sign up to get started</p>

            <div className="btn-switch">
              <Link to="/Login" className="btn btn-outline-primary me-2">Login</Link>
              <Link to="/Signup" className="btn btn-primary">Signup</Link>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Full Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  type="email" // ✅ email type
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">Sign Up</button>

              <p className="mt-3 text-center">
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}