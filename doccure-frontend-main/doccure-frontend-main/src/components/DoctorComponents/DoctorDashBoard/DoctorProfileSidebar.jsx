import React from 'react'
import img from "./../../../Assets/blank-profile-picture-g05926a0d9_640.png"
import { Link } from 'react-router-dom'
function DoctorProfileSidebar() {
  return (
    <>
      <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <Link  className="booking-doc-img">
                      <img
                        src={img}
                        alt="User"
                      />
                    </Link>
                    <div className="">
                      <h3>Dr. Gokul das</h3>
                      <div className="patient-details">
                        {/* <h5 className="mb-0">
                          BDS, MDS - Oral &amp; Maxillofacial Surgery
                        </h5> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li>
                        <Link href="">
                          <i className="fas fa-columns" />
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="fas fa-calendar-check" />
                          <span>Appointments</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="fas fa-user-injured" />
                          <span>My Patients</span>
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="">
                          <i className="fas fa-hourglass-start" />
                          <span>Schedule Timings</span>
                        </Link>
                      </li>
                     
                    
                      <li>
                        <Link to="/chating">
                          <i className="fas fa-comments" />
                          <span>Message</span>
                          {/* <small className="unread-msg">23</small> */}
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="fas fa-user-cog" />
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                 
                      <li>
                        <Link href="">
                          <i className="fas fa-lock" />
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <i className="fas fa-sign-out-alt" />
                          <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
    </>
  )
}

export default DoctorProfileSidebar
