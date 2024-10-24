
import React from 'react'
import { NavLink as Link, Outlet } from 'react-router-dom'

export default function AboutComponent() {
    return (
        <>
            <div>
                About Component
            </div>
            <ul className='d-flex m-2'>
                <li className="nav pe-4"><Link  to="/users/about/education">Education</Link></li>
                <li className="nav"></li><Link to="/users/about/job">Job</Link>
            </ul>
            <div className='m-2'>
                <Outlet />
            </div>
        </>
    )
}
