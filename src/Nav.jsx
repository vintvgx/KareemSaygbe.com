import React from 'react';
import Logo from './pics/K192.png';
import Resume from './files/resume.pdf';

function Nav () {
    return (
    <nav className="navbar sticky-top navbar-dark navbar-expand-lg navbar-expand-sm transparent justify-content-between" id="GPS">
     <a className="navbar-brand" href="#Home">
          <img className="logo" src={Logo} alt="Logo"/>
          </a>

      <div class="container-fluid collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
         
          <li className="nav-item">
            <a className="nav-link" href="#About">
              01. About
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#Work">
               02. Work
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#Project">
              03. Projects
            </a>
            </li>
            <li>
                <a href={Resume} download>
                  <button className="btn  btn-outline-secondary  my-2 my-sm-0">RESUME</button>
                  </a> 
               </li>
               
        </ul>
        </div>
     </nav>
    )
    }

    export default Nav;