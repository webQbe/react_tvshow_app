import React from 'react'
import logo from '../../img/logo.png' /* import logo image */

const Header = () => {
  return (
    <header className='center'>
        <img src={logo} alt="" /> {/* display logo */}
    </header>
  )
}

export default Header