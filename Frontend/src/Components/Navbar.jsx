import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="container-fluid Navbar sticky-top navbar navbar-expand-lg">
      <div className="row h-100 w-100 align-items-center">

        {/* Logo */}
        <div className="col-6 col-lg-3 Navbar-left">
          <i className="fa-solid fa-hand-holding-medical"></i>
          <h3>HealthCare Plus</h3>
        </div>

        {/* Hamburger Button */}
        <div className="col-6 d-flex justify-content-end d-lg-none">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Nav Links */}
        <div className="collapse navbar-collapse col-lg-6" id="navbarNav">
          <div className="Navbar-mid">
            <NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
            <NavLink to="/Services" className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink>
            <NavLink to="/Doctors" className={({ isActive }) => isActive ? "active-link" : ""}>Our Doctors</NavLink>
            <NavLink to="/Appointment" className={({ isActive }) => isActive ? "active-link" : ""}>Book Appointment</NavLink>
          </div>

          {/* Login/Signup visible on mobile inside collapsed menu */}
          <div className="d-flex d-lg-none mt-3 gap-2">
            <Link to="/Login" className="btn btn-outline-primary">Login</Link>
            <Link to="/Signup" className="btn btn-primary">Signup</Link>
          </div>
        </div>

        {/* Login/Signup on desktop */}
        <div className="col-lg-3 Navbar-end d-none d-lg-flex">
          <Link to="/Login" className="btn btn-outline-primary me-2">Login</Link>
          <Link to="/Signup" className="btn btn-primary">Signup</Link>
        </div>

      </div>
    </nav>
  );
}