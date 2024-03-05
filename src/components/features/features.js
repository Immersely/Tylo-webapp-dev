import React, { useEffect, useState} from "react";
// import ReactDOM from "react-dom";
import Tylo_icon from "../../assets/images/Tylo_logo.svg";
// import Dropdown_open from "../../assets/images/Dropdown_open.svg" ;
// import Dropdown_closed from "../../assets/images/Dropdown_closed.svg";
import "../features/features.scss";
import { gapi } from "gapi-script";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../services/userService";
// import { createClient } from '@supabase/supabase-js'


function Features() {
    console.log('Features component rendering')

    // Initialize state for storing the data
    // const [publishers, setPublishers] = useState([]);
    // const [ setLoading] = useState(true);
    // const [ setError] = useState(null);
    // Create a single supabase client for interacting with your database
    // const supabase = createClient('https://kcfgjenxuummtzdtprsh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZmdqZW54dXVtbXR6ZHRwcnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5Nzg3NjMsImV4cCI6MjAxNzU1NDc2M30.F8A-w41SZeMzbkWTYl2ROoSqB05b-nHPwa-tAKl_PJY')

    const navigate = useNavigate();
    const [showInstructions, setShowInstructions] = useState(false);
    // const { data, error } = supabase
    // .from('publishers')
    // .select('publisher_id')
    // console.log('the publisher is', data)

    useEffect(() => {

        // Load the Google API client library
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/api.js";
        script.onload = () => {
          // Initialize the Google API client library
          gapi.load("auth2", () => {
            gapi.auth2.init({
              client_id:
                "584832623015-02ioa5kbjqp9agd30pdiifln0bhb5trb.apps.googleusercontent.com",
              scope: "profile email",
              redirect_uri: "https://tylo.ai/",
              cookiepolicy: "single_host_origin",
            });
          });
        };
        document.body.appendChild(script);
      }, []);

    const handleSignInClick = () => {
        gapi.auth2
          .getAuthInstance()
          .signIn()
          .then((googleUser) => {
            const profile = googleUser.getBasicProfile();
            const profileImageUrl = profile.getImageUrl();
            axios
              .post(
                "https://tylo-backend.azurewebsites.net/api/v1/auth",
                { idToken: googleUser.xc.id_token },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }
              )
              .then((response) => {
                console.log("Axios response data:", response.data);
                // Save the JWT token to local storage
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("tyloEmail",response.data.user.email)
                localStorage.setItem("googleProfileImageUrl", profileImageUrl);
                console.log("email",response.data.user.email)
                console.log("name", response.data.user.name)
                console.log("username", response.data.user.username)
                setToken(response.data.token);

                // Navigate to /#features page
                navigate("features"); // Adjust as per your routing setup
            
                if (response.data.user.name){
                  localStorage.setItem("name", response.data.user.name)
                  localStorage.setItem("username", response.data.user.username)
    
                //   navigate("/welcome?profile_completed=true");
                }
                // else{navigate("/welcome?profile_completed=false");}
                
              });
            console.log("User signed in.", googleUser.xc.id_token);
          });
      };

    console.log('Feature component about to render JSX');
    return (
        <div className="feature-page">
            
                <div className="feature-page-icon">
                    <img src={Tylo_icon} alt="Tylo Icon" className="tylo-icon" />
                    <div className="tabs">
                        <div className="top-bar-tab">
                            <a href="/#" className="top-bar-text">Features</a> {/* Link to the Features page */}
                        </div>
                        <div className="top-bar-tab">
                            <a href="/#about" className="top-bar-text">About</a> {/* Link to the About page */}
                        </div>
                    </div>
                    <div className="login-button" onClick={handleSignInClick}>
                        <span className="login-text" >Login / Signup</span>
                    </div>
                </div>

          <div className="gradient-rectangle">
            <h2 className="feature-title">Spend Less, Innovate More</h2>
            <p className="feature-content">
                Sign in to unlock full features
            </p>
            <div className="tab-horizontal-container">
                <div className="sign-in" >
                    <span className="sign-in-text" >Inquire</span>
                </div>
                <div className="sign-in-disabled" >
                    <span className="sign-in-text-disabled" >Track</span>
                </div>
            </div>
          </div>
          <div className="feature-page-1">
            <div className="Inquire_feature-frame-108">
                <h2 className="inquire-header">Inquire Anything</h2>
                <div className="inquire-frame-95">
                    <div className="helper-container">
                        <p className="inquire-text-1">
                            The start point of your evidence-based innovation
                        </p>
                        <div className="instructions-container">
                            <div className="instructions">
                                Instructions 
                            </div>
                            <div className="instructions-toggle dropdown-button" onClick={(e) => { e.stopPropagation(); setShowInstructions(!showInstructions); }}>
                                    {showInstructions ?  '▲' : '▼'}
                            </div>
                        </div>
                    </div>
                    {showInstructions && (
                    <div className="instruction-card">
                        <div className="inst-top-col">
                            <div className="inst-item">
                                <h1 className="inst-card-H">What is it for</h1>
                                <div className="inst-card-p">
                                    <ul className="inst-card-ul">
                                        <li>Get an answer to deeptech questions</li>
                                        <li>Learn innovative technology topics or concepts</li>
                                        <li>Find evidence for hypothesis & assumptions</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="inst-item">
                                <h1 className="inst-card-H">What is it not a good fit for</h1>
                                <div className="inst-card-p">
                                   topics especially for short or general questions, it might not be your best bet. and anything that can hardly find clues from science publication and patent ocean
                                </div>
                            </div>
                            <div className="inst-item">
                                <h1 className="inst-card-H">Responding time</h1>
                                <div className="inst-card-p">
                                    typically 10 to 40 seconds
                                </div>
                            </div>
                        </div>
                        <div className="inst-top-col">
                            <div className="inst-item">
                                <h1 className="inst-card-H">Optimise your input</h1>
                                <div className="inst-card-p">
                                    <ul className="inst-card-ul">
                                        <li>Be specific</li>
                                        <li>In the deep tech fields</li>
                                        <li>Include a ‘?’ mark for questions </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="inst-item">
                                <h1 className="inst-card-H">Input examples</h1>
                                <div className="inst-card-p">
                                    <ul className="inst-card-ul">
                                        <li>Buprenorphine use in adolescent opiate addiction</li>
                                        <li>Best practices for designing robust optical computing hardware</li>
                                        <li>How to create an efficient k-means clustering algorithm on a Riemannian manifold ? </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="inst-item">
                                <h1 className="inst-card-H">Output accuracy</h1>
                                <div className="inst-card-p">
                                    Like any AI, there's a margin for error. While we achieve a solid 99% success rate (output very reasonable, logic and contextual related answers) in internal tests, we encourage you to double-check information
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                    <div className="textarea-container">
                    <div className="inquire-textbox">
                        <div className="inquire-button">
                            <span className="sign-in-text">Inquire</span>
                        </div>
                    </div>
                    </div>
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
                    <p className="mini-grey-text">(20 Items Found)</p>
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
                            <p className="support-text">Reference & sources</p>
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
                            <p className="support-text">Short Summary</p>
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
                            <p className="support-text">Relevance</p>
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

export default Features;