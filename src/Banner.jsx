import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Banner() {
    return (
    <>
        <div className="banner-holder">
            <Link className="btn-link" to="home" smooth={true} duration={500} offset={-50}>
                <button className="banner-btn">Home</button></Link>
            <Link className="btn-link" to="projects" smooth={true} duration={500} offset={-50}>
                <button className="banner-btn">Projects</button></Link>
            <Link className="btn-link" to="skills" smooth={true} duration={500} offset={-50}>
                <button className="banner-btn">Skills</button></Link>
            <Link className="btn-link" to="about" smooth={true} duration={500} offset={-50}>
                <button className="banner-btn">About</button></Link>
            <Link className="btn-link" to="contact" smooth={true} duration={500} offset={-50}>
                <button className="banner-btn">Contact</button></Link>
        </div>
    </>
    )
}

export default Banner;
