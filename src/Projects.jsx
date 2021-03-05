import React from 'react';
import Apple from './pics/Iphone13Launch.png';
import Portfolio from './pics/Portfolio.png';


function Project () {
    return (
        <div className="proj" id="Projects">
            <h6>03.</h6>
            <h4>Projects</h4>
            <hr />
            <h2 className="apple-title">Apple: IPhone 13 Launch</h2>
            <div className="iphone13">
                <a href="https://www.google.com/" title="">
                        <img className="apple-proj" src={Apple} alt="IphoneLaunchPage"/>
                    </a>
                    <div className="apple-text" >
                        <p>This is my rendition of the Apple website for the IPhone 13 release. I took the styles of the IPhone 12 release Page mirrored the components.</p>
                        <p className="apple-comp">React | Bootstrap | Visual Studio Code</p>
                    </div>
            </div>
            <h2 className="port-title">Portfolio</h2>
            <div className="iphone13">
                    <img className="port-proj" src={Portfolio} alt="IphoneLaunchPage"/>
                    <div className="port-text" >
                        <p>This is my portfolio of projects that consists of various languages. Some projects derive from school and some are personal projects. </p>
                        <p className="port-comp">C++ | Java | Javascript</p>
                    </div>
            </div>
            <div className="extraSpace">
            </div>
        </div>
    );
}

export default Project;