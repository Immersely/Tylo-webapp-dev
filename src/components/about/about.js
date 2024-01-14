import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Tylo_icon from "../../assets/images/Tylo_logo.svg";
import Dropdown_open from "../../assets/images/Dropdown_open.svg" ;
import Dropdown_closed from "../../assets/images/Dropdown_closed.svg";
import "../about/about.scss";
// import { Link, useNavigate } from "react-router-dom";

const faqData = [
    { question: "1. What is Tylo AI?", answer: "Tylo AI is a venture capital-backed start-up specializing in providing highly personalized deep-tech ideas and solutions for enterprise innovation and research and development (R&D) teams." },
    { question: "2. How does Tylo AI work?", answer: "Tylo AI operates using a solution engine that continually learns the users' interests. This engine is powered by the next generation of knowledge graph and artificial intelligence (AI) technology, extracting deep connected insights from academic research and patents." },
    { question: "3. What sets Tylo AI apart from other innovation platforms?", answer: "Tylo AI stands out through its focus on deep-tech solutions and its personalized approach. The use of advanced knowledge graph and AI technology allows for the extraction of highly relevant and connected insights from academic research and patents." },
    { question: "4. How does Tylo AI personalize its recommendations?", answer: "Tylo AI's solution engine learns from users' preferences over time, adapting and refining recommendations based on their specific interests and needs. This ensures that the solutions provided are tailored to each user's unique requirements." },
    { question: "5. Who benefits from Tylo AI's services?", answer: "Tylo AI caters to enterprise innovation and R&D teams. Companies looking for cutting-edge deep-tech solutions and ideas to enhance their innovation processes can benefit from Tylo AI's personalized recommendations." },
    { question: "6. What type of technology powers Tylo AI's solution engine?", answer: "Tylo AI's solution engine is powered by the next generation of knowledge graph and AI technology. This sophisticated technology enables the extraction of deep connected insights from academic research and patents, forming the basis for personalized recommendations." },
    { question: "7. Is Tylo AI only for large enterprises, or can small businesses benefit as well?", answer: "While Tylo AI is designed to serve enterprise-level innovation and R&D teams, small businesses with a focus on deep-tech solutions can also find value in the personalized recommendations provided by Tylo AI." },
    { question: "8. How secure is the information processed by Tylo AI?", answer: "Tylo AI prioritizes the security of user information and follows industry best practices to safeguard data. The platform complies with relevant data protection and privacy regulations to ensure the confidentiality and integrity of user data." },
    { question: "9. Can Tylo AI integrate with existing innovation and R&D workflows?", answer: "Yes, Tylo AI is designed to seamlessly integrate with existing innovation and R&D workflows. This ensures a smooth incorporation of personalized deep-tech ideas and solutions into the user's existing processes." },
    // ... add other FAQs here
  ];

function About() {
    console.log('About component rendering');
    const [activeIndex, setActiveIndex] = useState(null); // To track the active FAQ
    console.log('State in About:', activeIndex);
      
    const toggleFAQ = index => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
      console.log('toggleFAQ handler triggered in About good');
    };

    console.log('About component about to render JSX');

    function handleButtonClick(buttonNumber) {
        // Logic for button click
        console.log("Button", buttonNumber, "clicked");
        // You can add more logic here depending on what you want the button to do
      }

    return (
        <div className="about-page">
            
                <div className="about-page-icon">
                    <img src={Tylo_icon} alt="Tylo Icon" className="tylo-icon" />
                    <div className="tabs">
                        <div className="top-bar-tab">
                            <a href="/#" className="top-bar-text">About</a> {/* Link to the About page */}
                        </div>
                        <div className="top-bar-tab">
                            <a href="/#features" className="top-bar-text">Features</a> {/* Link to the Features page */}
                        </div>
                    </div>
                </div>

          <div className="gradient-rectangle-about">
            <h2 className="about-title">About Us</h2>
            <p className="about-content">
                Tylo AI was created to make it easier for business innovation and R&D teams to source and interpret relevant developments and resources in global scientific research. Our solution engine continually learns what the users are most interested in. It is powered by the next generation of knowledge graph and AI technology that extract deep connected insights from academic research and patents.
            </p>
            <div className="about-button-frame-117">
                <div className="about-button-1" onClick={() => handleButtonClick(1)}>
                    <span className="about-button-text-1">Enterprise</span>
                </div>
                <div className="about-button-2" onClick={() => handleButtonClick(2)}>
                    <span className="about-button-text-2">Tylo AI Sign up/in</span>
                </div>
                <div className="about-button-1" onClick={() => handleButtonClick(3)}>
                    <span className="about-button-text-1">Academia</span>
                </div>
            </div>
          </div>
          <div className="about-page-1">
            <div className="offer-header">
                <h2 className="what-text">What</h2>
                <span className="spacer"></span>
                <h2 className="we-offer-text">We Offer</h2>
                <p className="what-we-offer-content">
                We leverages next-generation knowledge graph and AI technologies to extract relevant insights from global scientific research publications and patents, and interpret them into business language. Our database is synthesised from c. 320 million scholarly papers and patents. We update the database daily.
                </p>
                <div className="offer-content-177">
                    <div className="inquire-content-14">
                        <h2 className="inquire-text-1">Inquire Anything</h2>
                        <div className="inquire-row">
                            <div className="inquire-text-2-box">
                                <p className="inquire-text-2">
                                Inquire anything, the more specific, the better
                                </p>
                                <div className="inquire-button-about">
                                    <span className="inquire-button-text">Inquire</span>
                                </div>
                            </div>
                            <div className="inquire-text-3-box">
                                <h2 className="inquire-text-3">Answer:</h2>
                                <p className="inquire-text-4">
                                Elite endurance athletes are using periodization of nutrition strategies to achieve event-specific physiological requirements. An online survey was conducted to examine the self-reported practices of dietary periodization for micro, meso, and macro contexts. Nutrition is a required part of family practice residency training, but the quality and effectiveness of this training is not well known. Nutrition plays a key role in allowing training hours to be translated into useful adaptive responses. Nutritional knowledge in British Army recruits during basic training is poorly understood. Dietary intake and physical activity impact performance and adaptation during training. A nutrition training programme is being evaluated to determine its effectiveness at improving the dietary counselling skills of multidisciplinary practice teams. 
                                </p>
                            </div>
                        </div>
                        <div className="inquire-frame-107">
                            <div className="inquire-frame-95">
                                <div className="inquire-frame-135">
                                    <h2 className="inquire-text-5">Supporting evidence</h2>
                                </div>
                            </div>
                            <div className="inquire-frame-95">
                                <div className="inquire-frame-135">
                                    <h2 className="inquire-text-5">Supporting evidence</h2>
                                </div>
                            </div>
                            <div className="inquire-frame-95">
                                <div className="inquire-frame-135">
                                    <h2 className="inquire-text-5">Supporting evidence</h2>
                                </div>
                            </div>
                            <div className="inquire-frame-99">
                                <div className="inquire-frame-135">
                                    <h2 className="inquire-text-5">Relevance</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="track-content">
                        <div className="track-frame-46">
                            <div className="track-frame-155">
                                <h2 className="inquire-text-1">Track Anything</h2>
                                <div className="track-button-1">
                                    <span className="track-button-text">Add Email push</span>
                                </div>
                                <div className="track-button-2">
                                <span className="track-button-text">Track</span>
                                </div>
                            </div>
                            
                            <div className="track-frame-150">
                                <div className="track-frame-151">
                                    <h2 className="track-text-1">28/11</h2>
                                </div>
                                <div className="track-card">
                                    <h2 className="track-text-2">Patent:</h2>
                                    <p className="track-text-3">Sony Reveals Groundbreaking Athlete Health Monitor…</p>
                                </div>
                            </div>
                            <div className="track-frame-150">
                                <div className="track-frame-151">
                                    <h2 className="track-text-1">15/11</h2>
                                </div>
                                <div className="track-card">
                                    <h2 className="track-text-2">Collaboration:</h2>
                                    <p className="track-text-3">Sony Reveals Groundbreaking Athlete Health Monitor…</p>
                                </div>
                            </div>
                            <div className="track-frame-150">
                                <div className="track-frame-151">
                                    <h2 className="track-text-1">12/11</h2>
                                </div>
                                <div className="track-card">
                                    <h2 className="track-text-2">Research:</h2>
                                    <p className="track-text-3">Lower power consumption, complexity, and the ability to be powered using sustainable energy-harvesting </p>
                                </div>
                            </div>
                            <div className="track-frame-150">
                                <div className="track-frame-151">
                                    <h2 className="track-text-1">28/11</h2>
                                </div>
                                <div className="track-card">
                                    <h2 className="track-text-2">Patent:</h2>
                                    <p className="track-text-3">Sony Reveals Groundbreaking Athlete Health Monitor…</p>
                                </div>
                            </div>
                            <div className="track-frame-150">
                                <div className="track-frame-151">
                                    <h2 className="track-text-1">10/11</h2>
                                </div>
                                <div className="track-card">
                                    <h2 className="track-text-2">Use case:</h2>
                                    <p className="track-text-3"> Google and UCL Collaborate to Develop Breakthrough in Natural Language Processing Source link</p>
                                </div>
                            </div>
                            <div className="track-frame-150">
                                <div className="track-frame-151">
                                    <h2 className="track-text-1">15/11</h2>
                                </div>
                                <div className="track-card">
                                    <h2 className="track-text-2">Collaboration:</h2>
                                    <p className="track-text-3">Sony Reveals Groundbreaking Athlete Health Monitor…</p>
                                </div>
                            </div>
                            <div className="track-frame-150">
                                <div className="track-frame-151">
                                    <h2 className="track-text-1">12/11</h2>
                                </div>
                                <div className="track-card">
                                    <h2 className="track-text-2">Research:</h2>
                                    <p className="track-text-3">lower power consumption, complexity, and the ability to be powered using sustainable energy-harvesting </p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
          </div>
          <div className="about-page-2">
            <div className="faq-frame-175">
                <h2 className="faq-text-header">FAQ</h2>
                <div className="faq-header-separator"></div> {/* Line separator */}
                    {faqData.map((faq, index) => (
                        <React.Fragment key={index}>
                        <div className="faq-item">
                          <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <p className="faq-text-normal">{faq.question}</p>
                            <img 
                              src={activeIndex === index ? Dropdown_open : Dropdown_closed} 
                              alt="Dropdown Icon" 
                              className="dropdown-icon" 
                            />
                          </div>
                          {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
                        </div>
                        <div className="faq-header-separator"></div>
                      </React.Fragment>
                ))}
            </div>
          </div>
          
          
          {/* Other content of your About page goes here */}
        </div>
      );
}
export default About;