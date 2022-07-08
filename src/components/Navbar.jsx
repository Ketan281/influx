import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='NavBar'>
        <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/archive/a/a7/20220125121206%21React-icon.svg" alt="react logo" />
            <h1 className='textLogo'>React</h1>
            <div className="userName">
            <h4>
                John_wick
            </h4>
            <p>developer</p>
        </div>
        </div>

     </div>
  )
}

export default Navbar