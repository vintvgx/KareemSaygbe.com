import React, {useState} from 'react';


function Contact () {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        message: " "
      });
      
    return (
        <div className="Contact">

        </div>
    );
}

export default Contact;