import React from 'react';
import Desk from './pics/deskArea1.jpg';
import Myself from './pics/imageSelf.jpg';


function About () {
    return (
    <div className="container-fluid ">
        <div className="row justify-content-sm-center About" id="About">
            <div className="col-lg col-sm">
                <img className="circle-img " src={Myself} alt="DeskArea"/>
            </div>
            <div className="col-lg col-sm aboutText">
                <h6>01.</h6>
                <h4>About</h4>
                <p><br />Hello! I am Kareem, a programmer based in Lawrence, MA.<br /><br />I simply enjoy CREATING. In such a tech savvy world we live in now, I create anything from websites to applications to editing the content from my camera with Adobe Suite. My goal is to provide products with transformative interfaces that are easy-to-use and are seamless to the eye.<br /><br />With the pandemic forcing me to take a break from school, I have become motivated as ever in developing my skills using sources such as UDEMY and YouTube.</p>
            </div>
        </div>
    </div>
    )
}

export default About;