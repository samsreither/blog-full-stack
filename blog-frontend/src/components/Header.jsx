import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src="" alt="" />
        </Link>
      </div>
    </nav>
  )
}

export default Header