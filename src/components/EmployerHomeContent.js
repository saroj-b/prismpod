import React from 'react'

export default function EmployerHomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Add Requirements</h4>
                            <a class="button is-success is-medium" href="/employeeprojectreq">Post New Requirement</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Browse Candidates</h4>
                            <a class="button is-success is-medium" href="/candidatesearch">Search Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Profile</h4>
                            <a class="button is-success is-medium" href="/employeepf">Manage Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
