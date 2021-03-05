import React from 'react';
import Logo from './pics/K192.png';

function Nav () {
    return (
    <nav className="navbar sticky-top navbar-dark navar-expand-lg transparent" id="GPS">
      <div class="container barNav">
        <ul className="nav nav-pills mx-auto">
          <a className="navbar-brand" href="#S2">
          <img className="logo" src={Logo} alt="Logo"/>
          </a>
          <li className="nav-item nav-pills nav-fill">
            <a className="nav-link" href="#About">
              About
            </a>
            </li>
            <li className="nav-item nav-pills nav-fill">
            <a className="nav-link" href="#Work">
               Work
            </a>
            </li>
            <li className="nav-item nav-pills nav-fill">
            <a className="nav-link" href="#Projects">
              Projects
            </a>
            </li>
            <button className="btn btn-primary">RESUME</button>
        </ul>
        </div>
     </nav>
    )
    }

    export default Nav;