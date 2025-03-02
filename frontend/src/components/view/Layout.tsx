import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='overflow-hidden'>
        <NavBar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout