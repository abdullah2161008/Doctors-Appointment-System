import "./Login.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="container-fluid background">
      <div className="col main-col">
        <div className="row main-card">
          <div className="col">
            <h3>Create Account</h3>
            <p>Sign up to get started</p>

            {/* Toggle Buttons */}
            <div className="btn-switch">
              <Link to="/Login" className="btn btn-outline-primary me-2">Login</Link>
              <Link to="/Signup" className="btn btn-primary">Signup</Link>
            </div>

            <form>
              <div className="mb-3">
                <label htmlFor="name">Full Name</label>
                <input
                  type="string"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="string"
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