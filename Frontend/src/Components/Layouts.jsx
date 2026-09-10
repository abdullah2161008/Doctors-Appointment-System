// Components/Layout.jsx
import Navbar from './Navbar'
import Contact_Page from './Contact/Contact_Page'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* renders the matched child route */}
      <Contact_Page />
    </>
  )
}

export default Layout;