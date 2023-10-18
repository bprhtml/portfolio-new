import React from "react";

function Contact () {
    return (
        <div className="contact-area">
        <h1 className="contact">Contact Me</h1>
        <h4>Please contact me directly at bprhtml@gmail.com or via the form below.</h4>
        <ContactForm />
        </div>
    )
}

function ContactForm () {
    function formBtnClick (e) {
        e.preventDefault();
    }

    return (
        <>
            <div className="contact-form">
                <form>
                    <input id="email" placeholder="Email address..." type="email"></input>
                    <textarea id="message" placeholder="Message..."></textarea>
                    <button id="form-btn" onClick={formBtnClick}>Send!</button>
                </form>
            </div>
        </>
    )
}



export default Contact;