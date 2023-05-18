import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IconContext } from "react-icons"
import { Link } from 'react-router-dom'
import logo from "../assets/fitness-logo.png";
import Button from 'react-bootstrap/Button';
function TopNavbar() {
  return (
    <header className='container-fluid'>
      <div className='container'>
        <Link to='/'>
          <img src={logo} width='100px' alt="logo" />
        </Link>
        <div className='nav-side'>
          <IconContext.Provider value={{ style: { fontSize: '30px' } }}>
            <div>
              <FaUserCircle />
            </div>
          </IconContext.Provider>
          <h5>Hammad</h5>
          <Button className='nav-btn'>Signout</Button>
        </div>

      </div>
    </header>
  )
}

export default TopNavbar