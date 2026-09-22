import { useState } from "react";
import { toast } from 'react-toastify';
export default function Appointment() {
  const [appointment,setAppointment] = useState({
    fullName:"",
    email:"",
    phone:"",
    date:"",
    time:"",
    service:"",
    doctor:"",
    message:""
  });

  const handleChange = (event)=>{
    setAppointment({...appointment,[event.target.name]:event.target.value})
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8080/api/appointments/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointment),
      credentials: "include", // ✅ cookie bhejo
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Appointment Booked Successfully! 🎉");
    } else {
      toast.error(data.message);
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

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
                <i className="fa-regular fa-calendar"></i>
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
                <i className="fa-regular fa-clock"></i>
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
                <i className="fa-regular fa-user"></i>
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
            <form onSubmit={handleSubmit} className="form">
              <div className="input-group mb-3">
                <label className="label" htmlFor="fullName">Full Name*</label>
                <div className="input-box">
                  <i className="fa-regular fa-user"></i>
                  <input
                    onChange={handleChange}
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
                        onChange={handleChange}
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
                      onChange={handleChange}
                      type="tel"
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
                    <i className="fa-regular fa-calendar"></i>
                    <input
                        onChange={handleChange}
                        type="date"
                        id="date"
                        name="date"
                    />
                  </div>
                </div>

                <div className="input-group mb-3">
                  <label className="label" htmlFor="time">Preferred Time *</label>
                  <div className="input-box">
                    <i className="fa-regular fa-clock"></i>
                    <input
                      onChange={handleChange}
                      type="time"
                      id="time"
                      name="time"
                    />
                  </div>

                </div>
              </div>


              <div className="input-group mb-3">
                <label className="label" htmlFor="department">Department *</label>
                    <select onChange={handleChange} className="input-box-department" id="department" name="service">
                        <option value="">Select a department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Orthopedics">Orthopedics</option>
                    </select>
              </div>

              <div className="input-group mb-3">
                <label className="label" htmlFor="doctor">Preferred Doctor (Optional)</label>
                    <select onChange={handleChange} className="input-box-department" id="doctor" name="doctor">
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
                    onChange={handleChange}
                    id="message"
                    name="message"
                    placeholder="Enter your message..."
                  />
                </div>
              </div>

              <button className="form-btn" type="submit">Book Appointment</button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
