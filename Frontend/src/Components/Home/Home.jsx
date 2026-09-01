import "./Home.css";

export default function Home() {
  return (
    <div className="container-fluid Home">
      <div className="row">
        <div className="col-6 Home-left">
          <h3 className="home-left-para1">Your Health, Our Priority</h3>
          <h3 className="home-left-para2">
            Quality Healthcare Services at Your Fingertips
          </h3>
          <h3 className="home-left-para3">
            Book appointments with top-rated doctors, access specialized care,
            and manage your health journey all in one place. Experience
            healthcare that puts you first.
          </h3>
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-3 easy-booking">
                  <i className="fa-regular fa-calendar"></i>
                </div>
                <div className="col-8">
                  <h3 className="easy-booking-h1">Easy Booking</h3>
                  <h3 className="easy-booking-h2">24/7 Online</h3>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-3 easy-booking">
                  <i class="fa-regular fa-clock"></i>
                </div>
                <div className="col-8">
                  <h3 className="easy-booking-h1">Quick Service</h3>
                  <h3 className="easy-booking-h2">Same Day</h3>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-3 easy-booking">
                  <i class="fa-solid fa-shield-halved"></i>
                </div>
                <div className="col-8">
                  <h3 className="easy-booking-h1">Certified</h3>
                  <h3 className="easy-booking-h2">Top Doctors</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row left-end-btns">
            <div className="col-5 ">
                <button type="button" class="btn btn-primary left-end-p-btn">Book Appointment</button>
            </div>
            <div className="col-4">
                <button type="button" class="btn btn-outline-secondary left-end-s-btn">Our Services</button>
            </div>
          </div>
        </div>
        <div className="col-6 Home-right">
          <img src="/olga-guryanova-tMFeatBSS4s-unsplash.jpg" />
        </div>
      </div>
    </div>
  );
}
