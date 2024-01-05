import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tylo_icon from "../../assets/images/Tylo_logo.svg";
import Dropdown_open from "../../assets/images/Dropdown_open.svg" ;
import Dropdown_closed from "../../assets/images/Dropdown_closed.svg";
import "./features.scss";
import { Link, useNavigate } from "react-router-dom";


function features() {

    return (
        <div className="feature-page">
            
                <div className="feature-page-icon">
                    <img src={Tylo_icon} alt="Tylo Icon" className="tylo-icon" />
                    <div className="tabs">
                        <div className="top-bar-tab">
                            <a href="/" className="top-bar-text">About</a> {/* Link to the About page */}
                        </div>
                        <div className="top-bar-tab">
                            <a href="/features" className="top-bar-text">Features</a> {/* Link to the Features page */}
                        </div>
                    </div>
                </div>

          <div className="gradient-rectangle">
            <h2 className="feature-title">Deeptech innovation Assistant</h2>
            <p className="feature-content">
                Sign in to unlock full features
            </p>
          </div>
          <div className="feature-page-1">
            <div className="inquire-frame-108">
                <h2 className="inquire-header">Inquire Anything</h2>
                <div className="inquire-frame-95">
                    <p className="inquire-text-1">
                        The more specific, the better
                    </p>
                    <div className="inquire-textbox"></div>
                </div>
                <div className="answer-text-box">
                    <p className="answer-text">
                        Answer:
                    </p>
                </div>
            </div>
            <div className="support-frame-162">
                <div className="support-frame-126">
                    <p className="support-text-blue">Support Evidence</p>
                    <p className="mini-grey-text">(20 Items Fund)</p>
                    <div className="dropdown-box">
                        <p className="inquire-text-1">
                            Top 10 Show
                        </p>
                    </div>
                    <p className="support-text-blue">Sort By</p>
                    <div className="dropdown-box">
                        <p className="inquire-text-1">
                            Year
                        </p>
                    </div>
                </div>
                <div className="support-frame-107">
                    <div className="support-frame-95">
                        <div className="support-frame-135">
                            <p className="support-text">Support evidence</p>
                        </div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        
                    </div>
                    <div className="support-frame-95">
                        <div className="support-frame-135">
                            <p className="support-text">Support evidence</p>
                        </div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                    </div>
                    <div className="support-frame-95">
                        <div className="support-frame-135">
                            <p className="support-text">Support evidence</p>
                        </div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                    </div>
                    <div className="support-frame-95">
                        <div className="support-frame-135">
                            <p className="support-text">Support evidence</p>
                        </div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                    </div>
                </div>
            </div>
            
          </div>
          <div className="feature-page-2">
            
          </div>
        </div>
    );
}

export default features