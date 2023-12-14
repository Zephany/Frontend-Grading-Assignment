import React from "react";
import './navbar.css'

function Navbar ()
{
    return(
        <div>
             
             <div class="logo">
                  <img src="https://images.app.goo.gl/du38xxatB3RBTP4GA" alt="logo"/>
              </div>
              <ul className="nav-links">
                  <li><a href="">Login</a></li>
                  <li><a href="">Dashboard</a></li>
                  <li><a href="">Grade Report</a></li>
                  <li><a href="">Missing Grade</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Help and Support</a></li>  
              </ul>
              <div class="nav-icon" id="menu-btn">
              </div>  
              
        </div>

    )
}




export default Navbar