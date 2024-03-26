import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Tylo_icon from "../../assets/images/Tylo_logo.svg";
import Dropdown_open from "../../assets/images/Dropdown_open.svg" ;
import Dropdown_closed from "../../assets/images/Dropdown_closed.svg";
import "../about/about.scss";
// import { gapi } from "gapi-script";
// import axios from "axios";
// import { setToken } from "../../services/userService";
import {useNavigate } from "react-router-dom";

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
    //   useEffect(() => {
    //     // Load the Google API client library
    //     const script = document.createElement("script");
    //     script.src = "https://apis.google.com/js/api.js";
    //     script.onload = () => {
    //       // Initialize the Google API client library
    //       gapi.load("auth2", () => {
    //         gapi.auth2.init({
    //           client_id:
    //             "584832623015-02ioa5kbjqp9agd30pdiifln0bhb5trb.apps.googleusercontent.com",
    //           scope: "profile email",
    //           redirect_uri: "https://tylo.ai/",
    //           cookiepolicy: "single_host_origin",
    //         });
    //       });
    //     };
    //     document.body.appendChild(script);
    //   }, []);

    const navigate = useNavigate();
    const handleFeaturesClick = () => {
        // Check if the user is signed in
        const isSignedIn = localStorage.getItem('token'); // Example check, adjust based on your authentication logic

        // Navigate based on whether the user is signed in
        navigate(isSignedIn ? '/features' : '/');
    };

  

    return (
        <div className="about-page">
                <div className="about-page-icon">
                    <img src={Tylo_icon} alt="Tylo Icon" className="tylo-icon" />
                    <div className="tabs">
                        <div className="top-bar-tab">
                        <span onClick={handleFeaturesClick} className="top-bar-text_default" style={{cursor: 'pointer'}}>Features</span> {/* Link to the Features page */}
                        </div>
                        <div className="top-bar-tab-current_page">
                            <a href="/#about" className="top-bar-text">About</a> {/* Link to the About page */}
                        </div>
                    </div>
                </div>
            <div class="common-parent">
                <div className="gradient-rectangle-about">
                    <svg width="100%" height="100%" viewBox="0 0 1920 928" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M834.885 -1881.56C1135.19 -1915.23 1413.82 -1751.41 1670.48 -1591.9C1945.83 -1420.76 2261.66 -1246.21 2356.13 -936.082C2450.16 -627.366 2254.61 -319.803 2151.05 -14.1501C2049.07 286.874 2031.2 666.297 1758.14 828.947C1486.55 990.719 1151 768.088 834.885 769.833C515.997 771.594 122.4 1071.73 -95.8015 839.18C-329.527 590.083 -16.4699 182.286 -36.3625 -158.714C-48.9973 -375.299 -217.541 -559.597 -189.954 -774.79C-158.809 -1017.74 -41.2646 -1238.94 125.155 -1418.66C321.872 -1631.1 547.153 -1849.31 834.885 -1881.56Z" fill="url(#paint0_linear_1141_6881)" fillOpacity="0.5"/>
                        <defs>
                            <linearGradient id="paint0_linear_1141_6881" x1="-193" y1="-486.081" x2="2387.22" y2="-484.435" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#62ECF6"/>
                                <stop offset="1" stopColor="#437AEF"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="about-info">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-content">
                        Tylo is a London-based startup backed by venture capital. We leverage next-generation knowledge graph technology to extract deep-linked and actionable insights from academic publications and patents and streamline collaborative research. We introduced a new approach to improve enterprise evidence-based innovation performance, save time in finding collaborative R&D partnerships, and bring new technology to the market faster.
                    </p>
                    <div className="about-button-frame-117">
                        <div className="about-button-1" onClick={() => handleButtonClick(11)}>
                            <span className="about-button-text-1">Enterprise</span>
                        </div>
                        <div className="about-button-2" onClick={() => handleButtonClick(22)}>
                            <span className="about-button-text-2">Tylo AI Sign up/in</span>
                        </div>
                        <div className="about-button-1" onClick={() => handleButtonClick(33)}>
                            <span className="about-button-text-1">Academia</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-infographic">
                <div className="about-vision">
                    <div className="vision">
                        <div className="vision-1">
                            <svg width="91" height="101" viewBox="0 0 91 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.8062 0.51709V16.3803H48.1943V0.51709H42.8057H42.8062ZM20.8045 5.28421L16.39 8.37508L25.4872 21.3662L29.8993 18.2752L20.8045 5.28421ZM70.1949 5.28421L61.1004 18.2753L65.5131 21.3662L74.6101 8.37508L70.1956 5.28421H70.1949ZM45.4991 20.7205C32.318 20.7205 21.6328 28.7247 21.6328 38.5999L35.1926 79.6649H55.808L69.3666 38.5999C69.3666 28.7249 58.682 20.7205 45.5004 20.7205H45.4991ZM2.63673 25.4813L0.795776 30.5474L15.6948 35.9718L17.5426 30.9081L2.6364 25.4813H2.63673ZM88.3627 25.4813L73.4564 30.9085L75.298 35.9728L90.2042 30.5475L88.3627 25.4813ZM16.8228 48.6408L1.50304 52.7499L2.89306 57.9507L18.2128 53.8475L16.8231 48.6408H16.8228ZM74.1766 48.6408L72.7876 53.8474L88.1074 57.9499L89.4964 52.749L74.1766 48.6406V48.6408ZM34.892 82.6584V89.7965H56.1087V82.6595H34.8921L34.892 82.6584ZM34.892 93.3449V100.483H56.1087V93.3461H34.8921L34.892 93.3449Z" fill="#4476F1"/>
                            </svg>
                            <h2 className="vision-text">Vision</h2>
                            <p className="about-content">
                                Provide innovation professionals with customised strategic insights and connections
                            </p>
                        </div>
                    </div>
                    <div className="vision">
                        <div className="vision-1">
                            <svg width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M75.6797 13.3209L84.95 15.1739C85.4478 15.2735 85.8572 15.6385 86.001 16.1308C86.0736 16.3699 86.0801 16.6243 86.0197 16.8668C85.9593 17.1093 85.8343 17.3309 85.658 17.5081L78.0636 25.108C77.155 26.015 75.9236 26.5243 74.6398 26.524H68.3397L52.5203 42.3489C52.8221 43.4885 52.8776 44.6793 52.6831 45.842C52.4886 47.0047 52.0486 48.1126 51.3923 49.0919C50.7361 50.0712 49.8787 50.8994 48.8773 51.5213C47.8758 52.1432 46.7534 52.5446 45.5846 52.6988C44.4159 52.8529 43.2277 52.7562 42.0993 52.4151C40.9709 52.074 39.9281 51.4963 39.0404 50.7206C38.1528 49.9449 37.4406 48.989 36.9513 47.9164C36.4621 46.8439 36.207 45.6794 36.2031 44.5006C36.204 43.2278 36.4974 41.9722 37.0608 40.8309C37.6242 39.6896 38.4425 38.6932 39.4524 37.9185C40.4623 37.1438 41.6368 36.6117 42.8851 36.3633C44.1334 36.1149 45.4221 36.1568 46.6517 36.4858L62.4766 20.6554V14.3663C62.4766 13.0831 62.9854 11.8496 63.8926 10.9425L71.4925 3.34257C71.6697 3.16628 71.8913 3.0413 72.1338 2.98091C72.3763 2.92053 72.6306 2.92699 72.8698 2.99963C73.3621 3.14344 73.7271 3.55275 73.8267 4.05057L75.6797 13.3209Z" fill="#4476F1"/>
                                <path d="M11.3122 44.4989C11.3179 49.2445 12.3413 53.9337 14.3133 58.2502C16.2853 62.5666 19.1601 66.41 22.7438 69.5209C26.3275 72.6319 30.5366 74.9381 35.0874 76.284C39.6381 77.6299 44.4246 77.9842 49.1239 77.3229C53.8232 76.6617 58.3261 75.0003 62.3287 72.4509C66.3313 69.9015 69.7407 66.5233 72.3267 62.5442C74.9128 58.5651 76.6153 54.0777 77.3197 49.3846C78.024 44.6916 77.7136 39.9021 76.4095 35.3392C76.2264 34.8061 76.1537 34.2413 76.1959 33.6792C76.238 33.1172 76.3941 32.5695 76.6546 32.0697C76.9152 31.5699 77.2747 31.1283 77.7113 30.7719C78.148 30.4154 78.6526 30.1516 79.1945 29.9964C79.7363 29.8412 80.3041 29.7979 80.8632 29.8692C81.4224 29.9404 81.9612 30.1247 82.4468 30.4108C82.9324 30.6969 83.3548 31.0789 83.6881 31.5334C84.0214 31.988 84.2587 32.5056 84.3856 33.0548C86.9107 41.8911 86.4311 51.3157 83.0218 59.85C79.6126 68.3843 73.4667 75.5454 65.5484 80.2098C57.6301 84.8742 48.3873 86.7781 39.2702 85.6227C30.1531 84.4672 21.6774 80.3179 15.173 73.8256C8.6757 67.3228 4.52192 58.8464 3.36383 49.7271C2.20575 40.6079 4.10894 31.3623 8.77461 23.4419C13.4403 15.5214 20.6042 9.37473 29.1416 5.9668C37.6791 2.55888 47.1065 2.08272 55.9439 4.61308C56.9961 4.92068 57.8839 5.63231 58.4131 6.59245C58.9422 7.55259 59.0699 8.68316 58.768 9.7371C58.4661 10.791 57.7594 11.6826 56.8021 12.2171C55.8449 12.7515 54.715 12.8852 53.6595 12.5891C48.7177 11.1713 43.5142 10.9207 38.4591 11.8572C33.404 12.7936 28.6356 14.8915 24.5296 17.9854C20.4237 21.0793 17.0926 25.0847 14.7989 29.6858C12.5052 34.2869 11.3116 39.3578 11.3122 44.4989Z" fill="#4476F1"/>
                                <path d="M27.9062 44.5013C27.9065 47.5246 28.7323 50.4904 30.2944 53.0789C31.8565 55.6674 34.0957 57.7803 36.7704 59.1897C39.4452 60.5991 42.4539 61.2514 45.4722 61.0764C48.4904 60.9014 51.4036 59.9057 53.8976 58.1966C56.391 56.4833 58.3686 54.1208 59.6165 51.3648C60.8644 48.6087 61.335 45.564 60.9776 42.5598C60.8809 41.8308 60.9802 41.0892 61.2654 40.4113C61.5506 39.7335 62.0114 39.1439 62.6001 38.7033C63.1889 38.2627 63.8845 37.987 64.6153 37.9046C65.346 37.8221 66.0856 37.936 66.7577 38.2343C67.4297 38.5288 68.0116 38.9963 68.444 39.589C68.8764 40.1818 69.1439 40.8786 69.2191 41.6084C69.8201 46.742 68.8081 51.9353 66.3236 56.4676C63.839 60.9999 60.0052 64.6463 55.3542 66.9008C50.7031 69.1552 45.4657 69.9059 40.3686 69.0485C35.2716 68.1912 30.5679 65.7684 26.9104 62.1164C23.2528 58.4644 20.8229 53.7644 19.9578 48.6687C19.0927 43.573 19.8354 38.3344 22.0828 33.6799C24.3302 29.0255 27.9708 25.1861 32.4993 22.6947C37.0278 20.2032 42.2196 19.1834 47.3541 19.7766C47.9039 19.8276 48.4379 19.9878 48.925 20.2479C49.412 20.508 49.8422 20.8627 50.1904 21.2912C50.5386 21.7197 50.7977 22.2134 50.9527 22.7434C51.1076 23.2734 51.1551 23.8289 51.0925 24.3775C51.0299 24.9261 50.8585 25.4567 50.5882 25.9381C50.3179 26.4196 49.9542 26.8422 49.5184 27.1813C49.0826 27.5204 48.5836 27.7691 48.0505 27.9127C47.5173 28.0564 46.9609 28.0923 46.4138 28.0181C44.0887 27.7482 41.7329 27.9731 39.501 28.6783C37.2691 29.3834 35.2116 30.5527 33.4637 32.1095C31.7158 33.6662 30.317 35.5751 29.3592 37.7108C28.4014 39.8465 27.9062 42.1606 27.9062 44.5013Z" fill="#4476F1"/>
                            </svg>
                            <h2 className="vision-text">Mission</h2>
                            <p className="about-content">
                                Streamline innovation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          <div className="about-page-1">
            
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