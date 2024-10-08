import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetInvolved from "../components/GetInvolved";





const Home = ()=>{

    const newsletterLink = process.env.REACT_APP_NEWSLETTER_LINK
    const videoId = process.env.REACT_APP_VIDEO_ID
    console.log(newsletterLink)



    return(
        <div>
            <Navbar></Navbar>
            <div className="page" > 

                <p className="home-title">Re-Elect State Representative Sean Brennan</p>

                <div className="top">
                    <img src="./portrait.jpg" 
                    alt="Sean Brennan Official Portrait" 
                    className='home-page-portrait'/>

                    <p>
                    “When I took my solemn oath to serve as state representative on January 3, 2023, I made a commitment to be YOUR voice and to work hard every day to build relationships with my Democratic and Republican colleagues to support policies that improve the quality of life for you and all Ohioans. Throughout my career I have prided myself on being a public servant, not a politician. I would be honored by your support and vote so that I can continue to nobly serve you.”
                    </p>

                </div>

                <div className="video">
                    <iframe                    
                        src={`https://www.youtube.com/embed/${videoId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded YouTube Video"
                    ></iframe>
                </div>
            </div>

            <GetInvolved></GetInvolved>
                
            <div className="bottom-page" > 
                
                 
                   

                <a className="donate-button" href="https://secure.actblue.com/donate/repbrennan"> Donate </a>
                <div className="newsletter-container">
                    <p className="newsletter-title">Sean's Latest Newsletter</p>
                    <embed className="newsletter" src={newsletterLink} width="500" height="375"  type="application/pdf"/> 
                    
                    <a className="newsletter-link" href="https://ohiohouse.gov/members/sean-p-brennan/newsletters">View Previous News Letters</a>
                </div>
                
                



            </div>
            <Footer></Footer>

        </div>
    )
}


export default Home;
