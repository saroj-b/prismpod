import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-6">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Candidates</h4>
                            <a href='/candidatehome'>Explore Candidate</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="column is-6">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Clients</h4>
                            <a href='/employerhome'>Explore Client</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
