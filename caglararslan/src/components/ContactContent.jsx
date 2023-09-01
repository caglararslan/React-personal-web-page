import React from 'react'
import { BsGithub,BsLinkedin,BsMoon } from 'react-icons/bs';


function ContactContent() {
    return (
        <div className="contact-content">
            <div className="contact-title">Let's get in touch</div>
            <div className="contact-text">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</div>
            <div className="contact-social-content">
                <div>
                    <a href="#">
                        <BsGithub />
                    </a>
                </div>
                <div>
                    <a href="#">
                        <BsLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactContent
