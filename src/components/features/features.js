import React, { useEffect, useState  } from "react";
// import ReactDOM from "react-dom";
import Tylo_icon from "../../assets/images/Tylo_logo.svg";
// import Dropdown_open from "../../assets/images/Dropdown_open.svg" ;
// import Dropdown_closed from "../../assets/images/Dropdown_closed.svg";
import "../features/features.scss";
import { gapi } from "gapi-script";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../services/userService";
import { createClient } from '@supabase/supabase-js'


function Features() {
    console.log('Features component rendering')

    // Initialize state for storing the data
    const [publishers, setPublishers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Create a single supabase client for interacting with your database
    const supabase = createClient('https://kcfgjenxuummtzdtprsh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZmdqZW54dXVtbXR6ZHRwcnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5Nzg3NjMsImV4cCI6MjAxNzU1NDc2M30.F8A-w41SZeMzbkWTYl2ROoSqB05b-nHPwa-tAKl_PJY')

    const navigate = useNavigate();
    
    // const { data, error } = supabase
    // .from('publishers')
    // .select('publisher_id')
    // console.log('the publisher is', data)

    useEffect(() => {

    // Fetch data from Supabase
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('publishers')
                    .select('homepage_url');

                if (error) {
                    throw error;
                }

                setPublishers(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

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
                </div>

          <div className="gradient-rectangle">
            <h2 className="feature-title">Deeptech innovation Assistant</h2>
            <p className="feature-content">
                Sign in to unlock full features
            </p>
            <div className="sign-in" onClick={handleSignInClick}>
                <span className="sign-in-text" >Sign up/in</span>
            </div>
          </div>
          <div className="feature-page-1">
            <div className="Inquire_feature-frame-108">
                <h2 className="inquire-header">Inquire Anything</h2>
                <div className="inquire-frame-95">
                    <p className="inquire-text-1">
                        The more specific, the better
                    </p>
                    <div className="inquire-textbox">
                        <div className="inquire-button">
                            <span className="sign-in-text">Inquire</span>
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
            <div className="track-frame-main">
                <h2 className="inquire-header">Track anything</h2>
            </div>
            <div className="track-frame-154">
                <div className="vector-68"></div>
                <div className="track-frame-150">
                    <div className="track-frame-151">
                        <h2 className="track-text-date">01/12</h2>
                    </div>
                    <div className="track-frame-15">
                        <div className="track-frame-15-card">
                            <div className="track-frame-43">
                                <h2 className="track-text-header">Research:</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="track-frame-150">
                    <div className="track-frame-151">
                        <h2 className="track-text-date">22/11</h2>
                    </div>
                    <div className="track-frame-15">
                        <div className="track-frame-15-card">
                            <div className="track-frame-43">
                                <h2 className="track-text-header">Collaboration:</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="track-frame-150">
                    <div className="track-frame-151">
                        <h2 className="track-text-date">21/11</h2>
                    </div>
                    <div className="track-frame-15">
                        <div className="track-frame-15-card">
                            <div className="track-frame-43">
                                <h2 className="track-text-header">Patent:</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="track-frame-150">
                    <div className="track-frame-151">
                        <h2 className="track-text-date">20/11</h2>
                    </div>
                    <div className="track-frame-15">
                        <div className="track-frame-15-card">
                            <div className="track-frame-43">
                                <h2 className="track-text-header">Use Case:</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="track-frame-150">
                    <div className="track-frame-151">
                        <h2 className="track-text-date">16/11</h2>
                    </div>
                    <div className="track-frame-15">
                        <div className="track-frame-15-card">
                            <div className="track-frame-43">
                                <h2 className="track-text-header">Proof of concept:</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="track-frame-150">
                    <div className="track-frame-151">
                        <h2 className="track-text-date">15/11</h2>
                    </div>
                    <div className="track-frame-15">
                        <div className="track-frame-15-card">
                            <div className="track-frame-43">
                                <h2 className="track-text-header">X company:</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="track-frame-150">
                    <div className="track-frame-151">
                        <h2 className="track-text-date">12/11</h2>
                    </div>
                    <div className="track-frame-15">
                        <div className="track-frame-15-card">
                            <div className="track-frame-43">
                                <h2 className="track-text-header">X researcher:</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
          </div>
            <div>
                <h2>Publishers</h2>
                {publishers.map(publisher => (
                    <div key={publisher.homepage_url}>{publisher.homepage_url}</div>
                ))}
            </div>
        </div>
    );
}

export default Features;