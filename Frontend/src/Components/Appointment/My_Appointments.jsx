import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/appointments/my-appointments", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          navigate("/Login");
        }
        return res.json();
      })
      .then((data) => setAppointments(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map((appt) => (
          <div key={appt._id} className="card mb-3 p-3">
            <h5>{appt.fullName}</h5>
            <p>Date: {appt.date}</p>
            <p>Time: {appt.time}</p>
            <p>Service: {appt.service}</p>
            <p>Doctor: {appt.doctor}</p>
            <p>Status: {appt.status}</p>
          </div>
        ))
      )}
    </div>
  );
}