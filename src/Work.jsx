import React from 'react';
import Worklist from './Worklist';
import Bootstrap from 'react-bootstrap';
import Desk from './pics/deskArea1.jpg';

function Work () {
    return (
        <div className="working" id="Work">
                <h6>02.</h6>
                <h4>Where I've Worked</h4>
                <hr />
                <div className="row container">
                    <div className="col-lg-3">
                        <h5 className="title">YMCA</h5>
                    </div>
                    <div className="col-lg-9 content">
                        <h6>Sports Director/Assitant Director of Camp Otter<br />2015 - 2020</h6>
                        <p> Oversaw the day-to-day operations of a camp of 250+ campers & 20+ staff<br /> Handled the sport programs focused in youth development for 100+ children and adolescents</p>
                    </div>

                    <div className="col-lg-3">
                        <h5 className="title">Lahey Health<br />Behavorial Services</h5>
                    </div>
                    <div className="col-lg-9 content">
                        <h6>Therapeutic Mentor<br />2017 - 2020</h6>
                        <p> Provided mentoring and taught coping skills to at-risk youth to adolescents<br /> Documented each visit and reported each visit to youth's therapist and parent/guardian</p>
                    </div>

                    <div className="col-lg-3">
                        <h5 className="title">Lowell House Inc.</h5>
                    </div>
                    <div className="col-lg-9 content">
                        <h6>Recovery Specialist<br />2020 - current</h6>
                        <p> Serve in an mens house as a recovery specialist for those who suffer from addiction and mental health issues</p>
                    </div>
                </div>
                    <p className="note">As you can see through my work history, I have been dedicated to youth development in my underserved community while in school. I could have taken the route of focusing on working an internship instead or tried my hardest to get into an entry level job once graduating with my Associates, but I felt more accomplished with the work I was doing in my city. I just ask that you don't undervalue me due to my lack of experience.</p>
                
        </div>
    )
}

export default Work;