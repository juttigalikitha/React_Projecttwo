import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"; 
import Home from "./Home";
import Contact from "./Contact";
import Help from "./Help";
import Blog from "./Blog";
// import {link} from "react-router-dom";

const Main = () => {
    return(
        <Router>
           <div style={{textAlign: "center", backgroundColor: "#D3C5F4", minHeight: "100vh", padding: "20px"}}>
           <nav>
            <ul style={{display: "flex", listStyle: "none", padding: "70px", marginLeft: "30%"}}>
                <li style={{ marginRight: "20px" }}>
                    <Link to = "/" >Home Page </Link>
                </li>
                <li style={{ marginRight: "20px" }}>
                    <Link to = "Contact">Contact Page</Link>
                </li>
                <li style={{ marginRight: "20px" }}>
                    <Link to = "Help">Help Page</Link>
                </li>
                <li style={{ marginRight: "20px" }}>
                    <Link to = "Blog">Blog Page</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path= "/" element = {<Home/>}/>
            <Route path= "Contact" element = {<Contact/>}/>
            <Route path= "Help" element = {<Help/>}/>
            <Route path= "Blog" element = {<Blog/>}/>
        </Routes>
           </div>
        </Router>
    )
};
export default Main;