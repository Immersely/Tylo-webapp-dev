import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import Tylo_icon from "../../assets/images/Tylo_logo.svg";
import Tracker_close from "../../assets/images/tracker-close.svg";
// import Dropdown_open from "../../assets/images/Dropdown_open.svg" ;
// import Dropdown_closed from "../../assets/images/Dropdown_closed.svg";
import "../features/features.scss";
import { gapi } from "gapi-script";
// import axios from "axios";
import {useNavigate } from "react-router-dom";
// import { setToken } from "../../services/userService";
import { createClient } from '@supabase/supabase-js';


function Track() {
    console.log('Track component rendering')
    // const [answerText, setAnswerText] = useState('');
    const googleProfileImageUrl = localStorage.getItem("googleProfileImageUrl");
    const navigate = useNavigate();
    
    // const [supportEvidence, setSupportEvidence] = useState([]);
    // const [referenceSources, setReferenceSources] = useState([]);
    // const [relevanceDisplay, setRelevanceDisplay] = useState([]);
    // const [jsonData, setJsonData] = useState([]);
    // const [itemCount, setItemCount] = useState([]);
    // const [isDyslexiaFontEnabled, setIsDyslexiaFontEnabled] = useState(false);
    // const [isRequesting, setIsRequesting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    /*********  Tracker stuff ********************/
    const [researchHeader, setResearchHeader] = useState('');
    const [researchBody, setResearchBody] = useState('');
    const [patentHeader, setPatentHeader] = useState('');
    const [patentBody, setPatentBody] = useState('');
    const [useCaseHeader, setUseCaseHeader] = useState('');
    const [useCaseBody, setUseCaseBody] = useState('');
    const [researcherHeader, setResearcherHeader] = useState('');
    const [researcherBody, setResearcherBody] = useState('');
    const [organizationHeader, setOrganizationHeader] = useState('');
    const [organizationBody, setOrganizationBody] = useState('');
    const [newsHeader, setNewsHeader] = useState('');
    const [newsBody, setNewsBody] = useState('');

    const [showMore, setShowMore] = useState(false);

    const [trackTitleResearch, setTrackTitleResearch] = useState('Title Here');
    const [bodyResearch, setBodyResearch] = useState('Body Here');
    const [titleUseCase, setTitleUseCase] = useState('Title here');
    const [bodyUseCase, setBodyUseCase] = useState('Body here');
    const [titleNews,setTitleNews] = useState('Title Here');
    const [bodyNews, setBodyNews] = useState('Body Here');
    const [titleResearcher, setTitleResearcher] = useState('Title here');
    const [bodyResearcher, setBodyResearcher] = useState('Body here');

    const supabase = createClient('https://cyurqurlcxlyihpxzxyk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5dXJxdXJsY3hseWlocHh6eHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxNDEwNDQsImV4cCI6MjAwMzcxNzA0NH0.CdUPlN6gZQ6aA4kFiZuBXoAc4W_zXj4ywH0oaDAV70o')




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

    // const handleFilterChange = (event) => {
    //     // Get the selected value
    //     const selectedFilter = event.target.value;
    
    //     // Call the function to filter the data
    //     filterData(selectedFilter);
    // };

    // const filterData = (filterCriteria) => {
    //     let filteredData = [];

    //     const sortedData = itemCount.sort((a, b) => b.relevance - a.relevance);


    
    //     switch (filterCriteria) {
    //         case 'all':
    //             filteredData = sortedData.slice(0, itemCount.length
    //                 );; // Assuming 'data' is your original data array
    //             break;
    //         case 'top10':
    //             filteredData = sortedData.slice(0, 10); // Get the first 10 items
    //             break;
    //         case 'top20':
    //             filteredData = sortedData.slice(0, 20); // Get the first 20 items
    //             break;
    //         default:
    //             filteredData = sortedData; // Default to showing all
    //     }
    
    //     updateDisplay(filteredData);
        
    // };

    
    // const handleDyslexiaFontToggle = (event) => {
    //     setIsDyslexiaFontEnabled(event.target.checked);
    // };

    // const updateDisplay = (filteredData) => {
    //     // Your logic to update the UI
    //     // This might involve clearing the existing displayed data
    //     // and then iterating over 'filteredData' to display each item

    //     // Clear existing data
    //     setSupportEvidence([]);
    //     setReferenceSources([]);

    //     // const minRelevance = Math.min(...filteredData.map(item => item.relevance));
    //     //         const maxRelevance = Math.max(...filteredData.map(item => item.relevance));


    //             // Function to calculate color based on relevance
    //             const getColorForRelevance = (relevance) => {
    //                 if (relevance >= 0.55) {
    //                     return "rgb(0, 225, 0)"; // Green
    //                 } else if (relevance >= 0.5 && relevance < 0.55) {
    //                     return "rgb(255, 225, 0)"; // Yellow
    //                 } else {
    //                     return "rgb(255, 0, 0)"; // Red
    //                 }
    //             };

    //     let supportData = [];
    //     let referenceData = [];
    //     let relevanceDisplay = [];

    //             filteredData.forEach((item, index) => {
    //                 let className = index % 2 === 0 ? 'support-frame-94' : 'support-frame-135-b';
    //                 const color = getColorForRelevance(item.relevance);
    //                 const relevanceStyle = {
    //                     backgroundColor: color
    //                 };
                    
    //                 supportData.push({ content: item.paragraph, className });
    //                 referenceData.push({ content: `${item.title} - ${item.article_url}`, className });
    //                 relevanceDisplay.push({ style: relevanceStyle, className });
    //             });

    //             setSupportEvidence(supportData);
    //             setReferenceSources(referenceData);
    //             setRelevanceDisplay(relevanceDisplay);
    // };
    

    // const handleInquireClick = () => {
    //     setIsRequesting(true);
    //     setAnswerText("Loading ...");
    //     setJsonData([]);
    //     let finalTexts = "";
    //     let texts = "";
    //     // Get the value from the textarea
    //     var textareaValue = document.querySelector('.inquire-textbox').value;

    //     // Encode the textarea content to be used in a URL
    //     var encodedValue = encodeURIComponent(textareaValue);

    //     // Construct the URL with the textarea content
    //     var url1 = `https://archive.tylo.ai/query_arxiv/arxiv?question=${encodedValue}`;
    //     var url2 = `https://archive.tylo.ai/query_pubmed/pubmed?question=${encodedValue}`;
    //     var url3 = `https://archive.tylo.ai/google_query/google?question=${encodedValue}`;

    //     // Send the request to the server
    //     Promise.all([fetch(url1), fetch(url2), fetch(url3)])
    //     .then(responses => Promise.all(responses.map(res => {
    //         if (res.ok) return res.json();
    //         throw new Error('Network response was not ok.');
    //     })))
    //         .then(dataArray => {

    //             const data = dataArray.flat(); // Combine arrays if both URLs return arrays

    //             console.log(data);

    //             const minRelevance = Math.min(...data.map(item => item.relevance));
    //             const maxRelevance = Math.max(...data.map(item => item.relevance));


    //             // Function to calculate color based on relevance
    //             const getColorForRelevance = (relevance) => {
    //                 const ratio = (relevance - minRelevance) / (maxRelevance - minRelevance);
    //                 // Convert ratio to a color between yellow and green
    //                 const greenIntensity = Math.floor(255 * ratio);
    //                 const yellowIntensity = 255 - greenIntensity;
    //                 const green = 225;
    //                 return `rgb(${yellowIntensity}, ${green}, 0)`;
    //             };
                
               
    //             setJsonData(data);
    //             setItemCount(data)
                

    //             jsonData.sort((a, b) => b.relevance - a.relevance);
    //             // Limit to the most relevant 30 items
    //             const top30Items = jsonData.slice(0, 30);

    //             texts = top30Items.map((item, idx) => `${item.paragraph}`);
    //             finalTexts = texts.join("\n");
    //             console.log("context", finalTexts )

    //             let supportData = [];
    //             let referenceData = [];
    //             let relevanceDisplay = [];

    //             data.forEach((item, index) => {
    //                 let className = index % 2 === 0 ? 'support-frame-94' : 'support-frame-135-b';
                    
    //                 const color = getColorForRelevance(item.relevance);
    //                 const relevanceStyle = {
    //                     backgroundColor: color
    //                 };

    //                 supportData.push({ content: item.paragraph, className });
    //                 referenceData.push({ content: `${item.title} - ${item.article_url}`, className });
    //                 relevanceDisplay.push({ style: relevanceStyle, className });
    //             });
               

    //             setSupportEvidence(supportData);
    //             setReferenceSources(referenceData);
    //             setRelevanceDisplay(relevanceDisplay);

                
    //             callOpenAI(textareaValue, finalTexts);
    //             // setJsonData([]);
    //             finalTexts = "";
    //             setJsonData([]);
    //             setIsRequesting(false);

    //             // setAnswerText('output here'); // Update the answer text
    //         })
    //         .catch(error => {
    //             console.error('There has been a problem with your fetch operation:', error);
    //         });

    // };
  
    

    const part1 = "sk";
    const part2 = "-K75Q0o6EGdZW6fg4fZOfT3BlbkFJIgXDnHNXnNJ6YRH3";
    const part3 = "Zfd1";
    const combined = part1 + part2 + part3;

  


    /******************************************** Open AI calls *******************************************************************/
    /* systemPrompt = `Answer the following input/question with either a detailed direct answer to the question/input or a detailed summary using the context below. Use the following text without adding any additional details.`;
    `Provide an answer to the question, like you are an expert. If specific details are not available, infer general conclusions based on the context without explicitly mentioning it in your response. Include numerical data and specific figures when relevant and available. Do not add information beyond what is given, and avoid referencing the context directly in your answer.`*/
    // const callOpenAI = async (question, finalTexts) => {

    //     setAnswerText(""); // Clears the answer text box content
        
    //     const systemPrompt = `Answer the following input/question with either a detailed direct answer to the question/input or a detailed summary using the context below. Use the following text without adding any additional details, if you see any dates, percentages or formula, quote them in the response.`;
    //     const userPrompt = `Question/Input: ${question}\nContext: ${finalTexts}`;
    
    //     const prompt = [
    //         { "role": "system", "content": systemPrompt },
    //         { "role": "user", "content": userPrompt }
    //     ];
    
    //     try {
    //         const response = await fetch("https://api.openai.com/v1/chat/completions", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": `Bearer ${combined}` 
    //                 // Replace with your actual API key
    //             },
    //             body: JSON.stringify({
    //                 model: "gpt-3.5-turbo-16k",
    //                 messages: prompt,
    //                 temperature: 0.7,
    //                 max_tokens: 4096,
    //                 top_p: 1,
    //                 frequency_penalty: 0,
    //                 presence_penalty: 0
    //             })
    //         });

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }

    //         const data = await response.json();
    //         setAnswerText(data.choices[0].message.content); // Update the answer state
    //     } catch (error) {
    //         console.error("Error calling OpenAI API:", error);
    //         // Optionally, set answerText to a default error message
    //         setAnswerText("An error occurred while fetching the answer. Please try again.");
    //     }
    // }

    const trackerOpenAI = async (Callprompt, finalTexts) => {
  
        const systemPrompt = `Answer the following prompt using the context given `;
        const userPrompt = `Prompt: ${Callprompt} \nContext: ${finalTexts}`;
    
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
            return data.choices[0].message.content;
        } catch (error) {
            console.error("Error calling OpenAI API:", error);
            return null;
            
        }
    }

    /*************************************************************************************************** */

    
    /************************************ Supabase call ************************************/

    async function fetchRecentPaperByAuthor(authorName) {
        // Initialize variables to store the most recent paper details
        let recentYear = 0;
        let recentId = 0;
        let recentTitle = '';
        let recentParagraph = '';
    
        // Loop through the years from 2023 to 2010
        for (let year = 2023; year >= 2010; year--) {
            const tableName = `arxiv_${year}`; // Construct the table name based on the year
    
            let { data, error } = await supabase
                .from(tableName) // Use the constructed table name
                .select('id, title, paragraph') // Retrieve the necessary fields
                .ilike('authors', `%${authorName}%`) // Use case-insensitive search for the author's name
                .order('id', { ascending: false }); // Order by 'id' descending to get the most recent paper first
    
            if (error) {
                console.error(`Error fetching data from ${tableName}:`, error);
                continue; // Skip to the next year if there's an error
            }
    
            // Check if any papers were found for this year and author
            if (data.length > 0) {
                // Assuming that the first record is the most recent one
                const mostRecentPaper = data[0];
                // Update if this is the most recent paper overall
                if (year > recentYear || mostRecentPaper.id > recentId) {
                    recentYear = year;
                    recentId = mostRecentPaper.id;
                    recentTitle = mostRecentPaper.title;
                    recentParagraph = mostRecentPaper.paragraph;
                }
            }
        }
    
        // Check if a recent paper was found and log the details
        if (recentId > 0) {
            console.log(`Most recent paper by ${authorName} found in arxiv_${recentYear}:`, {
                Title: recentTitle,
                Paragraph: recentParagraph
            });
        } else {
            console.log(`No papers found by author: ${authorName}`);
        }
        return { recentTitle, recentParagraph };
    }

    /********************************************************************************************************* */
   
   
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);


    const onResearchSubmit = async () => {
        closeModal();
        await handleResearch();
        await handleUseCase();
        await handleNews(); 
        await handleResearcher();
    };

    const handleResearch = async () => {
       // Combine the research header and body to form the full query
        let fullQuery = `${researchHeader} of ${researchBody}`;
        let encodedQuery = encodeURIComponent(fullQuery);

        // Construct the URL with the query
        let apiUrl = `https://archive.tylo.ai/query_arxiv/arxiv?question=${encodedQuery}`;

        try {
            // Await the response directly within the async function
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const articles = await response.json();
            if (articles && articles.length > 0) {
                // Find the article with the highest relevance
                let highestRelevanceArticle = articles.reduce((max, article) => max.relevance > article.relevance ? max : article, articles[0]);

                // Extract and use the necessary details from the article
                const details = {
                    title: highestRelevanceArticle.title,
                    id: highestRelevanceArticle.id,
                    articleUrl: highestRelevanceArticle.article_url,
                    paragraph: highestRelevanceArticle.paragraph
                };

               

                // Now call trackerOpenAI asynchronously within the async context of handleResearch
                const summaryData = await trackerOpenAI('Summarise the context like an article', details.paragraph);
                 setTrackTitleResearch(details.title);
                // Update state with the returned data
                if (summaryData) {
                    const fullText = summaryData; // Full text from OpenAI
                    setBodyResearch(fullText); // Update state with the full text
                } else {
                    console.error("OpenAI response is empty or not in the expected format");
                }
                
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };
    // const handlePatent = async () => {
    //     return `${patentHeader} of ${patentBody}`;
    // };
    const handleUseCase = async () => {
        let fullQuery = `${useCaseHeader} of ${useCaseBody}`;
        let encodedQuery = encodeURIComponent(fullQuery);

        // Construct the URL with the query
        let apiUrl = `https://archive.tylo.ai/query_arxiv/arxiv?question=${encodedQuery}`;

        try {
            // Await the response directly within the async function
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const articles = await response.json();
            if (articles && articles.length > 0) {
                // Find the article with the highest relevance
                let highestRelevanceArticle = articles.reduce((max, article) => max.relevance > article.relevance ? max : article, articles[0]);

                // Extract and use the necessary details from the article
                const details = {
                    title: highestRelevanceArticle.title,
                    id: highestRelevanceArticle.id,
                    articleUrl: highestRelevanceArticle.article_url,
                    paragraph: highestRelevanceArticle.paragraph
                };

                // Now call trackerOpenAI asynchronously within the async context of handleResearch
                const summaryData = await trackerOpenAI('give me a use case and be direct and confident', details.paragraph);
                setTitleUseCase(details.title);
                // Update state with the returned data
                if (summaryData) {
                    const fullText = summaryData; // Full text from OpenAI
                    setBodyUseCase(fullText); // Update state with the full text
                } else {
                    console.error("OpenAI response is empty or not in the expected format");
                }
                
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };
    const handleResearcher = async () => {
        // Call the function and wait for the result
        const { recentTitle, recentParagraph } = await fetchRecentPaperByAuthor(researcherHeader);

        // Set the title and paragraph for the researcher
        setTitleResearcher(recentTitle);
        setBodyResearcher(recentParagraph);
    };

    // const handleOrganization = () => {
    //     return `${organizationHeader} of ${organizationBody}`;
    // };
    const handleNews = async () => {
        let fullQuery = `${newsHeader} of ${newsBody}`;
        let encodedQuery = encodeURIComponent(fullQuery);

        // Construct the URL with the query
        let apiUrl = `https://archive.tylo.ai/google_query/google?question=${encodedQuery}`;

        try {
            // Await the response directly within the async function
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const articles = await response.json();
            if (articles && articles.length > 0) {
                // Find the article with the highest relevance
                let highestRelevanceArticle = articles.reduce((max, article) => max.relevance > article.relevance ? max : article, articles[0]);

                // Extract and use the necessary details from the article
                const details = {
                    title: highestRelevanceArticle.title,
                    id: highestRelevanceArticle.id,
                    articleUrl: highestRelevanceArticle.article_url,
                    full_text: highestRelevanceArticle.full_text
                };

               

                // Now call trackerOpenAI asynchronously within the async context of handleResearch
                const summaryData = await trackerOpenAI('Summarise this news article', details.full_text);
                setTitleNews(details.title);
                // Update state with the returned data
                if (summaryData) {
                    const fullText = summaryData; // Full text from OpenAI
                    setBodyNews(fullText); // Update state with the full text
                } else {
                    console.error("OpenAI response is empty or not in the expected format");
                }
                
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    const firstSentence = bodyResearch.split(/[.!?]+/)[0] + '.';
    const firstSentence2 = bodyUseCase.split(/[.!?]+/)[0] + '.';
    const firstSentence3 = bodyNews.split(/[.!?]+/)[0] + '.';
    const firstSentence4 = bodyResearcher.split(/[.!?]+/)[0] + '.';

    console.log('Track component about to render JSX');
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
                        <div className="login-button" onClick={handleSignOutClick}>
                            <span className="login-text" >Sign Out</span>
                        </div>
                </div>

          <div className="gradient-rectangle">
            <h2 className="feature-title">Spend Less, Innovate More</h2>
            <div className="tab-horizontal-container">
                <div className="sign-in-disabled" >
                    <a href="/#features" className="sign-in-text-disabled" >Inquire</a>
                </div>
                <div className="sign-in" >
                    <span className="sign-in-text" >Track</span>
                </div>
            </div>
          </div>
          <div className="feature-page-2">
          <div className="track-frame-main">
                <h2 className="inquire-header">Track anything</h2>
                <div className="buttons-container">
                    <div className="track-button-1">
                        <h2 className="track-button-1-text">Add Email Push</h2>
                    </div>
                    <div className="track-button-2" onClick={openModal}>
                        <h2 className="track-button-2-text" >Tracker</h2>
                    </div>
                </div>
            </div>
             {/* <!-- Tracker Modal --> */}
            <div id="trackerModal" style={{display: showModal ? 'block' : 'none'}} class="backdrop-background" >
            <div className="customise-tracker-background">
                <div className="customise-tracker-container">
                    <h2 className="customise-tracker-font">Customize your Tracker</h2>
                    <div className="close-button" onClick={closeModal}>
                        <img src={Tracker_close} alt="Close" /> 
                    </div>
                </div>
                <div className="item-container-205">
                    <div className="item-container-95">
                        <div className="item-container-135">
                            <h2 className="item-font">Item</h2>
                        </div>
                        <div className="item-container-136">
                            <h2 className="item-font-sections">01</h2>
                        </div>
                        <div className="item-container-136">
                            <h2 className="item-font-sections">02</h2>
                        </div>
                        <div className="item-container-136">
                            <h2 className="item-font-sections">03</h2>
                        </div>
                        <div className="item-container-136">
                            <h2 className="item-font-sections">04</h2>
                        </div>
                        <div className="item-container-136">
                            <h2 className="item-font-sections">05</h2>
                        </div>
                        <div className="item-container-136">
                            <h2 className="item-font-sections">06</h2>
                        </div>
                    </div>
                    <div className="item-container-100">
                        <div className="tracker-135">
                            <h2 className="item-font">Track</h2>
                        </div>
                        <div className="tracker-142">
                            <input 
                                type="text"
                                className="tracker-96"
                                placeholder="Research"
                                value={researchHeader}
                                onChange={(e) => setResearchHeader(e.target.value)}
                            />
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={researchBody}
                                    onChange={(e) => setResearchBody(e.target.value)}
                                />
                        </div>
                        <div className="tracker-142">
                            <input 
                                type="text"
                                className="tracker-96"
                                placeholder="Patent"
                                value={patentHeader}
                                onChange={(e) => setPatentHeader(e.target.value)}
                            />
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={patentBody}
                                    onChange={(e) => setPatentBody(e.target.value)}
                                />
                        </div>
                        <div className="tracker-142">
                            <input 
                                type="text"
                                className="tracker-96"
                                placeholder="Use Case"
                                value={useCaseHeader}
                                onChange={(e) => setUseCaseHeader(e.target.value)}
                            />
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={useCaseBody}
                                    onChange={(e) => setUseCaseBody(e.target.value)}
                                />
                        </div>
                        <div className="tracker-142">
                            <input 
                                type="text"
                                className="tracker-96"
                                placeholder="Researcher"
                                value={researcherHeader}
                                onChange={(e) => setResearcherHeader(e.target.value)}
                            />
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={researcherBody}
                                    onChange={(e) => setResearcherBody(e.target.value)}
                                />
                        </div>
                        <div className="tracker-142">
                            <input 
                                type="text"
                                className="tracker-96"
                                placeholder="Organization"
                                value={organizationHeader}
                                onChange={(e) => setOrganizationHeader(e.target.value)}
                            />
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={organizationBody}
                                    onChange={(e) => setOrganizationBody(e.target.value)}
                                />
                        </div>
                        <div className="tracker-142">
                            <input 
                                type="text"
                                className="tracker-96"
                                placeholder="News"
                                value={newsHeader}
                                onChange={(e) => setNewsHeader(e.target.value)}
                            />
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={newsBody}
                                    onChange={(e) => setNewsBody(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="item-container-98">
                        <div className="frequency-135">
                            <h2 className="item-font">Frequency</h2>
                        </div>
                        <div className="frequency-136">
                            <div className="frequency-96">
                                <h2 className="tracker-font">Weekly</h2>
                            </div>
                        </div>
                        <div className="frequency-136">
                            <div className="frequency-96">
                                <h2 className="tracker-font">Weekly</h2>
                            </div>
                        </div>
                        <div className="frequency-136">
                            <div className="frequency-96">
                                <h2 className="tracker-font">Weekly</h2>
                            </div>
                        </div>
                        <div className="frequency-136">
                            <div className="frequency-96">
                                <h2 className="tracker-font">Weekly</h2>
                            </div>
                        </div>
                        <div className="frequency-136">
                            <div className="frequency-96">
                                <h2 className="tracker-font">Weekly</h2>
                            </div>
                        </div>
                        <div className="frequency-136">
                            <div className="frequency-96">
                                <h2 className="tracker-font">Weekly</h2>
                            </div>
                        </div>
                    </div>
                    <div className="bin-column"></div>
                </div>
                <div className="save-bar">
                    <div className="save-button" onClick={onResearchSubmit}>
                        <span className="save-button-text">Save</span>
                    </div>

                </div>
            </div>
            </div>
            <div className="track-frame-154">
                <div className="vector-68"></div>
                <div className="track-frame-150">
                    
                    <div className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">Research</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">{trackTitleResearch}</h2>
                            <div className="track-body">
                                <body className="track-body-font">
                                    {showMore ? bodyResearch : firstSentence}
                                    {bodyResearch !== firstSentence && (
                                        <button onClick={() => setShowMore(!showMore)} className="view-more-button">
                                            {showMore ? 'View Less' : 'View More'}
                                        </button>
                                    )}
                                    <span className="track-ref-font"> (Ref here)</span>
                                </body>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">Use Case</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">{titleUseCase}</h2>
                            <div className="track-body">
                                <body className="track-body-font">
                                    {showMore ? bodyUseCase : firstSentence2}
                                        {bodyUseCase !== firstSentence2 && (
                                            <button onClick={() => setShowMore(!showMore)} className="view-more-button">
                                                {showMore ? 'View Less' : 'View More'}
                                            </button>
                                        )}
                                    <span className="track-ref-font"> (Ref here)</span>
                                </body>
                            </div>
                            
                        </div>
                    </div>
                    <div className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">Patent</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">Title Here</h2>
                            <div className="track-body">
                            <body className="track-body-font">
                                    Body Here.
                                    <span className="track-ref-font"> (Ref here)</span>
                                </body>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="track-frame-150">
                    
                    <div className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">Researcher</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">{titleResearcher}</h2>
                            <div className="track-body">
                                <body className="track-body-font">
                                    {showMore ? bodyResearcher : firstSentence4}
                                        {bodyResearcher !== firstSentence4 && (
                                            <button onClick={() => setShowMore(!showMore)} className="view-more-button">
                                                {showMore ? 'View Less' : 'View More'}
                                            </button>
                                        )}
                                    <span className="track-ref-font"> (Ref here)</span>
                                </body>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">News</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">{titleNews}</h2>
                            <div className="track-body">
                                <body className="track-body-font">
                                    {showMore ? bodyNews : firstSentence3}
                                        {bodyNews !== firstSentence3 && (
                                            <button onClick={() => setShowMore(!showMore)} className="view-more-button">
                                                {showMore ? 'View Less' : 'View More'}
                                            </button>
                                        )}
                                    <span className="track-ref-font"> (Ref here)</span>
                                </body>
                            </div>
                            
                        </div>
                    </div>
                    <div className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">Organization</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">Title Here</h2>
                            <div className="track-body">
                            <body className="track-body-font">
                                    Body Here.
                                    <span className="track-ref-font"> (Ref here)</span>
                                </body>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
    );
}

export default Track;