import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

function Header() {
  return (
    <header className="header">
      <div className="u-container header-inner">
        <div className="brand">Recrunomic</div>
        <nav className="nav">
          <NavLink to="/" end>What We Offer</NavLink>
          <NavLink to="/who-we-serve">Who We Serve</NavLink>
          <NavLink to="/why-recrunomic">Why Recrunomic</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="u-container cols">
        <div>
          <div className="brand">Recrunomic</div>
          <p>© 2025 Recrunomic. All rights reserved.</p>
        </div>
        <div>
          <strong>Quick Links</strong>
          <div><NavLink to="/">Services</NavLink></div>
          <div><NavLink to="/resources">Resources</NavLink></div>
          <div><NavLink to="/contact">Contact</NavLink></div>
          <div><NavLink to="/privacy-policy">Privacy Policy</NavLink></div>
        </div>
        <div>
          <strong>Social</strong>
          <div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div>
          <div><a href="https://x.com" target="_blank" rel="noreferrer">X</a></div>
          <div><a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a></div>
        </div>
      </div>
    </footer>
  )
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="u-container">
          <h1>HR & Recruitment Services that Empower Your Business</h1>
          <p>
            Hiring. Onboarding. Payroll support. Compliance. At Recrunomic, we simplify HR so you can focus on growth. Whether you need quick answers or end-to-end solutions, we’re here for you.
          </p>
          <div className="hero-cta">
            <NavLink to="/contact#quote" className="u-btn u-btn-primary">Get a Quote</NavLink>
            <NavLink to="/contact#consultation" className="u-btn u-btn-outline">Book a Consultation</NavLink>
          </div>
        </div>
      </section>

      <section className="section" id="what-we-offer">
        <div className="u-container">
          <h2>What We Offer</h2>
          <div className="cards">
            <div className="card">
              <h3>Recruitment Solutions</h3>
              <ul>
                <li>End-to-end hiring support: sourcing, screening, and selection</li>
                <li>Job postings across multiple platforms for maximum visibility</li>
                <li>Access to a pre-screened talent pool</li>
                <li>Virtual interview coordination and assessments</li>
              </ul>
            </div>
            <div className="card">
              <h3>HR Advisory & Compliance</h3>
              <ul>
                <li>Employee handbook creation & policy drafting</li>
                <li>Labor law compliance (FLSA, Shops & Establishment, Maternity Benefit, PF/ESI, etc.)</li>
                <li>Proactive compliance alerts</li>
                <li>Employer & employee training modules (POSH, workplace ethics, etc.)</li>
                <li>Legal assistance through partnered experts</li>
              </ul>
            </div>
            <div className="card">
              <h3>Payroll & Employee Benefits Support</h3>
              <ul>
                <li>Payroll processing (setup, calculations, compliance filing)</li>
                <li>Salary structuring & tax optimization</li>
                <li>Support for employee benefits: health, wellness, gratuity, PF, and retirement plans</li>
                <li>Partner tie-ups for group insurance & EAPs</li>
              </ul>
            </div>
            <div className="card">
              <h3>Talent & Performance Management</h3>
              <ul>
                <li>Structured onboarding programs</li>
                <li>Goal setting & performance evaluation frameworks</li>
                <li>Leadership training & employee engagement initiatives</li>
                <li>Retention strategies and career progression planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="who-we-serve">
        <div className="u-container">
          <h2>Who We Serve</h2>
          <ul>
            <li>Startups – Build your HR foundation from day one</li>
            <li>SMEs – Streamline compliance, payroll & hiring without extra overhead</li>
            <li>Growing Enterprises – Scale with HR systems and strategic workforce planning</li>
            <li>Large Enterprises & Corporates – Comprehensive HR solutions for large teams</li>
            <li>Industry Leaders & Blue-Chip Companies – Trusted, enterprise-grade HR support</li>
            <li>Manufacturing Sector – Specialized HR, compliance, and workforce management</li>
          </ul>
        </div>
      </section>

      <section className="section" id="why-recrunomic">
        <div className="u-container">
          <h2>Why Recrunomic</h2>
          <div>
            <span className="u-badge">End-to-end HR partner</span>
            <span className="u-badge">Tailored for SMBs & growing teams</span>
            <span className="u-badge">Expert labor law guidance</span>
            <span className="u-badge">Affordable & scalable</span>
            <span className="u-badge">Tech-driven automation</span>
          </div>
        </div>
      </section>

      <section className="section" id="resources">
        <div className="u-container">
          <h2>Resources</h2>
          <NavLink to="/resources" className="u-btn u-btn-outline">Download Free HR Guide</NavLink>
        </div>
      </section>

      <section className="section" id="about">
        <div className="u-container">
          <h2>About Us</h2>
          <p>
            At Recrunomic, we believe HR is more than policies and payroll—it’s about building strong organizations through people. Our mission is to simplify HR for businesses of all sizes and help them attract, retain, and grow top talent.
          </p>
        </div>
      </section>

      <section className="section" id="get-started">
        <div className="u-container">
          <h2>Get Started</h2>
          <div className="hero-cta">
            <NavLink to="/pricing" className="u-btn u-btn-primary">Get Pricing</NavLink>
            <NavLink to="/contact" className="u-btn u-btn-outline">Schedule a Call</NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

function Resources() {
  return (
    <div className="u-container section">
      <h2>Resources</h2>
      <p>Guides & Templates, Webinars & Workshops, Insights Blog.</p>
    </div>
  )
}

function About() {
  return (
    <div className="u-container section">
      <h2>About Us</h2>
      <p>We partner with businesses to build strong organizations through people.</p>
    </div>
  )
}

function Contact() {
  return (
    <div className="u-container section">
      <h2>Contact</h2>
      <p>Reach out for quotes and consultations.</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
