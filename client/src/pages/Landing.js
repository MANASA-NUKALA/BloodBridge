import React from 'react'
import { Link } from 'react-router-dom'

const Landing = ()=>{
  return (
    <div>
      <section className="landing-hero">
        <div className="left container">
          <h1 style={{color:'#6b0f0f',fontWeight:700,fontSize:'2.4rem'}}>Blood Bridge</h1>
          <p className="lead">A simple platform to register donors, manage blood inventory, and connect hospitals to supplies.</p>
          <p className="text-muted">Join as a donor, hospital, or organisation. Track donations and inventory in real time so blood reaches patients when needed most.</p>
          <div className="hero-cta">
            <Link to="/register" className="btn btn-info me-3">Get Started</Link>
            <Link to="/login" className="btn btn-outline-secondary">Sign in</Link>
          </div>
        </div>
        <div className="right">
          <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f5c8e8f6f4a1d2a2e7a5e9b4c1f2a6d" alt="blood donation" style={{width:'90%',borderRadius:12,boxShadow:'0 12px 36px rgba(16,24,40,0.12)'}}/>
        </div>
      </section>

      <section className="container">
        <div className="features-grid">
          <div className="feature-card">
            <i className="fa-solid fa-user-plus"></i>
            <div>
              <h6>Register</h6>
              <p>Sign up quickly as donor, hospital, organisation or admin.</p>
            </div>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-hand-holding-droplet"></i>
            <div>
              <h6>Donate</h6>
              <p>Record donations to increase available inventory.</p>
            </div>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-clipboard-list-check"></i>
            <div>
              <h6>Manage Inventory</h6>
              <p>Admins can track IN/OUT records and maintain stock levels.</p>
            </div>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-hospital"></i>
            <div>
              <h6>Supply Hospitals</h6>
              <p>Hospitals and organisations request blood as needed.</p>
            </div>
          </div>
        </div>

        <div className="landing-footer-cta">
          <h4>Ready to help save lives?</h4>
          <p>Register now and start contributing to your local blood supply.</p>
          <Link to="/register" className="btn btn-light">Create an account</Link>
        </div>
      </section>
    </div>
  )
}

export default Landing
