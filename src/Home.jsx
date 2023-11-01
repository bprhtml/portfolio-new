import React from "react";

function Home() {
    return (
    <>
        <div className="home-page" id="home">
            <div className="intro-cont">
                <h1 id="intro-head">Hello, my name is Ben. I am an aspiring web & software developer who has worked with Javascript & its libraries, Python, PHP, and C++.</h1>
                <img src="portfolio photo.jpeg" alt="Myself, Ben, giving the illusion that I am leaning on Nelson's Column, in Trafalgar Square, London." id="main-portrait"/>
                <div className="home-btn-cont">
                    <a className="homelink-btn" href="https://github.com/bprhtml"><strong>GitHub</strong> 
                        <img className="home-linkhub" src="githubw.svg"/>
                    </a>
                    <a className="homelink-btn" href="https://www.linkedin.com/in/benjamin-rice-ab4a78131/"><strong>LinkedIn</strong> 
                        <img className="home-linkhub" src="linkedinw.svg"/>
                    </a>
                </div>
            </div>
        </div>

    </>
    )
}

export default Home;