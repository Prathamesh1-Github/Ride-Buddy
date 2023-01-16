import React from "react";
import Navbar from "../components/Navbar"

import "../styles/HomePage.css"
import FirstImage from "../images/carpollingimage1.webp"
import FeaturesImage1 from "../images/homepage2.jpg"
import FeaturesImage2 from "../images/registrationimage.jpg"
import FeaturesImage3 from "../images/asset3.svg"
import {NavLink} from "react-router-dom"



const HomePage = () => {
    return (
        <div className="body_Homepage">
                <div className="top-banner">
                    <div className="container">
                        <div className="small-bold-text banner-text">New to Ride Sharing: Share and Save Money using Ride</div>
                    </div>
                </div>
                <Navbar className="HomepageNavbar"/>
                <header>
                    <div className="container">
                        <div className="container header-section flex">
                            <div className="header-left">
                                <h1>Make Awesome Travel Easy & Affordable</h1>
                                <p>Ride Connects people who need to travel with drivers who have empty seats. This is a simple, quick, cheap, and fun way to commute together</p>
                                <NavLink to="/register" className="primary-button-homepage">Get Started</NavLink>
                            </div>
                            <div className="header-right">
                                <img src={FirstImage} alt="heroimage"></img>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="features-section">
                    <div className="container">
                        <div className="features-header">
                            <h2>Have a Great Ride with a RideBuddy</h2>
                            <NavLink className="secondary-button2" to="/features">See all features</NavLink>
                        </div>
                        <div className="features-area flex">
                            <div className="features-card flex">
                                <h3>In Control</h3>
                                <p>Verified members mean your know exactly who you're travelling with</p>
                            </div>
                            <div className="features-card flex">
                                <h3>Carpool With Confidence</h3>
                                <p>Verification adds another level of security to member profiles</p>
                            </div>
                            <div className="features-card flex">
                                <h3>Fully Insured Ride</h3>
                                <p>We cover your ride from start to finish, absolutely free of charge</p>
                            </div>
                            <div className="features-card flex">
                                <h3>Transparent Price</h3>
                                <p>You know the price before the ride</p>
                            </div>
                            <div className="features-card flex">
                                <h3>Reliable & Fast</h3>
                                <p>Rides arrive on time and drivers use the Fastest routes</p>
                            </div>
                            <div className="features-card flex">
                                <h3>Safe & Friendly</h3>
                                <p>You will have a very Safe and Friendly ride</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="big-features-section">
                    <div className="container flex big-feature-container">
                        <div className="feature-image">
                            <img src={FeaturesImage1} alt=""></img>
                        </div>
                        <div className="features-desc flex">
                            <h4>Share Ride!</h4>
                            <h3>With Like Minded Peoples ...</h3>
                            <p>There are multiple advantages to carpooling, over other means of transport. Travelling by carpool is usually more affordable, especially for longer distances. Carpooling is also more eco-friendly.</p>
                        </div>
                    </div>
                </section>
                <section className="big-features-section">
                    <div className="container flex big-feature-container">
                        <div className="features-desc flex">
                            {/* <h4>Hello World</h4> */}
                            <h3>Your safety is our priority</h3>
                            <p>At Ride, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.</p>
                        </div>
                        <div className="feature-image">
                            <img src={FeaturesImage2} alt=""></img>
                        </div>
                    </div>
                </section>
                <section className="cta-section flex">
                    <div className="container cta-section-image">
                        <img src={FeaturesImage3} alt=""></img>
                    </div>
                    <div className="container flex cta-section-container">
                        <h2>Driving in your car soon?</h2>
                        <p>Let's make this your least expensive journey ever.</p>
                        <NavLink href="/register" className="primary-button-homepage">Offer a Ride</NavLink>
                    </div>
                </section>
        </div>
    )
}

export default HomePage