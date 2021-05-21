import React from 'react'

export default function CandidateHomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-6">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Profile</h4>
                            <a class="button is-success is-medium" href="/addcandidate">Manage Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="column is-6">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Projects</h4>
                            <a class="button is-success is-medium" href="/searchprojects">Search Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
