import React from 'react'

export default function EmployerHomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-6">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Add Requirements</h4>
                            <a class="button is-primary is-medium" href="#">Coming Soon</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="column is-6">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Search Candidate</h4>
                            <a class="button is-primary is-medium" href="/candidatesearch">Search Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
