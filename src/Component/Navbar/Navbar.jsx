import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar({ userData, logout }) {
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top top-0">
      <div className="container">
        <Link className="navbar-brand" to=''><img src="./images/logo.png" className='navbar-brand' alt="" />Game Over</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
          {userData ? <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item px-2'><Link to='' className='nav-link'>Home</Link></li>
            <li className='nav-item px-2'><Link to='/games/all'className='nav-link'>All</Link></li>
            <li className="nav-item dropdown px-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Platforms
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to='/games/Platforms/pc'>PC</Link></li>
                <li><Link className="dropdown-item" to='/games/Platforms/browser'>Browser</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown px-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort-by
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item"to='/games/sort-by/release-date'>release-date</Link></li>
                <li><Link className="dropdown-item" to='/games/sort-by/popularity'>popularity</Link></li>
                <li><Link className="dropdown-item"to='/games/sort-by/alphabetical'>alphabetical</Link></li>
                <li><Link className="dropdown-item" to='/games/sort-by/relevance'>relevance</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown px-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item"to='/games/categories/racing'>racing</Link></li>
                <li><Link className="dropdown-item" to='/games/categories/sports'>sports</Link></li>
                <li><Link className="dropdown-item"to='/games/categories/social'>social</Link></li>
                <li><Link className="dropdown-item" to='/games/categories/shooter'>shooter</Link></li>
                <li><Link className="dropdown-item"to='/games/categories/open-world'>open-world</Link></li>
                <li><Link className="dropdown-item" to='/games/categories/zombie'>zombie</Link></li>
                <li><Link className="dropdown-item"to='/games/categories/action-rpg'>action-rpg</Link></li>
                <li><Link className="dropdown-item" to='/games/categories/action'>action</Link></li>
                <li><Link className="dropdown-item"to='/games/categories/flight'>flight</Link></li>
                <li><Link className="dropdown-item" to='/games/categories/battle-royale'>battle-royale</Link></li>
              </ul>
            </li>

          </ul> : ''}

          <ul className="navbar-nav mb-2 ms-auto mb-lg-0">
            <ul className='navbar-nav mb-2 ms-auto mb-lg-0'>
              {userData ? <li className='px-2'><span onClick={logout} className='btn btn-outline-primary pointer'>Logout</span></li> : <>
                <li className='px-2'><Link to='/login'className='btn btn-outline-secondary'>Login</Link></li>
                <li className='px-2'><Link to='/register' className='btn btn-outline-primary'>Register</Link></li></>}
            </ul>

          </ul>

        </div>
      </div>
    </nav>
  </>

}
