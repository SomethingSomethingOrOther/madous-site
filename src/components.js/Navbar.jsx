import React from 'react'
import {Link} from "react-router-dom"
import logo from "../assets.js/logoM.png"
import './Navbar.css'
import {useState} from "react"


function Navbar() {
    const [bool,setBool] = useState(false)

    
  const closeIcon="https://www.svgrepo.com/show/522388/close.svg"
  const hamburgerIcon="https://www.svgrepo.com/show/506800/burger-menu.svg"
  return (
    <div className="navbar">
       
        <div className="navbar_links">
        <Link className="links"to="/">Home</Link>
        <Link className="links"to="/about">About Me</Link>
        <Link className="links"to="/contact">Contact Me</Link>
          </div>
          <div className="outer_mobile_menu_div">
            <img 
            onClick={()=>setBool(boolean=>!boolean)}
            className="hamburger-icon" src={bool ? closeIcon:hamburgerIcon} alt="menu" />
          <div className={bool ? "mobile_navbar_links_active":"mobile_navbar_links_notActive"}>
        <Link className="mobile_links"to="/">Home</Link>
        <Link className="mobile_links"to="/about">About Me</Link>
        <Link className="mobile_links"to="/contact">Contact Me</Link>
          </div>
          </div>
          <div className="navbar_image">
            <img src={logo} alt="logo" />
        </div>
        <div className="navbar_button">
            <a href="tel:123-456-7890">
                <button className="navbutton">Call Now: 123-456-7890</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar