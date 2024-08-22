import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const PageNotFound = ()=>{

    return(
        <div>
            <Navbar></Navbar>
            Page Not Found
            <img src="./public/favicon.png"></img>
            <Footer></Footer>

        </div>
    )
}


export default PageNotFound;