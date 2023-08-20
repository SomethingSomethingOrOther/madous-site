import React from 'react'
import logo from "../assets.js/logoM.png"
import {useNavigate} from "react-router-dom"
import "./footer.css"

function Footer() {
    const navigate=useNavigate()

    const handleHomeNavigate=()=>{
        navigate("/")
    }

    const handleAboutNavigate=()=>{
        navigate("/about")
    }

    const handleContactNavigate=()=>{
        navigate("/contact")
    }
  return (
    <div className="footer">
        <div className="footer_logo">
        <img style={{cursor:"pointer"}}onClick={handleHomeNavigate} src={logo} alt="footerlogo" />

        </div>
        <div className="footer_links">
          <p className="footer_link1"onClick={handleHomeNavigate}>Home</p>
          <p className="footer_link2"onClick={handleContactNavigate}>Contact Me</p>
          <p className="footer_link3"onClick={handleAboutNavigate}>About Me</p>
        </div>
    </div>
  )
}

export default Footer