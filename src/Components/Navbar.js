import React from "react";
import "../Css/Navbar.css"

function Navbar (props){
    return(
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark navy">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img className="imagenew" src="https://media.glamourmagazine.co.uk/photos/6437dd41f22de87c91cf3c4d/4:3/w_1704,h_1278,c_limit/RECYCLING%20LOGOS%20130423%20GettyImages-183628575_L.jpeg" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" >Disabled</a>
        </li> 
      </ul>
    </div>
  </div>
</nav>
</>
    )
}
export default Navbar;