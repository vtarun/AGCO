import { NavLink, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div>
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="brand">Linkrow</div>
          <div className="nav-links">
            <NavLink to="/services" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Our services</NavLink>
            <NavLink to="/who-we-serve" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Who we serve</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About us</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link cta-btn'}>Contact us</NavLink>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="container">
          <div>© {new Date().getFullYear()} Linkrow HR & Recruitment</div>
        </div>
      </footer>
    </div>
  )
}
