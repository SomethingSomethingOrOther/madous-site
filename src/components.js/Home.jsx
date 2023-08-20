import React from 'react'
import {heroImage,heroImage1} from "../assets.js/heroImage"
import Footer from "./footer"
import "./Home.css"

function Home() {
   const freedomImage="https://images.pexels.com/photos/3290067/pexels-photo-3290067.jpeg?auto=compress&cs=tinysrgb&w=600"
    const likeChocolate="https://images.pexels.com/photos/6036018/pexels-photo-6036018.jpeg?auto=compress&cs=tinysrgb&w=600"
  
   return (
    <div className="home">
        <div className="home_heading">
            <div className="home_heading_banner">
            <h6 >ALLIGATORS</h6>
           <h1 style={{fontSize:"2rem"}}>To Molest Alligators or Not. That is the Question! That is Why Your Here.</h1>
           <p style={{fontSize:"1.5rem"}}>To parts of me divided in equal strength, one want's to get down
            and dirty with alligators. <p>The other would prefer the sweet scent of 
            a ballsack that's gone unwashed for weeks. To whom the bell tolls I know not.
           </p></p>
           <div className="home_image">
                <img className="hero_image"src={heroImage1} alt="heroimage" />
        </div>
        <div className="home_heading-ctabutton">
                 <button 
                 style={{border:"none", borderRadius:"3rem", marginTop:"1rem",color:"aqua",cursor:"pointer",
                 padding:"0.6rem",fontSize:"1.4rem",backgroundColor:"yellow"}}>Join Me</button>
           </div>
         </div>
           
        </div>
        <p>Hook them for the scroll</p>
        <div className="home_cards">
            <card>
                <h3 style={{fontSize:"1.8rem"}}>Molesting Alligators</h3>
                <img style={{width:'14rem',height:"14rem",borderRadius:"2rem"}}
                src="https://images.pexels.com/photos/51318/alligator-american-alligator-gator-dangerous-51318.jpeg?auto=compress&cs=tinysrgb&w=600" alt="aligator"/>
                <p style={{fontSize:"1.2rem"}}>I know what your thinking. Your right but <br />
                    don't judge me till you have tried it.</p>
            </card>
            <card>
                <h3 style={{fontSize:"1.8rem"}}>Playing With Balls</h3>
                <img style={{width:'14rem',height:"14rem",borderRadius:"2rem"}}
                src="https://images.pexels.com/photos/63243/wooden-ball-turned-hand-labor-63243.jpeg?auto=compress&cs=tinysrgb&w=600" alt="balls"/>
                <p style={{fontSize:"1.2rem"}}>Let me tell you, their is nothing like a pair of sweaty balls.
                    <br /> You haven't lived till you have smelt the odor of balls.
                </p>
            </card>
        </div>
        <div className="home_mainsection">
             <div className="home_mainsection_first">
                <div>
                <img className="home_mainsection_image" src={freedomImage} alt="freedomimage" />
                </div>
                <div>
                    <h3 style={{fontSize:"4rem"}}>Freedom</h3>
                    <p style={{fontSize:"2rem",textAlign:"justify"}}>To know the taste of freedom, alligator molestion is a must.
                        The clear blue sky, the refreshing fresh water lake, and of course
                        the sexy alligators just waiting to be molested. It's okay they enjoy it, as I 
                        know you will.
                    </p>
                </div>
             </div>
             <div className="home_mainsection_second">
                
                <div>
                    <h3 style={{fontSize:'4rem'}}>Divine Taste</h3>
                    <p style={{fontSize:'2rem',textAlign:"justify"}}>The taste of balls. Need I say more ? That's what I thought. 
                        Tastes like chocolate doesn't it. Very few people will ever comprehend,
                        nay fathom the absolute delicacy that is sweaty, stinking balls.
                    </p>
                </div>
                <div>
                <img className="home_mainsection_image"src={likeChocolate} alt="likechocolate" />
                </div>
             </div>
        </div>
        <div className="home_reviews">
            <p style={{fontSize:"2rem",fontWeight:"bold"}}>What people are saying about me:</p>
            <card className="home_reviews_card">
                <h3>Karen</h3>
                <p><img style={{borderRadius:"2rem",width:"8rem",height:"8rem"}} alt="karen"
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"/></p>
                <p>I was skeptical at first, but when I smelt his smelly black <b>Balls</b>,
                     I fainted. That's right. It was nothing like I imagined. The size, oh God! the scent,
                      oh Goood! I'm not exaggerating when I say the time to sign up to smell those balls was 
                      yesterday.  
                </p>
            </card>
            <card className="home_reviews_card">
                <h3>Ron</h3>
                <p><img style={{borderRadius:"2rem",width:"8rem",height:"8rem"}} alt="ron"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"/></p>
                <p>Where do I even start. The way Madou molested those florida alligators is unlike anything 
                    I've ever seen. You should of seen they way he wrestled it into submission and started 
                    sticking his finger up it's ass. To say I was pleasantly shocked is an understatement. 
                    just WOW!
                </p>
            </card>
            <card className="home_reviews_card">
                <h3>Theodore White</h3>
                <p><img style={{borderRadius:"2rem",width:"8rem",height:"8rem"}}  alt="white"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"/></p>
                <p>maannn the way that n**ger don moolested them their alligaator was innsane.
                    no way I though some blackie could pul that off, but then he don just did it oooowiii!
                </p>
            </card>
            <card className="home_reviews_card">
                <h3>Pauline</h3>
                <p><img style={{borderRadius:"2rem",width:"8rem",height:"8rem"}} alt="pauline"
                src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600"/></p>
                <p>oh just call and book already. I'm not the first and certainly the last to tell you: Their's Gold in them thar hills!!!</p>
            </card>
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}

export default Home