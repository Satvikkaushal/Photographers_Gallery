import React from 'react'
import Home from '../core/Home'
import { IoMdAdd } from 'react-icons/io'
import '../Styles/AdminDashboard.css'

export default function AdminDashboard() {
    return (
        <Home>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="sidebar-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        <span data-feather="home"></span>
              Dashboard <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/categories">
                                        <span data-feather="file"></span>
               Categories
            </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/services">
                                        <span data-feather="shopping-cart"></span>
              Services
            </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/users">
                                        <span data-feather="users"></span>
              Customers
            </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/admin/sellers">
                                        <span data-feather="bar-chart-2"></span>
              Sellers
            </a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="users"></span>
              Customers
            </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="users"></span>
              Customers
            </a>
                                </li> */}
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Saved reports</span>
                                <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
              Current month
            </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
              Last quarter
            </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
              Social engagement
            </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
              Year-end sale
            </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group mr-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar"></span>
            This week
          </button>
                            </div>
                        </div>

                        <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
                    </main>
                </div>
            </div>
        </Home>
    )
}
