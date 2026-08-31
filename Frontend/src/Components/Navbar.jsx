import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="container-fluid Navbar sticky-top">
      <div className="row h-100">

        <div className="col-3 Navbar-left">
          <i className="fa-solid fa-hand-holding-medical"></i>
          <h3>HealthCare Plus</h3>
        </div>

        <div className="col-6 Navbar-mid">
          <a href="/Home">Home</a>
          <a href="/Services">Services</a>
          <a href="/Doctors">Our Doctors</a>
          <a href="/appointment">Book Appointment</a>
          <a href="/contact">Contact</a>
        </div>
          
        <div className="col-3 Navbar-end">
              <i className="fa-solid fa-phone"></i>
              <span>0306-4016103</span>
              <button type="button" class="btn btn-primary">Book Now</button>
        </div>
        
      </div>
    </div>
  )
}