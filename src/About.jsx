import React from "react";

function About () {
    return (
        <div className="centre-about">
        <div className="divider"></div>
        <h1 id="about">About Me</h1>
        <div id="about-container">
            <div className="about-me-top">
                <div className="top-para">An aspiring web designer, I have created a plethora of projects - predominantly in JavaScript - however I have programmed in languages such as Python to create more diverse projects - including side-scrolling games.</div>
                <img className="about-me-photo" src="https://media.licdn.com/dms/image/D4E03AQET5GEWP7EPOA/profile-displayphoto-shrink_800_800/0/1689058766782?e=1703116800&v=beta&t=-bPOXom00hTnSlgQ4I9GOPFZfLdUvg1kJiITce2UNbs"></img>
            </div>
            <div className="divider-about"></div>
            <div className="about-me-mid">
                <img className="about-me-gary" src="me and gary.jpeg" alt="My dog and I." />
                <div className="mid-para">Starting in 2022, I have produced over 30 projects in JavaScript and HTML/CSS, ranging from games to to-do lists, and creating websites produced from my own ideas.</div>
            </div>
            <div className="divider-about"></div>
            <div className="about-me-bot">
                <div className="bot-para">In addition to programming, I have many other skills and hobbies: one of which being drumming, which I've been studying for over 20 years.</div>
                <a href="https://www.youtube.com/watch?v=jzgb8XfIKjI">
                    <img className="drumming-photo" src="me-drumming.png" alt="Myself drumming in a YouTube video from my channel."></img>
                </a>
            </div>
        </div>
        </div>
    )
}

export default About;