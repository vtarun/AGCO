export default function Services() {
  return (
    <div className="container" style={{padding:'2rem 0'}}>
      <h1>Our services</h1>
      <p className="nav-link" style={{marginTop:'0.5rem'}}>Tailored solutions for every hiring stage.</p>

      <div className="grid" style={{marginTop:'1.5rem'}}>
        <div className="card">
          <h3>Executive Search</h3>
          <p>Targeted approach to find leaders who drive outcomes.</p>
        </div>
        <div className="card">
          <h3>Tech Recruitment</h3>
          <p>Specialized sourcing for engineers, data, and product roles.</p>
        </div>
        <div className="card">
          <h3>RPO (Recruitment Process Outsourcing)</h3>
          <p>Plug-in recruitment squads to scale your hiring fast.</p>
        </div>
      </div>
    </div>
  )
}
