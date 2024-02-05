import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import Tylo_icon from "../../assets/images/Tylo_logo.svg";
// import Dropdown_open from "../../assets/images/Dropdown_open.svg" ;
// import Dropdown_closed from "../../assets/images/Dropdown_closed.svg";
import "../features/features.scss";
import { gapi } from "gapi-script";
// import axios from "axios";
import {useNavigate } from "react-router-dom";
// import { setToken } from "../../services/userService";
// import { createClient } from '@supabase/supabase-js';

function Features() {
    console.log('Features unlocked component rendering')
    const [answerText, setAnswerText] = useState('');
    // Create a single supabase client for interacting with your database
    // const supabase = createClient('https://kcfgjenxuummtzdtprsh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZmdqZW54dXVtbXR6ZHRwcnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE5Nzg3NjMsImV4cCI6MjAxNzU1NDc2M30.F8A-w41SZeMzbkWTYl2ROoSqB05b-nHPwa-tAKl_PJY')
    const googleProfileImageUrl = localStorage.getItem("googleProfileImageUrl");
    const navigate = useNavigate();
    
    const [supportEvidence, setSupportEvidence] = useState([]);
    const [referenceSources, setReferenceSources] = useState([]);
    const [relevanceDisplay, setRelevanceDisplay] = useState([]);
    const [jsonData, setJsonData] = useState([]);
    const [isDyslexiaFontEnabled, setIsDyslexiaFontEnabled] = useState(false);



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


      const handleSignOutClick = () => {
        // Sign out from your application
        // This might involve removing the user's session or token from local storage
        localStorage.removeItem('token'); // For example, if you store a session token

        // If using Google sign-in and you want to sign the user out of Google as well
        const auth2 = gapi.auth2.getAuthInstance();
        if (auth2 != null) {
            auth2.signOut().then(auth2.disconnect().then(() => {
                console.log('User signed out of Google.');
            }));
        }

        navigate(-1); // -1 takes you one page back in the history
        // Redirect the user to the sign-in page or another appropriate page
        // This depends on your routing setup, for example using react-router
        // navigate('/signin'); // Example using react-router
    };

    const handleFilterChange = (event) => {
        // Get the selected value
        const selectedFilter = event.target.value;
    
        // Call the function to filter the data
        filterData(selectedFilter);
    };

    const filterData = (filterCriteria) => {
        let filteredData = [];

        const sortedData = jsonData.sort((a, b) => b.relevance - a.relevance);


    
        switch (filterCriteria) {
            case 'all':
                filteredData = jsonData; // Assuming 'data' is your original data array
                break;
            case 'top10':
                filteredData = sortedData.slice(0, 10); // Get the first 10 items
                break;
            case 'top20':
                filteredData = sortedData.slice(0, 20); // Get the first 20 items
                break;
            default:
                filteredData = jsonData; // Default to showing all
        }
    
        updateDisplay(filteredData);
        
    };

    
    const handleDyslexiaFontToggle = (event) => {
        setIsDyslexiaFontEnabled(event.target.checked);
    };

    const updateDisplay = (filteredData) => {
        // Your logic to update the UI
        // This might involve clearing the existing displayed data
        // and then iterating over 'filteredData' to display each item

        // Clear existing data
        setSupportEvidence([]);
        setReferenceSources([]);

        const minRelevance = Math.min(...filteredData.map(item => item.relevance));
                const maxRelevance = Math.max(...filteredData.map(item => item.relevance));


                // Function to calculate color based on relevance
                const getColorForRelevance = (relevance) => {
                    const ratio = (relevance - minRelevance) / (maxRelevance - minRelevance);
                    // Convert ratio to a color between yellow and green
                    const greenIntensity = Math.floor(255 * ratio);
                    const yellowIntensity = 255 - greenIntensity;
                    const green = 225;
                    return `rgb(${yellowIntensity}, ${green}, 0)`;
                };

        let supportData = [];
        let referenceData = [];
        let relevanceDisplay = [];

                filteredData.forEach((item, index) => {
                    let className = index % 2 === 0 ? 'support-frame-94' : 'support-frame-135-b';
                    const color = getColorForRelevance(item.relevance);
                    const relevanceStyle = {
                        backgroundColor: color
                    };
                    
                    supportData.push({ content: item.paragraph, className });
                    referenceData.push({ content: `${item.title} - ${item.article_url}`, className });
                    relevanceDisplay.push({ style: relevanceStyle, className });
                });

                setSupportEvidence(supportData);
                setReferenceSources(referenceData);
                setRelevanceDisplay(relevanceDisplay);
    };
    

    const handleInquireClick = () => {
        
        // Get the value from the textarea
        var textareaValue = document.querySelector('.inquire-textbox').value;

        // Encode the textarea content to be used in a URL
        var encodedValue = encodeURIComponent(textareaValue);

        // Construct the URL with the textarea content
        var url = ` https://34.149.203.168/query_arxiv/arxiv?question=${encodedValue}`;

        // Send the request to the server
        fetch(url)
            .then(response => {
                // Make sure the response is OK and parse it as JSON
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log(data);

                const minRelevance = Math.min(...data.map(item => item.relevance));
                const maxRelevance = Math.max(...data.map(item => item.relevance));


                // Function to calculate color based on relevance
                const getColorForRelevance = (relevance) => {
                    const ratio = (relevance - minRelevance) / (maxRelevance - minRelevance);
                    // Convert ratio to a color between yellow and green
                    const greenIntensity = Math.floor(255 * ratio);
                    const yellowIntensity = 255 - greenIntensity;
                    const green = 225;
                    return `rgb(${yellowIntensity}, ${green}, 0)`;
                };
                setJsonData(data);
                const texts = jsonData.map((item, idx) => `Answer ${idx}: ${item.paragraph}`);
                const finalTexts = texts.join("\n");
                console.log("context", finalTexts )

                let supportData = [];
                let referenceData = [];
                let relevanceDisplay = [];

                data.forEach((item, index) => {
                    let className = index % 2 === 0 ? 'support-frame-94' : 'support-frame-135-b';
                    
                    const color = getColorForRelevance(item.relevance);
                    const relevanceStyle = {
                        backgroundColor: color
                    };

                    supportData.push({ content: item.paragraph, className });
                    referenceData.push({ content: `${item.title} - ${item.article_url}`, className });
                    relevanceDisplay.push({ style: relevanceStyle, className });
                });
               

                setSupportEvidence(supportData);
                setReferenceSources(referenceData);
                setRelevanceDisplay(relevanceDisplay);

                callOpenAI(textareaValue, finalTexts);
                // setAnswerText('output here'); // Update the answer text
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

    };
  


    const callOpenAI = async (question, finalTexts) => {
        const systemPrompt = `Answer the following input/question with either a detailed direct answer to the question/input or a detailed summary using the context below. Use the following text without adding any additional details.`;
        const userPrompt = `Question/Input: ${question}\nContext: ${finalTexts}`;
    
        const prompt = [
            { "role": "system", "content": systemPrompt },
            { "role": "user", "content": userPrompt }
        ];
    
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_OPEN_AI_KEY}` 
                    // Replace with your actual API key
                },
                body: JSON.stringify({
                    model: "gpt-4-1106-preview",
                    messages: prompt,
                    temperature: 0.7,
                    max_tokens: 4096,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setAnswerText(data.choices[0].message.content); // Update the answer state
            console.log()
        } catch (error) {
            console.error("Error calling OpenAI API:", error);
        }
    }
    

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
                    <img src={googleProfileImageUrl} alt="Profile Icon" className="profile-icon" />
                </div>

          <div className="gradient-rectangle">
            <h2 className="feature-title">Deeptech innovation Assistant</h2>
            
            <div className="sign-in">
                <span className="sign-in-text" onClick={handleSignOutClick}>Sign Out</span>
            </div>
          </div>
          <div className="feature-page-1">
            <div className="Inquire_feature-frame-108">
                <h2 className="inquire-header">Inquire Anything</h2>
                <div className="inquire-frame-95">
                    <p className="inquire-text-1">
                        The more specific, the better
                    </p>
                        <textarea className="inquire-textbox" placeholder="Enter your inquiry here">
                        
                        </textarea>
                        <div className="inquire-button_unlocked" onClick={handleInquireClick}>
                            <span className="sign-in-text">Inquire</span>
                        </div>
                    
                </div>
                <div className="answer-text-box"
                style={{
                    ...isDyslexiaFontEnabled && { backgroundColor: '#FFFFE0' }, // Only apply this style if isDyslexiaFontEnabled is true
                }}
                >
                    <p className="answer-header">Answer:</p>
                    <p className="answer-text"
                    style={{
                        ...isDyslexiaFontEnabled && { fontFamily: '"OpenDyslexic", sans-serif' }, // Only apply this style if isDyslexiaFontEnabled is true
                    }}
                    >
                        {answerText}
                    </p>
                </div>
            </div>
            <div className="support-frame-162">
                <div className="support-frame-126">
                    <p className="support-text-blue">Support Evidence</p>
                    <p className="mini-grey-text">(20 Items Found)</p>
                    <div className="dropdown-box">
                        <select className="inquire-text-1" onChange={handleFilterChange}>
                            <option value="all">All</option>
                            <option value="top10">Top 10</option>
                            <option value="top20">Top 20</option>
                        </select>
                    </div>
                    <p className="support-text-blue">Sort By</p>
                    <div className="dropdown-box">
                        <p className="inquire-text-1">
                            Year
                        </p>
                    </div>

                    <label>
                        <input
                            type="checkbox"
                            checked={isDyslexiaFontEnabled}
                            onChange={handleDyslexiaFontToggle}
                        />
                        Use Dyslexia-Friendly Font
                    </label>

                </div>
                <div className="support-frame-107">
                    <div className="support-frame-95">
                        <div className="support-frame-135">
                            <p className="support-text">Support evidence</p>
                        </div>
                        {supportEvidence.map((item, index) => (
                            <div key={index} className={item.className}>
                                {item.content}
                            </div>
                        ))}    
                    </div>
                    <div className="support-frame-95">
                        <div className="support-frame-135">
                            <p className="support-text">Reference & sources</p>
                        </div>
                        {referenceSources.map((item, index) => (
                            <div key={index} className={item.className}>
                                {item.content}
                            </div>
                        ))}
                    </div>
                    <div className="support-frame-95">
                        <div className="support-frame-135">
                            <p className="support-text">Relevance</p>
                        </div>
                        {relevanceDisplay.map((item, index) => (
                            <div key={index} className={`${item.className} relevance-circle`} style={item.style}></div>
                        ))}
                      
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
          {/* <div>
            <h2>Publishers</h2>
            {publishers.map(publisher => (
                <div key={publisher.homepage_url}>{publisher.homepage_url}</div>
            ))}
         </div> */}
        </div>
    );
}

export default Features;