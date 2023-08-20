import React from 'react'
import {heroImage} from "../assets.js/heroImage"


function About() {
  return (
    <>
    <div style={{marginTop:"5rem"}}>
      <h2 >All About Me:</h2>
    </div>
    <div>
      <img style={{marginTop:"5rem",borderRadius:"4rem",width:"25rem",height:"25rem"}} src={heroImage} alt="aboutimg" />
    </div>
    <div style={{fontSize:"2rem",fontFamily:"Montserrat",marginTop:"4rem",textAlign:"justify",padding:"2rem"}}>
      "Hello! I'm Madou (people call me <b>BITCH MADE</b>), a passionate alligator rapist with a love for nuts. 
      I thrive on the maddening scent of stinky balls, 
      and I'm dedicated to helping you achieve what I call 'bitch' status. Whether I'm teaching you 
      how to molest gators , or
      lick balls like me, I always bring a great attitude to everything I do. With a background in prostitution, I'm committed to satisfying you in all shapes and forms. 
      Let's work together!"
    </div>
    </>
  )
}

export default About