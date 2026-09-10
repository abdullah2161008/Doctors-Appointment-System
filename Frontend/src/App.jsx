import './App.css'
import Appointment_Page from './Components/Appointment/Apointment_Page'
import Doctors_Page from './Components/Doctors/Doctors_Page'
import Home_Page from './Components/Home/HomePage'
import Services_Page from './Components/Services/ServicesPage'
import Layout from './Components/Layouts'
import Login from "./Components/Login/Login_Page.jsx"
import SignUp from "./Components/Login/Signup_Page.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Routes WITH Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path='/home' element={<Home_Page />} />
          <Route path='/Services' element={<Services_Page />} />
          <Route path='/Doctors' element={<Doctors_Page />} />
          <Route path='/Appointment' element={<Appointment_Page />} />
          <Route path='*' element={<h1>404 - Page Not Found</h1>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Signup' element={<SignUp/>}/>
        </Route>

        {/* {if you want to show something without navbar and footer then write below here } */}


      </Routes>
    </BrowserRouter>
  )
}

export default App;