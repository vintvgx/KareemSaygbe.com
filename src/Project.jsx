import React from 'react';
import Apple from './pics/Iphone13Launch.png';
import Portfolio from './pics/Portfolio.png';


function Project () {
    return ( 
        <div className="container-fuid project" id="Project">
            <h6>03.</h6>
            <h4>Projects</h4>
            <hr />

            <h2 className="apple-title">Apple: IPhone 13 Launch</h2>
            <div className="container row">
                <div className="col-6">
                    <a href="https://www.google.com/" title="">
                            <img className="apple-image" src={Apple} alt="IphoneLaunchPage"/>
                        </a>
                        </div>
                <div className="apple-text1 col-lg-5 col-sm-12" >
                    <h2 className="apple-title1">Apple: IPhone 13 Launch</h2>
                    <div className="border">
                         <p>This is my rendition of the Apple website for the IPhone 13 release. I took the styles of the IPhone 12 release Page mirrored the components.</p>
                         </div>
                    <p className="apple-comp">React | Bootstrap | Visual Studio Code</p>
                    <a href="https://github.com/vintvgx" download>
                    <button className="btn  btn-outline-primary">VIEW</button>
                      </a> 
                </div>
                
            </div>

            <div className="container row">
                <div className=" col-6">
                    <a href="https://www.google.com/" title="">
                            <img className="port-image" src={Portfolio} alt="Portfolio"/>
                        </a>
                        </div>
                <div className="port-text col-lg-5 col-sm-12" >
                    <h2 className="port-title">Portfolio</h2>
                    <div className="border">
                         <p>This is my portfolio of projects that consists of various languages. Some projects derive from school and some are personal projects.</p>
                         </div>
                    <p className="apple-comp">C++ | Java | Javascript</p>
                    <a href="https://github.com/vintvgx" download>
                    <button className="btn  btn-outline-primary">VIEW</button>
                      </a> 
                </div>
                
            </div>
        </div>
    );
    }

export default Project;