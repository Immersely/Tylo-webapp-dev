import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import Tylo_icon from "../../assets/images/Tylo_logo.svg";
import Tracker_close from "../../assets/images/tracker-close.svg";
import Tracker from "../../assets/images/Customize your tracker.PNG";
import forYou from "../../assets/images/For_You.PNG";
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
    const [showInstructions, setShowInstructions] = useState(false);

    /** Selection dropdoen */
    // const [selectedHeader, setSelectedHeader] = useState('');
    const [selectionCounts, setSelectionCounts] = useState({
        Research: 0,
        UseCase: 0,
        News: 0,
        Researcher: 0,
        Patent: 0,
        Organization: 0
    });
    const [currentBody1, setCurrentBody1] = useState('');
    const [currentBody2, setCurrentBody2] = useState('');
    const [currentBody3, setCurrentBody3] = useState('');
    const [currentBody4, setCurrentBody4] = useState('');
    const [currentBody5, setCurrentBody5] = useState('');
    const [currentBody6, setCurrentBody6] = useState('');
    const [selectedOption1, setSelectedOption1] = useState('Research');
    const [selectedOption2, setSelectedOption2] = useState('Patent');
    const [selectedOption3, setSelectedOption3] = useState('Use case');
    const [selectedOption4, setSelectedOption4] = useState('Researcher');
    const [selectedOption5, setSelectedOption5] = useState('Organization');
    const [selectedOption6, setSelectedOption6] = useState('News');



    /*********  Tracker stuff ********************/
    const [researchHeader, setResearchHeader] = useState('Research');
    // const [patentHeader, setPatentHeader] = useState('');
    // const [patentBody, setPatentBody] = useState('');
    const [useCaseHeader, setUseCaseHeader] = useState('Use case');
    // const [researcherHeader, setResearcherHeader] = useState('');
    // const [organizationHeader, setOrganizationHeader] = useState('Organization');
    const [newsHeader, setNewsHeader] = useState('News');

    const [trackTitleResearch, setTrackTitleResearch] = useState('Title Here');
    const [bodyResearch, setBodyResearch] = useState('Body Here');
    const [titleUseCase, setTitleUseCase] = useState('Title here');
    const [bodyUseCase, setBodyUseCase] = useState('Body here');
    const [titleNews,setTitleNews] = useState('Title Here');
    const [bodyNews, setBodyNews] = useState('Body Here');
    const [titleResearcher, setTitleResearcher] = useState('Title here');
    const [bodyResearcher, setBodyResearcher] = useState('Body here');
    const [titleOrganization, setTitleOrganization] = useState('Title here');
    const [bodyOrganization, setBodyOrganization] = useState('Body here');
    const [titlePatent, setTitlePatent] = useState('Title here');
    const [bodyPatent, setBodyPatent] = useState('Body here');

    const [refPatent, setRefPatent] = useState('');
    const [refUseCase, setRefUseCase] = useState('');
    const [refNews, setRefNews] = useState('');
    const [refOrg, setRefOrg] = useState('');





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
                navigate('/#');
            }));
        }

        navigate('/#'); // -1 takes you one page back in the history
        // Redirect the user to the sign-in page or another appropriate page
        // This depends on your routing setup, for example using react-router
        // navigate('/signin'); // Example using react-router
    };
    

    const part1 = "sk";
    const part2 = "-K75Q0o6EGdZW6fg4fZOfT3BlbkFJIgXDnHNXnNJ6YRH3";
    const part3 = "Zfd1";
    const combined = part1 + part2 + part3;

  


    /******************************************** Open AI calls *******************************************************************/
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

    const handleSelectionChange = (optionNumber, event) => {
        console.log('selector called')
        const newValue = event.target.value;
        switch (optionNumber) {
            case 1:
                setSelectedOption1(newValue);
                // console.log('new vale is', newValue )
                break;
            case 2:
                setSelectedOption2(newValue);
                break;
            case 3:
                setSelectedOption3(newValue);
                break;
            case 4:
                setSelectedOption4(newValue);
                break;
            case 5:
                setSelectedOption5(newValue);
                break;
            case 6:
                setSelectedOption6(newValue);
                break;
            default:
                // Handle unexpected option number
                break;
        }
        
    };
    

    const onResearchSubmit = async () => {
        closeModal();
        
        const newSelectionCounts = { ...selectionCounts };
        const selectedOptions = [selectedOption1, selectedOption2, selectedOption3, selectedOption4, selectedOption5, selectedOption6];
        const currentBodys = [currentBody1, currentBody2, currentBody3, currentBody4, currentBody5, currentBody6]
        // const newCards = [];
        console.log('selected option is', selectedOption1 )
        for (let i = 0; i < 5; i++){
            const selectedOption = selectedOptions[i];
            const currentBody = currentBodys[i].trim();
            console.log('selected option',[i], 'is', selectedOption )
            console.log('Current body',[i], 'is', currentBody )

            if (currentBody !== '') { // Only proceed if the body is not empty

                // Reset the count for the selected option before updating
                if (newSelectionCounts[selectedOption] !== undefined) {
                    // This will clear previous entries for the category by resetting its count
                    newSelectionCounts[selectedOption] = 0;
                }

                switch (selectedOption) {
                    case 'Research':
                        await handleResearch(currentBody);
                        newSelectionCounts.Research += 1;
                        break;
                    case 'Use Case':
                        await handleUseCase(currentBody);
                        newSelectionCounts.UseCase += 1;
                        break;
                    case 'News':
                        await handleNews(currentBody);
                        newSelectionCounts.News += 1;
                        break;
                    case 'Researcher':
                        await handleResearcher(currentBody);
                        newSelectionCounts.Researcher += 1;
                        break;
                    case 'Organization':
                        await handleOrganization(currentBody);
                        newSelectionCounts.Organization += 1;
                        break;
                    default:
                        // Fallback logic or handling for unexpected selectedOption values
                        break;
                    case 'Patent':
                        await handlePatent(currentBody);
                        newSelectionCounts.Patent += 1;
                        break;
                    // Add more cases if there are more than these types
                }
            }
        }
        

       
        setSelectionCounts(newSelectionCounts);  // Update the overall count state
    };

    const handleResearch = async (currentBody) => {
        // console.log('Research function running using ', currentBody)
        setResearchHeader('Research');
       
       // Combine the research header and body to form the full query
        let fullQuery = `${researchHeader} in ${currentBody}`;
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
                // Taking the top three, might set a hard threshold later
                const topArticles = articles.sort((a, b) => b.relevance - a.relevance).slice(0, 3);

                // Map over these articles to create a structured summary request
                const summaries = await Promise.all(topArticles.map((article, index) => 
                    trackerOpenAI(`Summarize this like an expert`, article.paragraph).then(summary => 
                        ({ 
                            title: article.title, 
                            summary, 
                            url: article.article_url // Include the article URL
                        })
                    )
                ));

                // Construct the summary in a format with numbers, bullet points, and URLs
                let summaryText = summaries.map((item, index) => 
                    `${index + 1}. ${item.title}: \n${item.summary}\n - URL: ${item.url}`
                ).join('\n\n'); // Separate each article block with two newlines for clarity

                // // Find the article with the highest relevance
                // let highestRelevanceArticle = articles.reduce((max, article) => max.relevance > article.relevance ? max : article, articles[0]);

                // // Extract and use the necessary details from the article
                // const details = {
                //     title: highestRelevanceArticle.title,
                //     id: highestRelevanceArticle.id,
                //     articleUrl: highestRelevanceArticle.article_url,
                //     paragraph: highestRelevanceArticle.paragraph
                // };

               

                // // Now call trackerOpenAI asynchronously within the async context of handleResearch
                // const summaryData = await trackerOpenAI('Summarise the context like an article', details.paragraph);
                 setTrackTitleResearch(`Research into ${currentBody}`);
                 
                // Update state with the returned data
                if (summaryText) {
                    setBodyResearch(summaryText); // Update state with the full text
                    console.log(`output text ${bodyResearch}`)
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
    const handleUseCase = async (currentBody) => {
        setUseCaseHeader('Use Case');
        let fullQuery = `${useCaseHeader} of ${currentBody}`;
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
                const summaryData = await trackerOpenAI('Present a use case and be direct and confident like an professional on', details.paragraph);
                setTitleUseCase(details.title);
                // Update state with the returned data
                if (summaryData) {
                    const fullText = summaryData; // Full text from OpenAI
                    setBodyUseCase(fullText); // Update state with the full text
                    setRefUseCase(details.articleUrl);
                } else {
                    console.error("OpenAI response is empty or not in the expected format");
                }
                
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };
    const handleResearcher = async (currentBody) => {
        // setResearcherHeader('Researcher');
        // Call the function and wait for the result
        const { recentTitle, recentParagraph } = await fetchRecentPaperByAuthor(currentBody);

        // Set the title and paragraph for the researcher
        setTitleResearcher(recentTitle);
        setBodyResearcher(recentParagraph);
    };

    const handleNews = async (currentBody) => {
        setNewsHeader('News');
        let fullQuery = `${newsHeader} of ${currentBody}`;
        let encodedQuery = encodeURIComponent(fullQuery);

        // Construct the URL with the query
        let apiUrl1 = `https://archive.tylo.ai/google_query/google?question=${encodedQuery}`;
        

        try {
            // Await the response directly within the async function
            const response = await fetch(apiUrl1);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const articles = await response.json();
            if (articles && articles.length > 0) {
                const filteredArticles = articles.filter(article => article.id.startsWith('news'));
                // Find the article with the highest relevance
                if (filteredArticles.length > 0) {
                    let highestRelevanceArticle = articles.reduce((max, article) => max.relevance > article.relevance ? max : article, articles[0]);
                
                    // Extract and use the necessary details from the article
                    const details = {
                        title: highestRelevanceArticle.title,
                        id: highestRelevanceArticle.id,
                        articleUrl: highestRelevanceArticle.article_url,
                        full_text: highestRelevanceArticle.full_text
                    };

                    // Now call trackerOpenAI asynchronously within the async context of handleResearch
                    const summaryData = await trackerOpenAI('Summarise this like a news article', details.full_text);
                    setTitleNews(details.title);
                    // Update state with the returned data
                    if (summaryData) {
                        const fullText = summaryData; // Full text from OpenAI
                        setBodyNews(fullText); // Update state with the full text
                        setRefNews(details.articleUrl)
                    } else {
                        console.error("OpenAI response is empty or not in the expected format");
                    }
                } else {
                    console.log('No articles found with ID starting with "news"');
                    // Handle the case where no articles meet the condition, if necessary
                } 
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    const extractTextForGPT = (fullText, maxLength = 16000) => {
        // Check if the full text is shorter than the maximum length
        if (fullText.length <= maxLength) {
            return fullText;
        }
        // If the text is longer, return the first 'maxLength' characters
        return fullText.substring(0, maxLength);
    };

    const handlePatent = async (currentBody) => {
        let encodedQuery = encodeURIComponent(currentBody);
        let apiUrl = `https://archive.tylo.ai/google_patent/google?question=${encodedQuery}`
    
        try {
            // Await the response directly within the async function
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const articles = await response.json();
            if (articles && articles.length > 0) {
                const filteredArticles = articles.filter(article => article.id.startsWith('patent'));
                // Find the article with the highest relevance
                if (filteredArticles.length > 0) {
                    // Find the article with the highest relevance from the filtered list
                    let highestRelevanceArticle = filteredArticles.reduce((max, article) => max.relevance > article.relevance ? max : article, filteredArticles[0]);
            
                    // Extract and use the necessary details from the article
                    const details = {
                        title: highestRelevanceArticle.title,
                        id: highestRelevanceArticle.id,
                        articleUrl: highestRelevanceArticle.article_url,
                        full_text: highestRelevanceArticle.full_text
                    };
                    
                    const extractedText = extractTextForGPT(details.full_text, 16000);
                    console.log('extracted text ', extractedText);
                     // Now call trackerOpenAI asynchronously within the async context of handleResearch
                    const summaryData = await trackerOpenAI('Present this patent information professionally, add abstract, Introduction, Description of Invention, Key Features, conclusions etc', extractedText);
                    console.log('full text', details.full_text);
                    setTitlePatent(`Patent information on ${currentBody}`);
                    // Update state with the returned data
                    if (summaryData) {
                        const fullText = summaryData; // Full text from OpenAI
                        setBodyPatent(fullText); // Update state with the full text
                        setRefPatent(details.articleUrl);
                    } else {
                        console.error("OpenAI response is empty or not in the expected format");
                    }
                } else {
                    console.log('No articles found with ID starting with "org"');
                    // Handle the case where no articles meet the condition, if necessary
                } 
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    const handleOrganization = async (currentBody) => {

        let fullQuery = `Latest Advancements in ${currentBody}`;
        let encodedQuery = encodeURIComponent(fullQuery);
        let apiUrl = `https://archive.tylo.ai/google_org/google?question=${encodedQuery}`;
       
        try {
            // Await the response directly within the async function
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const articles = await response.json();
            if (articles && articles.length > 0) {
                const filteredArticles = articles.filter(article => article.id.startsWith('org'));
                // Find the article with the highest relevance
                if (filteredArticles.length > 0) {
                    // Find the article with the highest relevance from the filtered list
                    let highestRelevanceArticle = filteredArticles.reduce((max, article) => max.relevance > article.relevance ? max : article, filteredArticles[0]);
            
                    // Extract and use the necessary details from the article
                    const details = {
                        title: highestRelevanceArticle.title,
                        id: highestRelevanceArticle.id,
                        articleUrl: highestRelevanceArticle.article_url,
                        full_text: highestRelevanceArticle.full_text
                    };
                     // Now call trackerOpenAI asynchronously within the async context of handleResearch
                    const summaryData = await trackerOpenAI('Present the information on the organisation like an expert', details.title);
                    setTitleOrganization(`Organization information on ${currentBody}`);
                    // Update state with the returned data
                    if (summaryData) {
                        const fullText = summaryData; // Full text from OpenAI
                        setBodyOrganization(fullText); // Update state with the full text
                        setRefOrg(details.articleUrl)
                    } else {
                        console.error("OpenAI response is empty or not in the expected format");
                    }
                } else {
                    console.log('No articles found with ID starting with "org"');
                    // Handle the case where no articles meet the condition, if necessary
                } 
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

  

    console.log('Track component about to render JSX');
    return (
        <div className="feature-page">
            
                <div className="feature-page-icon">
                    <img src={Tylo_icon} alt="Tylo Icon" className="tylo-icon" />
                    <div className="tabs">
                        <div className="top-bar-tab">
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
                <div className="helper-container">
                        <p className="inquire-text-1">
                            Stay at the frontier of technology development
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
                    <div className="instruction-card-track">
                        <div className="inst-top-col">
                            <div className="inst-item_track">
                                <h1 className="inst-card-H">What is it for</h1>
                                <div className="inst-item_b">
                                    <div className="inst-card-p">
                                        <ul className="inst-card-ul">
                                            <li>Track specific science innovations</li>
                                            <li>Surf new industrial use cases</li>
                                            <li>Patent alerts</li>
                                            <li>Monitor competitor</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="inst-card-F">Personalised newsfeeds</div>
                            </div>
                            <div className="inst-item_track">
                                <h1 className="inst-card-H">Step 1</h1>
                                <div className="inst-item_b">
                                    <img src={Tracker} alt="Tracker" style={{ width: '100%', height: 'auto' }}/>
                                </div>
                                <div className="inst-card-F">Set up you tracker</div>
                            </div>
                            <div className="inst-item_track">
                                <h1 className="inst-card-H">Step 2</h1>
                                <div className="inst-item_b">
                                    <img src={forYou} alt="For_You" style={{ width: '100%', height: 'auto' }}/>
                                </div>
                                <div className="inst-card-F">Receive curated news</div>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
            <div className="track-frame-mainb">
                <div className="track-for-you">For You</div>
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
                            <select 
                                className="tracker-96"
                                value={selectedOption1}
                                onChange={(e) => handleSelectionChange(1, e)}
                            >
                                <option value="Research">Research</option>
                                <option value="Patent">Patent</option>
                                <option value="Use Case">Use Case</option>
                                <option value="Researcher">Researcher</option>
                                <option value="Organization">Organization</option>
                                <option value="News">News</option>
                            </select>
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={currentBody1}
                                    onChange={(e) => setCurrentBody1(e.target.value)}
                                />
                        </div>
                        <div className="tracker-142">
                            <select 
                                className="tracker-96"
                                value={selectedOption2}
                                onChange={(e) => handleSelectionChange(2, e)}
                            >
                                <option value="Patent">Patent</option>
                                <option value="Research">Research</option>
                                <option value="Use Case">Use Case</option>
                                <option value="Researcher">Researcher</option>
                                <option value="Organization">Organization</option>
                                <option value="News">News</option>
                            </select>
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={currentBody2}
                                    onChange={(e) => setCurrentBody2(e.target.value)}
                                />
                        </div>
                        <div className="tracker-142">
                            <select 
                                className="tracker-96"
                                value={selectedOption3}
                                onChange={(e) => handleSelectionChange(3, e)}
                            >
                                <option value="Use Case">Use Case</option>
                                <option value="Research">Research</option>
                                <option value="Patent">Patent</option>
                                
                                <option value="Researcher">Researcher</option>
                                <option value="Organization">Organization</option>
                                <option value="News">News</option>
                            </select>
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={currentBody3}
                                    onChange={(e) => setCurrentBody3(e.target.value)}
                                />
                        </div>
                        <div className="tracker-142">
                            <select 
                                className="tracker-96"
                                value={selectedOption4}
                                onChange={(e) => handleSelectionChange(4, e)}
                            >
                                <option value="Researcher">Researcher</option>
                                <option value="Research">Research</option>
                                <option value="Patent">Patent</option>
                                <option value="Use Case">Use Case</option>
                                
                                <option value="Organization">Organization</option>
                                <option value="News">News</option>
                            </select>
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={currentBody4}
                                    onChange={(e) => setCurrentBody4(e.target.value)}
                                />
                        </div>
                        <div className="tracker-142">
                            <select 
                                className="tracker-96"
                                value={selectedOption5}
                                onChange={(e) => handleSelectionChange(5, e)}
                            >
                                <option value="Organization">Organization</option>
                                <option value="Research">Research</option>
                                <option value="Patent">Patent</option>
                                <option value="Use Case">Use Case</option>
                                <option value="Researcher">Researcher</option>
                                
                                <option value="News">News</option>
                            </select>
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={currentBody5}
                                    onChange={(e) => setCurrentBody5(e.target.value)}
                                />
                        </div>
                        <div className="tracker-142">
                            <select 
                                className="tracker-96"
                                value={selectedOption6}
                                onChange={(e) => handleSelectionChange(6, e)}
                            >
                                <option value="News">News</option>
                                <option value="Research">Research</option>
                                <option value="Patent">Patent</option>
                                <option value="Use Case">Use Case</option>
                                <option value="Researcher">Researcher</option>
                                <option value="Organization">Organization</option>
                                
                            </select>
                            <span className="tracker-font-of">Of</span>
                                <input 
                                    type="text"
                                    className="tracker-94"
                                    value={currentBody6}
                                    onChange={(e) => setCurrentBody6(e.target.value)}
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
                    {Array.from({ length: selectionCounts.Research }).map((_, index) => (
                                <div key={index} className="track-frame-15-card">
                                    <div className="track-frame-42"> 
                                        <div className="track-frame-207">
                                            <div className="track-frame-43">
                                                <h2 className="track-text-header">Research</h2>
                                            </div>
                                            <h2 className="track-text-date">01/12/24</h2>
                                        </div>
                                        <h2 className="track-title-font">{trackTitleResearch}</h2>
                                        <div className="track-body">
                                            <section className="track-body-font">
                                                {bodyResearch}
                                                <span className="track-ref-font"> (Ref here)</span>
                                            </section>
                                            
                                        </div>
                                        
                                    </div>
                                </div>  
                    ))}
                    {Array.from({ length: selectionCounts.UseCase }).map((_, index) => (
                    <div key={index} className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">Use Case</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">{titleUseCase}</h2>
                            <div className="track-body">
                                <section className="track-body-font">
                                    {bodyUseCase}
                                    <span className="track-ref-font"> ({refUseCase})</span>
                                </section>
                            </div>
                            
                        </div>
                    </div>
                    ))}
                    {Array.from({ length: selectionCounts.Patent }).map((_, index) => (
                    <div key={index} className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">Patent</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">{titlePatent}</h2>
                            <div className="track-body">
                                <section className="track-body-font">
                                    {bodyPatent}
                                    <span className="track-ref-font">({refPatent})</span>
                                </section>
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div>

                <div className="track-frame-150">
                    {Array.from({ length: selectionCounts.Researcher }).map((_, index) => (
                    <div key={index} className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">Researcher</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">{titleResearcher}</h2>
                            <div className="track-body">
                                <section className="track-body-font">
                                    {bodyResearcher}
                                    <span className="track-ref-font"></span>
                                </section>
                                
                            </div>
                            
                        </div>
                    </div>
                    ))}
                    {Array.from({ length: selectionCounts.News }).map((_, index) => (
                    <div key={index} className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">News</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">{titleNews}</h2>
                            <div className="track-body">
                                <section className="track-body-font">
                                    {bodyNews}
                                    <span className="track-ref-font"> ({refNews})</span>
                                </section>
                            </div>
                            
                        </div>
                    </div>
                    ))}
                    {Array.from({ length: selectionCounts.Organization }).map((_, index) => (
                    <div key={index} className="track-frame-15-card">
                        <div className="track-frame-42"> 
                            <div className="track-frame-207">
                                <div className="track-frame-43">
                                    <h2 className="track-text-header">Organization</h2>
                                </div>
                                <h2 className="track-text-date">01/12/24</h2>
                            </div>
                            <h2 className="track-title-font">{titleOrganization}</h2>
                            <div className="track-body">
                                <section className="track-body-font">
                                    {bodyOrganization}
                                    <span className="track-ref-font"> ({refOrg})</span>
                                </section>
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            
          </div>
        </div>
    );
}

export default Track;