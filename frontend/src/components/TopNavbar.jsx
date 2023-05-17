import React from 'react'
import { Link } from 'react-router-dom'

function TopNavbar() {
  return (
    <div className='container'>
        <Link to='/'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/595/164/small/04012019-28.jpg" width='100px' alt="" srcset="" />
        </Link>
    </div>
  )
}

export default TopNavbar