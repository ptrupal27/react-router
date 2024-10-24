import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul className="d-flex">
                <li className="navbar"> <Link to="/home">Home</Link></li>
                <li className="navbar"><Link to="/about" >About</Link></li>
            </ul>
        </div>
    )
}
