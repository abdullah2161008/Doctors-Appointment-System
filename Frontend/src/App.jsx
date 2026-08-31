import './App.css'
import Navbar from './Components/Navbar'
import Appointment_Page from './Components/Appointment/Apointment_Page'
import Contact_Page from './Components/Contact/Contact_Page'
import Doctors_Page from './Components/Doctors/Doctors_Page'
import Home_Page from './Components/Home/HomePage'
import Services_Page from './Components/Services/ServicesPage'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home_Page></Home_Page>
      <Services_Page></Services_Page>
      <Doctors_Page></Doctors_Page>
      <Appointment_Page></Appointment_Page>
      <Contact_Page></Contact_Page>
    </>
  )
}

export default App
