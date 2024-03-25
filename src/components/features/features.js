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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [org, setOrg] = useState('');
    const [role, setRole] = useState('');
    const [showModal, setShowModal] = useState(false);
    // const [signUp, setSignUp] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    // const { data, error } = supabase
    // .from('publishers')
    // .select('publisher_id')
    // console.log('the publisher is', data)

    const closeModal = (e) => {
        // Ensure that it's the backdrop that's being clicked, not the modal content
        if (e.target.classList.contains('modal-backdrop')) {
            setShowModal(false);
        }
    };

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

      const handleSignIn = async () => {
        // Prevent sign-in if email or password fields are empty
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }
    
        try {
            // Make a POST request to your sign-in API endpoint
            const response = await axios.post('https://tylo-backend.azurewebsites.net/api/v1/auth', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
    
            // Assuming your API returns a token on successful authentication
            if (response.data.token) {
                console.log('Sign-in successful', response.data);
                // Save the received token to local storage or context/state management library
                localStorage.setItem('token', response.data.token);
                // Optionally save other user info if needed
                localStorage.setItem('userEmail', email);
    
                // Redirect or change UI upon successful sign-in
                navigate('/features'); // Or any other target location after successful login
            } else {
                // Handle no token returned
                alert('Login failed: No token received');
            }
        } catch (error) {
            console.error('Sign-in error', error);
            // Display an error message or handle errors (such as wrong credentials)
            alert('Login failed: ' + (error.response?.data?.error || 'Unknown Error'));
        }
    };
    

      const handleSignUp = () => {
        axios.post('https://tylo-backend.azurewebsites.net/api/v1/signup', {
            email: email,
            password: password, // Ensure your backend endpoint is secure and handles password encryption.
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log('Signup successful', response.data);
            localStorage.setItem('token', response.data.token);
            // Additional logic upon successful sign-up, such as redirecting the user
            navigate('/features');
        }).catch((error) => {
            console.error('Signup error', error);
            // Handle sign-up errors, e.g., display an error message
        });
    };
    

    console.log('Feature component about to render JSX');
    return (
        <div className="feature-page">
            
                <div className="feature-page-icon">
                    <img src={Tylo_icon} alt="Tylo Icon" className="tylo-icon" />
                    <div className="tabs">
                        <div className="top-bar-tab-current_page">
                            <a href="/#" className="top-bar-text">Features</a> {/* Link to the Features page */}
                        </div>
                        <div className="top-bar-tab">
                            <a href="/#about" className="top-bar-text">About</a> {/* Link to the About page */}
                        </div>
                    </div>
                    <div className="login-button" >
                    <span className="login-text" onClick={() => setShowModal(true)}>Login / Signup</span>
                    {showModal && (
                        <div className="modal-backdrop" onClick={closeModal}>
                            <div className="signin-form-modal" onClick={(e) => e.stopPropagation()}>
                                <div className="signin-header">{isSignUp ? 'Sign Up' : 'Sign In'}</div>
                                <div className="signin-text">
                                    {isSignUp ? 'Already have an account? ' : 'Don’t have an account? '}
                                    <span 
                                        style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}} 
                                        onClick={() => setIsSignUp(!isSignUp)}
                                    >
                                        {isSignUp ? 'Sign In' : 'Sign Up'}
                                    </span>
                                </div>
                                <div className="google-signin" onClick={handleSignInClick}>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
                                        <path d="M16.8541 7.53113H16.25V7.5H9.5V10.5H13.7386C13.1203 12.2464 11.4586 13.5 9.5 13.5C7.01487 13.5 5 11.4851 5 9C5 6.51487 7.01487 4.5 9.5 4.5C10.6471 4.5 11.6908 4.93275 12.4854 5.63962L14.6068 3.51825C13.2673 2.26987 11.4755 1.5 9.5 1.5C5.35812 1.5 2 4.85812 2 9C2 13.1419 5.35812 16.5 9.5 16.5C13.6419 16.5 17 13.1419 17 9C17 8.49713 16.9482 8.00625 16.8541 7.53113Z" fill="#FFC107"/>
                                        <path d="M2.86523 5.50912L5.32936 7.31625C5.99611 5.6655 7.61086 4.5 9.50048 4.5C10.6476 4.5 11.6912 4.93275 12.4859 5.63962L14.6072 3.51825C13.2677 2.26987 11.476 1.5 9.50048 1.5C6.61973 1.5 4.12148 3.12637 2.86523 5.50912Z" fill="#FA1321"/>
                                        <path d="M9.50012 16.5C11.4374 16.5 13.1976 15.7586 14.5285 14.553L12.2072 12.5888C11.4542 13.1591 10.5182 13.5 9.50012 13.5C7.54937 13.5 5.89299 12.2561 5.26899 10.5203L2.82324 12.4046C4.06449 14.8335 6.58524 16.5 9.50012 16.5Z" fill="#4CAF50"/>
                                        <path d="M16.8541 7.53113H16.25V7.5H9.5V10.5H13.7386C13.4416 11.3389 12.902 12.0622 12.206 12.5891L12.2071 12.5884L14.5284 14.5526C14.3641 14.7019 17 12.75 17 9C17 8.49713 16.9482 8.00625 16.8541 7.53113Z" fill="#1976D2"/>
                                    </svg>
                                    Continue with Google
                                    </div>
                                <div className="or-frame">
                                    <div className="or-rec"></div>
                                    <div className="or-text">or</div>
                                    <div className="or-rec"></div>
                                </div>
                                <div className="email-container">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" value={email} className="text-bar" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="password-container">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" value={password} className="text-bar" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                {isSignUp && (
                                    <>
                                        <div className="password-container">
                                            <label htmlFor="confirm-password">Confirm Password</label>
                                            <input id="confirm-password" type="password" value={confirmPassword} className="text-bar" onChange={(e) => setConfirmPassword(e.target.value)}/>
                                            {password !== confirmPassword && confirmPassword && (
                                                <div style={{ color: 'red' }}>Passwords do not match</div>
                                            )}
                                        </div>
                                        <div className="email-container">
                                            <label htmlFor="organisation">Organisation</label>
                                            <input id="organisation" type="text" value={org} className="text-bar" onChange={(e) => setOrg(e.target.value)}/>
                                        </div>
                                        <div className="email-container">
                                            <label htmlFor="role">Role</label>
                                            <input id="role" type="text" value={role} className="text-bar" onChange={(e) => setRole(e.target.value)}/>
                                        </div>
                                    </>
                                )}
                                <button className="signin-button" onClick={isSignUp ? handleSignUp : handleSignIn}>
                                    <span className="signin-button-text">{isSignUp ? 'Sign Up' : 'Sign In'}</span>
                                </button>
                            </div>
                        </div>
                    )}

                    </div>
                </div>

          <div className="gradient-rectangle">
            <h2 className="feature-title">Deeptech Innovation Assistant</h2>
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
          <div className="feature-page-2">
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
                    <div className="support-frame-95a">
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
                    <div className="support-frame-95a">
                        <div className="support-frame-135">
                            <p className="support-text">Reference </p>
                        </div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                    </div>
                    {/* <div className="support-frame-95a">
                        <div className="support-frame-135">
                            <p className="support-text">Short Summary</p>
                        </div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                        <div className="support-frame-94"> </div>
                        <div className="support-frame-135-b"></div>
                    </div> */}
                    <div className="support-frame-95a">
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