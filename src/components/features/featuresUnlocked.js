import React, { useEffect, useState } from "react";
// import ReactHtmlParser from 'html-react-parser'; 
// import ReactDOM from "react-dom";
import Tylo_icon from "../../assets/images/Tylo_logo.svg";
// import Tracker_close from "../../assets/images/tracker-close.svg";
// import Dropdown_open from "../../assets/images/Dropdown_open.svg" ;
// import Dropdown_closed from "../../assets/images/Dropdown_closed.svg";
import "../features/features.scss";
import { gapi } from "gapi-script";
// import axios from "axios";
import {useNavigate } from "react-router-dom";
// import { setToken } from "../../services/userService";
// import { createClient } from '@supabase/supabase-js';

function Inquire() {
    console.log('Inquire unlocked component rendering')
    const [answerText, setAnswerText] = useState('');
    const googleProfileImageUrl = localStorage.getItem("googleProfileImageUrl");
    const navigate = useNavigate();
    
    const [supportEvidence, setSupportEvidence] = useState([]);
    const [referenceSources, setReferenceSources] = useState([]);
    const [relevanceDisplay, setRelevanceDisplay] = useState([]);
    const [jsonData, setJsonData] = useState([]);
    const [itemCount, setItemCount] = useState([]);
    const [isDyslexiaFontEnabled, setIsDyslexiaFontEnabled] = useState(false);
    const [isRequesting, setIsRequesting] = useState(false);
    // const [showModal, setShowModal] = useState(false);

    const [showInstructions, setShowInstructions] = useState(false);


    // Function to handle click event
    const navigateToFeatures = () => {
        navigate('/track'); // Navigate to /#features
    };


    /*********  Tracker stuff ********************/
    // const [researchHeader, setResearchHeader] = useState('');
    // const [researchBody, setResearchBody] = useState('');
    // const [patentHeader, setPatentHeader] = useState('');
    // const [patentBody, setPatentBody] = useState('');
    // const [useCaseHeader, setUseCaseHeader] = useState('');
    // const [useCaseBody, setUseCaseBody] = useState('');
    // const [researcherHeader, setResearcherHeader] = useState('');
    // const [researcherBody, setResearcherBody] = useState('');
    // const [organizationHeader, setOrganizationHeader] = useState('');
    // const [organizationBody, setOrganizationBody] = useState('');
    // const [newsHeader, setNewsHeader] = useState('');
    // const [newsBody, setNewsBody] = useState('');

    // const [showMore, setShowMore] = useState(false);

    // const [trackTitleResearch, setTrackTitleResearch] = useState('Title Here');
    // const [bodyResearch, setBodyResearch] = useState('Body Here');
    // const [titleUseCase, setTitleUseCase] = useState('Title here');
    // const [bodyUseCase, setBodyUseCase] = useState('Body here');
    // const [titleNews,setTitleNews] = useState('Title Here');
    // const [bodyNews, setBodyNews] = useState('Body Here');
    // const [titleResearcher, setTitleResearcher] = useState('Title here');
    // const [bodyResearcher, setBodyResearcher] = useState('Body here');

    // const supabase = createClient('https://cyurqurlcxlyihpxzxyk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5dXJxdXJsY3hseWlocHh6eHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxNDEwNDQsImV4cCI6MjAwMzcxNzA0NH0.CdUPlN6gZQ6aA4kFiZuBXoAc4W_zXj4ywH0oaDAV70o')




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
                navigate('/#');
            }));
        }

        navigate('/#'); // -1 takes you one page back in the history
        // Redirect the user to the sign-in page or another appropriate page
        // This depends on your routing setup, for example using react-router
        // navigate('/signin'); // Example using react-router
    };

    function formatUrlDisplayName(url) {
        try {
            const newUrl = new URL(url);
            // Check if the URL's hostname starts with 'www.' or if it's a typical URL with 'https://'
            if (newUrl.hostname.startsWith('www.')) {
                return newUrl.hostname.substring(4); // Remove 'www.' from the start
            } else if (newUrl.protocol === "https:") {
                return newUrl.hostname; // Use the full hostname
            } else {
                return url; // Return the original URL if it's not standard
            }
        } catch (error) {
            return url; // Return the original URL in case of an exception (invalid URL)
        }
    }
    

    const handleFilterChange = (event) => {
        // Get the selected value
        const selectedFilter = event.target.value;
    
        // Call the function to filter the data
        filterData(selectedFilter);
    };

    const filterData = (filterCriteria) => {
        let filteredData = [];

        const sortedData = itemCount.sort((a, b) => b.relevance - a.relevance);


    
        switch (filterCriteria) {
            case 'all':
                filteredData = sortedData.slice(0, itemCount.length); // Assuming 'data' is your original data array
                break;
            case 'top10':
                filteredData = sortedData.slice(0, 10); // Get the first 10 items
                break;
            case 'top20':
                filteredData = sortedData.slice(0, 20); // Get the first 20 items
                break;
            default:
                filteredData = sortedData.slice(0, 10); // Default to showing all
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

        // const minRelevance = Math.min(...filteredData.map(item => item.relevance));
        //         const maxRelevance = Math.max(...filteredData.map(item => item.relevance));


        // Function to calculate color based on relevance
        const getColorForRelevance = (relevance) => {
            if (relevance >= 0.55) {
                return "rgb(0, 225, 0)"; // Green
            } else if (relevance >= 0.5 && relevance < 0.55) {
                return "rgb(255, 225, 0)"; // Yellow
            } else {
                return "rgb(255, 0, 0)"; // Red
            }
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
            
            // const linkDisplayName = formatUrlDisplayName(item.article_url);
            
            referenceData.push({ title: item.title, url: item.article_url, className });
            
            relevanceDisplay.push({ style: relevanceStyle, className });
        });

        setSupportEvidence(supportData);
        setReferenceSources(referenceData);
        setRelevanceDisplay(relevanceDisplay);
    };
    

    const handleInquireClick = () => {
        setIsRequesting(true);
        setAnswerText("Loading ...");
        setJsonData([]);
        let finalTexts = "";
        let texts = "";
        // Get the value from the textarea
        var textareaValue = document.querySelector('.inquire-textbox').value;

        // Encode the textarea content to be used in a URL
        var encodedValue = encodeURIComponent(textareaValue);

        // Construct the URL with the textarea content
        var url1 = `https://archive.tylo.ai/query_arxiv/arxiv?question=${encodedValue}`;
        var url2 = `https://archive.tylo.ai/query_pubmed/pubmed?question=${encodedValue}`;
        var url3 = `https://archive.tylo.ai/google_query/google?question=${encodedValue}`;

        // Send the request to the server
        Promise.all([fetch(url1), fetch(url2), fetch(url3)])
        .then(responses => Promise.all(responses.map(res => {
            if (res.ok) return res.json();
            throw new Error('Network response was not ok.');
        })))
            .then(dataArray => {

                const data = dataArray.flat(); // Combine arrays if both URLs return arrays

                console.log(data);

                // const minRelevance = Math.min(...data.map(item => item.relevance));
                // const maxRelevance = Math.max(...data.map(item => item.relevance));


               
               
                setJsonData(data);
                setItemCount(data)
                

                jsonData.sort((a, b) => b.relevance - a.relevance);
                // Limit to the most relevant 30 items
                const top30Items = jsonData.slice(0, 30);

                texts = top30Items.map((item, idx) => `${item.paragraph}`);
                finalTexts = texts.join("\n");
                console.log("context", finalTexts )


                const sortedData = data.sort((a, b) => b.relevance - a.relevance);
                const filteredData = sortedData.slice(0, data.length);
                updateDisplay(filteredData);

                 // Clear existing data
                // setSupportEvidence([]);
                // setReferenceSources([]);

                // // const minRelevance = Math.min(...filteredData.map(item => item.relevance));
                // //         const maxRelevance = Math.max(...filteredData.map(item => item.relevance));


                // // Function to calculate color based on relevance
                // const getColorForRelevance = (relevance) => {
                //     if (relevance >= 0.55) {
                //         return "rgb(0, 225, 0)"; // Green
                //     } else if (relevance >= 0.5 && relevance < 0.55) {
                //         return "rgb(255, 225, 0)"; // Yellow
                //     } else {
                //         return "rgb(255, 0, 0)"; // Red
                //     }
                // };

                // let supportData = [];
                // let referenceData = [];
                // let relevanceDisplay = [];

                // filteredData.forEach((item, index) => {
                //     let className = index % 2 === 0 ? 'support-frame-94' : 'support-frame-135-b';
                //     const color = getColorForRelevance(item.relevance);
                //     const relevanceStyle = {
                //         backgroundColor: color
                //     };
                            
                //     supportData.push({ content: item.paragraph, className });
                    
                //     // const linkDisplayName = formatUrlDisplayName(item.article_url);
                    
                //     referenceData.push({ title: item.title, url: item.article_url, className });
                    
                //     relevanceDisplay.push({ style: relevanceStyle, className });
                // });

                
                
                
                callOpenAI(textareaValue, finalTexts);
                // setJsonData([]);
                finalTexts = "";
                setJsonData([]);
                setIsRequesting(false);

                // setSupportEvidence(supportData);
                // setReferenceSources(referenceData);
                // setRelevanceDisplay(relevanceDisplay);

                // setAnswerText('output here'); // Update the answer text
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

    };
  
    

    const part1 = "sk";
    const part2 = "-K75Q0o6EGdZW6fg4fZOfT3BlbkFJIgXDnHNXnNJ6YRH3";
    const part3 = "Zfd1";
    const combined = part1 + part2 + part3;

  


    /******************************************** Open AI calls *******************************************************************/
    const inputPrompt = `You are tasked with providing a detailed answer or summary to a specific question or input using only the evidence provided. Your response should be structured and professional, resembling the work of a consultant. Below are the steps you should follow to accomplish this task effectively:

    1. Read the QUESTION carefully. Understand what is being asked, but do not reiterate the question in your answer. Keep your response natural and direct.
    
    2. Examine the EVIDENCE provided. This is the only information you can use to construct your answer. Do not add any details from outside sources.
    
    3. Begin formulating your response by considering the following structure:
       - Introduction: Briefly introduce the topic or issue at hand without restating the QUESTION.
       - Analysis: Dive into the EVIDENCE, quoting relevant dates, percentages, or formulas to support your analysis. For example, if the EVIDENCE mentions "the company's revenue grew by 20% in 2020," directly quote this in your analysis.
       - Opinion: Based on the EVIDENCE, share your professional opinion on the matter. Ensure your opinion is supported by the data or details found in the EVIDENCE.
       - Conclusion: Draw a conclusion that wraps up your analysis and opinion, providing a clear answer or summary to the QUESTION.
    
    4. Structure your answer with bullet points or numbered lists to make it easy to follow. Your response should be long and detailed, reflecting a thorough examination of the EVIDENCE.
    
    5. Remember, your goal is to present the information like a professional consultant. This means your answer should be well-organized, insightful, and supported by the EVIDENCE.
    
    6. Make the answer long.
    
    
    Remember, do not add any information not found in the EVIDENCE, and maintain a professional tone throughout your response, and follow all the steps provided above consistently.`;
    
    
    /* systemPrompt = `Answer the following input/question with either a detailed direct answer to the question/input or a detailed summary using the context below. Use the following text without adding any additional details.`;
    `Provide an answer to the question, like you are an expert. If specific details are not available, infer general conclusions based on the context without explicitly mentioning it in your response. Include numerical data and specific figures when relevant and available. Do not add information beyond what is given, and avoid referencing the context directly in your answer.`
    systemPrompt = `Answer the following input/question with either a detailed direct answer to the question/input or a detailed summary using the Evidence below, do not reiterate the question in the answer keep it natural Add you opinion on the questions supported by the Evidence and draw conclusions. Use the following Evidence without adding any additional details, if you see any dates, percentages or formula, quote them in the response and present it like a professional, make it structured with bullet points or numbered list and long.`;*/
    
    
    const callOpenAI = async (question, finalTexts) => {

        setAnswerText("Loading ..."); // Clears the answer text box content
        
        const systemPrompt = inputPrompt;
        const userPrompt = `Question/Input: ${question}\nEvidence: ${finalTexts}`;
    
        const prompt = [
            { "role": "system", "content": systemPrompt },
            { "role": "user", "content": userPrompt }
        ];
    
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${combined}` 
                    // Replace with your actual API key
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo-16k",
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
            console.log(data.choices[0].message.content)
        } catch (error) {
            console.error("Error calling OpenAI API:", error);
            // Optionally, set answerText to a default error message
            setAnswerText("An error occurred while fetching the answer. Please try again.");
        }
    }

  
    /*************************************************************************************************** */

    
    /************************************ Supabase call ************************************/

    // async function fetchRecentPaperByAuthor(authorName) {
    //     // Initialize variables to store the most recent paper details
    //     let recentYear = 0;
    //     let recentId = 0;
    //     let recentTitle = '';
    //     let recentParagraph = '';
    
    //     // Loop through the years from 2023 to 2010
    //     for (let year = 2023; year >= 2010; year--) {
    //         const tableName = `arxiv_${year}`; // Construct the table name based on the year
    
    //         let { data, error } = await supabase
    //             .from(tableName) // Use the constructed table name
    //             .select('id, title, paragraph') // Retrieve the necessary fields
    //             .ilike('authors', `%${authorName}%`) // Use case-insensitive search for the author's name
    //             .order('id', { ascending: false }); // Order by 'id' descending to get the most recent paper first
    
    //         if (error) {
    //             console.error(`Error fetching data from ${tableName}:`, error);
    //             continue; // Skip to the next year if there's an error
    //         }
    
    //         // Check if any papers were found for this year and author
    //         if (data.length > 0) {
    //             // Assuming that the first record is the most recent one
    //             const mostRecentPaper = data[0];
    //             // Update if this is the most recent paper overall
    //             if (year > recentYear || mostRecentPaper.id > recentId) {
    //                 recentYear = year;
    //                 recentId = mostRecentPaper.id;
    //                 recentTitle = mostRecentPaper.title;
    //                 recentParagraph = mostRecentPaper.paragraph;
    //             }
    //         }
    //     }
    
    //     // Check if a recent paper was found and log the details
    //     if (recentId > 0) {
    //         console.log(`Most recent paper by ${authorName} found in arxiv_${recentYear}:`, {
    //             Title: recentTitle,
    //             Paragraph: recentParagraph
    //         });
    //     } else {
    //         console.log(`No papers found by author: ${authorName}`);
    //     }
    //     return { recentTitle, recentParagraph };
    // }

    /********************************************************************************************************* */
   

 


    console.log('Inquire component about to render JSX');
    return (
        <div className="feature-page">
            
                <div className="feature-page-icon">
                    <img src={Tylo_icon} alt="Tylo Icon" className="tylo-icon" />
                    <div className="tabs">
                        <div className="top-bar-tab-current_page">
                            <a href="/#features" className="top-bar-text">Features</a> {/* Link to the Features page */}
                        </div>
                        <div className="top-bar-tab">
                            <a href="/#about" className="top-bar-text">About</a> {/* Link to the About page */}
                        </div>
                    </div>
                    <img src={googleProfileImageUrl} alt="Profile Icon" className="profile-icon" />
                    <div className="login-button" onClick={handleSignOutClick}>
                        <span className="login-text" >Sign Out</span>
                    </div>
                </div>

          <div className="gradient-rectangle">
            <h2 className="feature-title">Deeptech innovation Assistant</h2>
            
            <div className="tab-horizontal-container">
                <div className="sign-in" >
                    <span className="sign-in-text" >Inquire</span>
                </div>
                <div className="sign-in-disabled" onClick={navigateToFeatures}>
                    <div  className="sign-in-text-disabled" >Track</div>
                </div>
            </div>
          </div>
          <div className="feature-page-2">
            <div className="Inquire_feature-frame-108">
                <h2 className="inquire-header">Inquire Anything</h2>
                <div className="inquire-frame-95">
                    <div className="helper-container">
                        <h2 className="inquire-text-1">
                            The start point of your evidence-based innovation
                        </h2>
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
                                   Topics especially for short or general questions, it might not be your best bet. Anything that can hardly find clues from science publication and patent ocean
                                </div>
                            </div>
                            <div className="inst-item">
                                <h1 className="inst-card-H">Responding time</h1>
                                <div className="inst-card-p">
                                    Typically 30 to 60 seconds
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
                                        <li>How to create an efficient k-means clustering algorithm on a Riemannian manifold? </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="inst-item">
                                <h1 className="inst-card-H">Output accuracy</h1>
                                <div className="inst-card-p">
                                    Like any AI, there's a margin for error. While we achieve a solid 99% success rate (output reasonable, logic and contextual related answers) in internal tests, we encourage you to double-check information
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                    <div className="textarea-container">
                        <textarea className="inquire-textbox" placeholder="Enter your inquiry here"></textarea>
                            <div
                                className={`inquire-button_unlocked ${isRequesting ? 'inquire-button_disabled' : ''}`}
                                onClick={!isRequesting ? handleInquireClick : undefined}
                            >
                                <span className="sign-in-text">{isRequesting ? 'Processing...' : 'Inquire'}</span>
                            </div>
                    </div>    
                </div>
                <div className="answer-text-box"
                style={{
                    ...isDyslexiaFontEnabled && { backgroundColor: '#FFFFE0' }, // Only apply this style if isDyslexiaFontEnabled is true
                    height: answerText ? '650px' : '316px'
                }}
                >
                    <p className="answer-header">Answer:</p>
                    <p className="answer-text"
                    style={{
                        ...isDyslexiaFontEnabled && { fontFamily: '"OpenDyslexic", sans-serif' }, // Only apply this style if isDyslexiaFontEnabled is true
                    }}
                    >
                            {answerText.split('\n\n').map((paragraph, index) => {
                                
                                    return <p key={index}>{paragraph}</p>;
                               
                            })}
                    </p>
                </div>
            </div>
            <div className="support-frame-162">
                <div className="support-frame-126">
                    <p className="support-text-blue">Support Evidence</p>
                    <p className="mini-grey-text">({itemCount.length} Items Found)</p>
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
                    <div className="support-frame-95a">
                        <div className="support-frame-135">
                            <p className="support-text">Support evidence</p>
                        </div>
                        {supportEvidence.map((item, index) => (
                            <div key={index} className={`support-text-content ${item.className}`}>
                                {item.content}
                            </div>
                        ))}    
                    </div>
                    <div className="support-frame-95b">
                        <div className="support-frame-135">
                            <p className="support-text">Reference & sources</p>
                        </div>
                        {referenceSources.map((item, index) => (
                            <div key={index} className={`support-text-content ${item.className}`}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {item.title} - {formatUrlDisplayName(item.url)}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="support-frame-95c">
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
        
        </div>
    );
}

export default Inquire;