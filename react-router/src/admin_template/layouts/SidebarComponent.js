
import React from 'react'
import { NavLink as Link } from 'react-router-dom'

export default function SidebarComponent() {
    return (
        <>
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <Link to="/" className="sidebar-brand" href="index.html">
                        <span className="align-middle">Admin Panel</span>
                    </Link>

                    <ul className="sidebar-nav">
                        <li className="sidebar-item">
                            <Link to="/" className="sidebar-link" href="index.html">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle">Dashboard</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/users" className="sidebar-link" href="index.html">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle">Users</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/users/profile/2/JS" className="sidebar-link" href="index.html">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle ms-3">Profile</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/users/about" className="sidebar-link" href="index.html">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle ms-3">About</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/posts" className="sidebar-link" href="index.html">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle">Posts</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/create-post" className="sidebar-link" href="index.html">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle">Create Post</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/counter" className="sidebar-link" href="index.html">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle">Counter</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
