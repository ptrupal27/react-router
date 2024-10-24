import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home page.</h1>
      <Link to="/NavBar">go to navbar</Link>
    </div>
  )
}
