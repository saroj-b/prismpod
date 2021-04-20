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
                            <a class="button is-primary is-medium" href="/addcandidate">Setup Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="column is-6">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Projects</h4>
                            <a class="button is-primary is-medium" href="#">Search Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}