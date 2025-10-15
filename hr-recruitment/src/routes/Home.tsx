export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p>250+ trusted partners</p>
          <h1>
            Recruitment process which Empower Your Business.
          </h1>
          <p>
            We offer personalized HR solutions that connect top talent with the right opportunities, helping companies scale with confidence.
          </p>
          <div style={{display:'flex', gap:'0.75rem', marginTop:'1rem'}}>
            <a className="cta-btn" href="/contact">Contact us</a>
            <a className="nav-link" href="/services">Explore our services →</a>
          </div>
        </div>
      </section>

      <section className="container" style={{padding: '2rem 0'}}>
        <h2>Trusted by growing teams</h2>
        <div className="grid" style={{marginTop:'1rem'}}>
          <div className="card">End-to-end recruitment</div>
          <div className="card">Talent mapping</div>
          <div className="card">Employer branding</div>
        </div>
      </section>
    </>
  )
}
