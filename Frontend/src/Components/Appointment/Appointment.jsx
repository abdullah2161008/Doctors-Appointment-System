export default function Appointment() {
  return (
    <>
      <div className="container">
        <div className="row appointment">
          <div className="col-6 appointment-left">
            <p className="p1-top">Book Appointment</p>
            <p className="p1">Schedule Your Visit</p>
            <p className="p1-last">
              Fill out the form to book an appointment with our expert doctors.
              We will confirm your appointment within 24 hours.
            </p>
            <div className="row after-p1">
              <div className="col-2 calender  ">
                <i class="fa-regular fa-calendar"></i>
              </div>
              <div className="col-10">
                <h4>Flexible Scheduling</h4>
                <p className="calender-p">
                  Choose a date and time that works best for your schedule
                </p>
              </div>
            </div>
            <div className="row after-p1">
              <div className="col-2 calender  ">
                <i class="fa-regular fa-clock"></i>
              </div>
              <div className="col-10">
                <h4>Quick Confirmation</h4>
                <p className="calender-p">
                  Receive appointment confirmation via email and SMS
                </p>
              </div>
            </div>
            <div className="row after-p1">
              <div className="col-2 calender expert-care ">
                <i class="fa-regular fa-user"></i>
              </div>
              <div className="col-10">
                <h4>Expert Care</h4>
                <p className="calender-p">
                  Meet with experienced doctors in your chosen specialty
                </p>
              </div>
            </div>
          </div>

          {/* ---------------- */}

          <div className="col-6 appointment-right">
            <form action="" className="form">
              <div className="input-group mb-3">
                <label className="label" htmlFor="fullName">Full Name*</label>
                <div className="input-box">
                  <i className="fa-regular fa-user"></i>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="inline-inputs">
                <div className="input-group mb-3">
                  <label className="label" htmlFor="email">Email*</label>
                  <div className="input-box">
                    <i className="fa-regular fa-envelope"></i>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="khan@example.com"
                    />
                  </div>
                </div>

                <div className="input-group mb-3">
                  <label className="label" htmlFor="phone">Phone*</label>
                  <div className="input-box">
                    <i className="fa-regular fa-envelope"></i>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      placeholder="+92-0000000000"
                    />
                  </div>

                </div>
              </div>
              
              
              <div className="inline-inputs">
                <div className="input-group mb-3">
                  <label className="label" htmlFor="date">Preferred Date *</label>
                  <div className="input-box">
                    <i class="fa-regular fa-calendar"></i>
                    <input
                        type="date"
                        id="date"
                        name="date"
                    />
                  </div>
                </div>

                <div className="input-group mb-3">
                  <label className="label" htmlFor="time">Preferred Time *</label>
                  <div className="input-box">
                    <i class="fa-regular fa-clock"></i>
                    <input
                      type="time"
                      id="time"
                      name="time"
                    />
                  </div>

                </div>
              </div>


              <div className="input-group mb-3">
                <label className="label" htmlFor="department">Department *</label>
                    <select className="input-box-department" id="department" name="service">
                        <option value="">Select a department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Orthopedics">Orthopedics</option>
                    </select>
              </div>

              <div className="input-group mb-3">
                <label className="label" htmlFor="doctor">Preferred Doctor (Optional)</label>
                    <select className="input-box-department" id="doctor" name="doctor">
                        <option value="">Any Available Doctor</option>
                        <option value="dr1">Dr. Sarah Johnson</option>
                        <option value="dr2">Dr. Michael Chen</option>
                        <option value="dr3">Dr. Emily</option>
                        <option value="dr4">Dr. James Wilson</option>
                    </select>
              </div>

              <div className="input-group mb-3">
                <label className="label" htmlFor="message">Additional Message (Optional)</label>
                <div className="input-box">
                  <i className="fa-regular fa-message textbox-icon"></i>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message..."
                  />
                </div>
              </div>

              <button className="form-btn" for="submit">Book Appointment</button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
