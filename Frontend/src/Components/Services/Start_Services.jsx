export default function Start() {
  return (
    <div className="container-fluid service-start">
      <div className="row justify-content-center">
        <div className="service-col">
          <p className="service-tag">Our Services</p>
          <h2 className="service-heading">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="service-desc">
            We offer a wide range of medical services to meet all your
            healthcare needs under one roof
          </p>
        </div>
        <div className="row emotions">
          <div className="col-3 expert-doctors">
            <i className="fa-solid fa-user-group"></i>
            <h3>50+</h3>
            <p>Expert Doctors</p>
          </div>
          <div className="col-3 happy-patients">
            <i class="fa-solid fa-heart-pulse"></i>
            <h3>1000+</h3>
            <p>Happy Patients</p>
          </div>
          <div className="col-3 specialities">
            <i className="fa-solid fa-stethoscope"></i>
            <h3>20+</h3>
            <p>Specialities</p>
          </div>
          <div className="col-3 emergency-care">
            <i class="fa-regular fa-clock"></i>
            <h3>24/7</h3>
            <p>Emergency Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}
