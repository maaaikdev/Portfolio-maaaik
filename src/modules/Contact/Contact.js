import React from "react";
import "./Contact.css";
import { FormattedMessage } from "react-intl";

const Contact = () => {

    const handleLinkedin = () => {
        window.open("https://www.linkedin.com/in/maaaik/", '_blank')
    }

    return (
        <>
            <div className="container-contact">
                <h2>
                    <FormattedMessage 
                        id="contact.title"
                        defaultMessage="Contacto"
                    />
                </h2>
                <p className="description">
                    <FormattedMessage 
                        id="contact.description"
                        defaultMessage="Si estas interesado en contratarme, escríbeme o conecta y chatea conmigo por Linkedin."
                    />
                </p>
                <div className="contact-box">
                    <div className="contact-bullet">
                        <span class="material-symbols-outlined">phone_iphone</span>
                        <img src="images/flag/colombia.png" alt="Colombia" className="flagImg"/>
                        <p>(57) 3168568745</p>
                    </div>
                    <div className="contact-bullet">
                    <span class="material-symbols-outlined">mail</span>
                        <p>maaaik.dev@gmail.com</p>
                    </div>
                    <div className="contact-bullet" onClick={() => handleLinkedin()}>
                        <img src="images/skills/linkedin.svg" alt="Linkedin Michael Reyes" className="linkedinImg"/>
                        <p>Michael Reyes</p>
                    </div>
                </div>
            </div>
            <div className="right-reserved">
                <h3>
                    <FormattedMessage 
                        id="contact.right"
                        defaultMessage="Created by Michael Reyes | All rights reserved"
                    />
                </h3>
            </div>
        </>
    )
}

export default Contact;