import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
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
            <form>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
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