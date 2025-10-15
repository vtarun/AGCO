export default function WhoWeServe() {
  return (
    <div className="container" style={{padding:'2rem 0'}}>
      <h1>Who we serve</h1>
      <p className="nav-link" style={{marginTop:'0.5rem'}}>We partner with startups, scale-ups, and enterprises across industries.</p>
      <div className="grid" style={{marginTop:'1.5rem'}}>
        <div className="card"><h3>Startups</h3><p>Build your founding team quickly with high-signal profiles.</p></div>
        <div className="card"><h3>Scale-ups</h3><p>Scale hiring with predictable pipelines and robust processes.</p></div>
        <div className="card"><h3>Enterprises</h3><p>Specialized hiring for transformation and innovation teams.</p></div>
      </div>
    </div>
  )
}
