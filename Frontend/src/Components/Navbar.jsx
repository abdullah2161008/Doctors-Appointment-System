import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="container-fluid Navbar sticky-top navbar navbar-expand-lg">
      <div className="row h-100 w-100 align-items-center">

        {/* Logo */}
        <div className="col-6 col-lg-3 Navbar-left">
          <i className="fa-solid fa-hand-holding-medical"></i>
          <h3>HealthCare Plus</h3>
        </div>

        {/* Hamburger Button - sirf mobile pe dikhega */}
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
            <a href="/Home">Home</a>
            <a href="/Services">Services</a>
            <a href="/Doctors">Our Doctors</a>
            <a href="/appointment">Book Appointment</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        {/* Phone + Book Now - mobile pe nahi dikhega */}
        <div className="col-lg-3 Navbar-end d-none d-lg-flex">
          <i className="fa-solid fa-phone"></i>
          <span>0306-4016103</span>
          <button type="button" className="btn btn-primary">Book Now</button>
        </div>

      </div>
    </nav>
  )
}