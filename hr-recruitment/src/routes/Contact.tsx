export default function Contact() {
  return (
    <div className="container" style={{padding:'2rem 0'}}>
      <h1>Contact us</h1>
      <p className="nav-link" style={{marginTop:'0.5rem'}}>We'd love to learn about your hiring needs.</p>
      <form className="card" style={{marginTop:'1rem', display:'grid', gap:'0.75rem'}} onSubmit={(e)=>e.preventDefault()}>
        <label>
          <span>Name</span>
          <input style={{width:'100%', padding:'0.6rem', borderRadius:8, border:'1px solid #334155', background:'transparent', color:'#fff'}} placeholder="Jane Doe" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" style={{width:'100%', padding:'0.6rem', borderRadius:8, border:'1px solid #334155', background:'transparent', color:'#fff'}} placeholder="jane@company.com" />
        </label>
        <label>
          <span>Message</span>
          <textarea rows={5} style={{width:'100%', padding:'0.6rem', borderRadius:8, border:'1px solid #334155', background:'transparent', color:'#fff'}} placeholder="Tell us about your roles" />
        </label>
        <button className="cta-btn" style={{width:'fit-content'}}>Send</button>
      </form>
    </div>
  )
}
