import React from 'react';
import Adobe from './pics/knowledge/Adobe.png';
import Ctwo from './pics/knowledge/c++.png';
import Git from './pics/knowledge/Github.png';
import Css from './pics/knowledge/CSS.png';
import Html from './pics/knowledge/HTML5.png';
import Java from './pics/knowledge/java.png';
import Script from './pics/knowledge/JS.png';
import Strap from './pics/knowledge/Strap.png';
import Node from './pics/knowledge/Node.png';
import Comptia from './pics/knowledge/comptia.png';

// loading
import Load from './pics/knowledge/Loading.png';
import Swift from './pics/knowledge/Swift.png';

function Knowledge () {
    return (
        <div className="ledge" id="know">
                <div className="top">
                    <img className="" src={Adobe} alt="adobeSuite"/>
                    <img className="" src={Ctwo} alt="c++"/>
                    <img className="" src={Git} alt="adobeSuite"/>
                    <img className="" src={Node} alt="Node.JS"/>
                </div>
                
                <div className="">
                    <h6>04.</h6>
                    <h4>Knowledge</h4>
                    <img className="Css" src={Css} alt="CSS"/>
                    <img className="HTML" src={Html} alt="HTML"/>
                    <img className="JS" src={Script} alt="Javascript"/>
                    <img className="Strap" src={Strap} alt="Bootstrap"/>
                </div>

                <div>
                    <img className="Java" src={Java} alt="adobeSuite"/>
                </div>

                <div className="inProgress">
                    <h5>In Progress</h5>
                    <img className="" src={Swift} alt="Swift"/>
                    <img className="" src={Comptia} alt="Comptia"/>
                </div>
        </div>
    )
}

export default Knowledge;