import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LibSys</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Registration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/adminlogin">Admin Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/userlogin">User Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addbooks">Add Books</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/books">Books</Link>
        </li>
      </ul>
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
