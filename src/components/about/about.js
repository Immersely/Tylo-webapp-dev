import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Tylo_icon from "../../assets/images/Tylo_logo.svg";
import Dropdown_open from "../../assets/images/Dropdown_open.svg" ;
import Dropdown_closed from "../../assets/images/Dropdown_closed.svg";
// import Tracker_close from "../../assets/images/tracker-close.svg";
import Tracker from "../../assets/images/Customize your tracker.PNG";
import forYou from "../../assets/images/For_You.PNG";
import "../about/about.scss";
// import { gapi } from "gapi-script";
// import axios from "axios";
// import { setToken } from "../../services/userService";
import {useNavigate } from "react-router-dom";

const faqData = [
    { question: "1. How Tylo Is Different From Google Scholar and Other Paper/Patent Search Databases?", answer: "Tylo is an information curation platform. We utilise natural language processing (NLP) algorithms to analyse both the full text and metadata of literature, creating a deep-linked knowledge graph rather than just a collection of papers and patents." },
    { question: "2. How Tylo Is Different From Other AI Research Tools?", answer: "Tylo is an innovation made simple. Our business-focused innovation tool translates technical dragons into plain English, making it easy for anyone to use, regardless of their background." },
    { question: "3. How Is Tylo Different From GPTs?", answer: "Unlike large language models (LLMs) such as GPTs, Tylo does not rely on complex algorithms that generate unpredictable results. Instead, we curate information based on clear, verifiable evidence stored in our comprehensive knowledge graph." },
    { question: "4. How Accurate Are the Answers in Tylo?", answer: "Tylo aims for high accuracy, but like any AI, there's a margin for error. While we achieve a solid 99% success rate*, we encourage you to double-check information. That's why we promote transparency by providing source references for all information. This open approach empowers you to verify and trust the information, ultimately shaping your decisions with confidence. *estimated from internal tests, that inquire and tracker function is able to return very reasonable responses to 99% input." },
    { question: "5. What Is Tylo Not a Good Fit For?", answer: "Tylo shines in the academic world, expertly navigating research papers, patents, and a few other high-credential online resources. But for casual questions or topics especially for short or general questions, it might not be your best bet." },
    { question: "6. What Are Credits?", answer: "We use a credit system, each inquiry or item in your personalised newsfeed costs one credit. Sign up to get 500 free credits. Once your credits run out, consider a paid plan for unlimited access." },
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

    const [activeFeature, setActiveFeature] = useState('Inquire');

    const handleFeatureClick = (feature) => {
        setActiveFeature(feature);
    };

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
                <h2 className="key-data-text">Key Data Points</h2>
                <div className="about-vision">
                    <div className="key-data">
                        <svg width="98" height="99" viewBox="0 0 98 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.7706 13.057H36.7886C29.1118 13.057 25.2774 13.057 22.8921 15.4423C20.5068 17.8276 20.5068 21.6619 20.5068 29.3388V70.0434C20.5068 77.7203 20.5068 81.5546 22.8921 83.9399C25.2774 86.3252 29.1118 86.3252 36.7886 86.3252H61.2114C68.8882 86.3252 72.7226 86.3252 75.1079 83.9399C77.4932 81.5546 77.4932 77.7203 77.4932 70.0434V36.7796C77.4932 35.1189 77.4932 34.2844 77.1838 33.5395C76.8745 32.7906 76.2883 32.2004 75.1079 31.024L59.5262 15.4423C58.3458 14.2619 57.7596 13.6757 57.0147 13.3664C56.2658 13.057 55.4313 13.057 53.7706 13.057Z" stroke="#0D1542" stroke-width="8.14091"/>
                            <path d="M36.7886 53.7615H61.2114M36.7886 70.0433H53.0704" stroke="#0D1542" stroke-width="8.14091" stroke-linecap="round"/>
                            <path d="M53.0704 13.0569V29.3388C53.0704 33.1772 53.0704 35.0944 54.2631 36.287C55.4557 37.4797 57.3729 37.4797 61.2113 37.4797H77.4932" stroke="#0D1542" stroke-width="8.14091"/>
                        </svg> 
                        <h2 className="big-blue-text">200M+</h2>
                        <p className="grey-text">papers</p>
                    </div>
                    <div className="key-data">
                        <svg width="80" height="79" viewBox="0 0 80 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.4533 39.6911C59.6342 39.6911 66.1789 46.2358 66.1789 54.4167C66.1789 57.2964 65.3609 60.0125 63.921 62.2704L73.9999 72.4147L69.4513 76.9633L59.2415 66.9171C56.9836 68.3243 54.3003 69.1424 51.4533 69.1424C43.2724 69.1424 36.7277 62.5976 36.7277 54.4167C36.7277 46.2358 43.2724 39.6911 51.4533 39.6911ZM51.4533 46.2358C49.2836 46.2358 47.2028 47.0978 45.6686 48.632C44.1343 50.1662 43.2724 52.247 43.2724 54.4167C43.2724 56.5864 44.1343 58.6673 45.6686 60.2015C47.2028 61.7357 49.2836 62.5976 51.4533 62.5976C53.623 62.5976 55.7039 61.7357 57.2381 60.2015C58.7723 58.6673 59.6342 56.5864 59.6342 54.4167C59.6342 52.247 58.7723 50.1662 57.2381 48.632C55.7039 47.0978 53.623 46.2358 51.4533 46.2358ZM43.2724 13.5122V39.6911L35.0915 32.3283L26.9106 39.6911V13.5122H20.3659V65.87H33.4554C35.2224 68.5206 37.4804 70.7785 40.0982 72.4147H20.3659C18.6301 72.4147 16.9655 71.7252 15.7381 70.4978C14.5107 69.2704 13.8212 67.6058 13.8212 65.87V13.5122C13.8212 11.7765 14.5107 10.1118 15.7381 8.88443C16.9655 7.65706 18.6301 6.96753 20.3659 6.96753H59.6342C61.37 6.96753 63.0347 7.65706 64.262 8.88443C65.4894 10.1118 66.1789 11.7765 66.1789 13.5122V39.0694C64.281 37.2696 62.0885 35.797 59.6342 34.7826V13.5122H43.2724Z" fill="#0D1542"/>
                        </svg>
                        <h2 className="big-blue-text">100M+</h2>
                        <p className="grey-text">patents</p>
                    </div>
                    <div className="key-data">
                        <svg width="74" height="75" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.8798 29.7956C49.4222 29.7956 51.4855 31.859 51.4855 34.4013V52.1635C51.4855 56.0032 49.9602 59.6856 47.2451 62.4007C44.53 65.1158 40.8476 66.6411 37.0079 66.6411C33.1682 66.6411 29.4857 65.1158 26.7706 62.4007C24.0556 59.6856 22.5302 56.0032 22.5302 52.1635V34.4013C22.5302 31.859 24.591 29.7956 27.1359 29.7956H46.8798ZM10.0238 29.7956L21.5565 29.7904C20.6081 30.9332 20.0371 32.3417 19.9221 33.8223L19.8958 34.4013V52.1635C19.8958 55.1453 20.6616 57.9508 22.0012 60.3932C20.1982 61.1799 18.2277 61.5051 16.2675 61.3397C14.3073 61.1742 12.4191 60.5231 10.7735 59.4453C9.1279 58.3675 7.77662 56.8968 6.84165 55.166C5.90668 53.4352 5.41746 51.4988 5.41815 49.5316V34.4013C5.41955 33.1798 5.9056 32.0087 6.7696 31.1452C7.6336 30.2817 8.8023 29.7963 10.0238 29.7956ZM52.4619 29.7904L63.9761 29.7956C66.5185 29.7956 68.5818 31.859 68.5818 34.4013V49.5343C68.5826 51.5007 68.0937 53.4363 67.1594 55.1665C66.225 56.8968 64.8745 58.3671 63.2298 59.4449C61.5851 60.5226 59.6979 61.1739 57.7385 61.3399C55.7791 61.506 53.8092 61.1815 52.0066 60.3958L52.154 60.1273C53.283 57.9877 53.9699 55.5769 54.0963 53.0214L54.1173 52.1635V34.4013C54.1173 32.6485 53.4962 31.0431 52.4619 29.7904ZM37 8.74109C38.2096 8.74109 39.4074 8.97935 40.525 9.44226C41.6426 9.90518 42.658 10.5837 43.5134 11.439C44.3687 12.2944 45.0472 13.3098 45.5102 14.4274C45.9731 15.545 46.2113 16.7428 46.2113 17.9525C46.2113 19.1621 45.9731 20.3599 45.5102 21.4775C45.0472 22.5951 44.3687 23.6105 43.5134 24.4659C42.658 25.3212 41.6426 25.9997 40.525 26.4626C39.4074 26.9256 38.2096 27.1638 37 27.1638C34.557 27.1638 32.214 26.1933 30.4866 24.4659C28.7591 22.7384 27.7886 20.3955 27.7886 17.9525C27.7886 15.5094 28.7591 13.1665 30.4866 11.439C32.214 9.71157 34.557 8.74109 37 8.74109ZM58.0624 11.3729C59.0993 11.3729 60.126 11.5771 61.0839 11.9739C62.0418 12.3707 62.9122 12.9523 63.6454 13.6854C64.3785 14.4186 64.9601 15.289 65.3569 16.2469C65.7537 17.2048 65.9579 18.2315 65.9579 19.2684C65.9579 20.3052 65.7537 21.3319 65.3569 22.2898C64.9601 23.2477 64.3785 24.1181 63.6454 24.8513C62.9122 25.5845 62.0418 26.166 61.0839 26.5628C60.126 26.9596 59.0993 27.1638 58.0624 27.1638C55.9684 27.1638 53.9602 26.332 52.4795 24.8513C50.9988 23.3706 50.167 21.3624 50.167 19.2684C50.167 17.1744 50.9988 15.1661 52.4795 13.6854C53.9602 12.2047 55.9684 11.3729 58.0624 11.3729ZM15.9375 11.3729C16.9744 11.3729 18.0011 11.5771 18.959 11.9739C19.9169 12.3707 20.7873 12.9523 21.5205 13.6854C22.2536 14.4186 22.8352 15.289 23.232 16.2469C23.6288 17.2048 23.833 18.2315 23.833 19.2684C23.833 20.3052 23.6288 21.3319 23.232 22.2898C22.8352 23.2477 22.2536 24.1181 21.5205 24.8513C20.7873 25.5845 19.9169 26.166 18.959 26.5628C18.0011 26.9596 16.9744 27.1638 15.9375 27.1638C13.8435 27.1638 11.8353 26.332 10.3546 24.8513C8.87392 23.3706 8.04208 21.3624 8.04208 19.2684C8.04208 17.1744 8.87392 15.1661 10.3546 13.6854C11.8353 12.2047 13.8435 11.3729 15.9375 11.3729Z" fill="#0D1542"/>
                        </svg> 
                        <h2 className="big-blue-text">200M+</h2>
                        <p className="grey-text">researchers</p>
                    </div>
                    <div className="key-data">
                        <svg width="84" height="85" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M73.3841 35.7169H66.4099V14.7941H69.897V7.81989H14.103V14.7941H17.5901V35.7169H10.6159C9.69106 35.7169 8.8041 36.0843 8.15014 36.7382C7.49618 37.3922 7.12878 38.2791 7.12878 39.204V70.5881H76.8712V39.204C76.8712 38.2791 76.5038 37.3922 75.8499 36.7382C75.1959 36.0843 74.3089 35.7169 73.3841 35.7169ZM48.9742 63.6138V49.6653H35.0258V63.6138H24.5644V14.7941H59.4356V63.6138H48.9742Z" fill="#0D1542"/>
                            <path d="M31.5386 21.7684H38.5128V28.7426H31.5386V21.7684ZM45.4871 21.7684H52.4613V28.7426H45.4871V21.7684ZM31.5386 35.7169H38.5128V42.6911H31.5386V35.7169ZM45.4871 35.7169H52.4613V42.6911H45.4871V35.7169Z" fill="#0D1542"/>
                        </svg>
                        <h2 className="big-blue-text">100k+</h2>
                        <p className="grey-text">institutions</p>
                    </div>
                </div>
            </div>
        <div className="about-features">
            <div className="feature-3460">
                <div className="feature-3461">
                    <h2 className="feature-i-text">Feature Instructions</h2>
                    <div className="feature-buttons">
                        <div className={activeFeature === 'Inquire' ? "feature-buttons-active" : "feature-buttons-passive"} onClick={() => handleFeatureClick('Inquire')}>
                            <span className={activeFeature === 'Inquire' ? "feature-text-active" : "feature-text-passive"}>Inquire</span>
                        </div>
                        <div className={activeFeature === 'Tracker' ? "feature-buttons-active" : "feature-buttons-passive"} onClick={() => handleFeatureClick('Tracker')}>
                            <span className={activeFeature === 'Tracker' ? "feature-text-active" : "feature-text-passive"}>Tracker</span>
                        </div>
                    </div>  
                </div>
                <div className="instruction-main">
                    {activeFeature === 'Inquire' ? (
                        <div className="instruction-card"> 
                            <div className="instruction-card">
                                <div className="inst-top-col">
                                    <div className="inst-item">
                                        <h1 className="inst-card-H">A good fit for</h1>
                                        <div className="inst-card-p">
                                            <ul className="inst-card-ul">
                                                <li>Get an answer to deeptech questions</li>
                                                <li>Learn innovative technology topics or concepts</li>
                                                <li>Find evidence for hypothesis & assumptions</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="inst-item">
                                        <h1 className="inst-card-H">Not a good fit for</h1>
                                        <div className="inst-card-p">
                                        Topics especially for short or general questions, it might not be your best bet. and anything that can hardly find clues from science publication and patent ocean
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
                        </div>
                    ) : (
                        <div className="instruction-card-track"> 
                            <div className="instruction-card-track">
                                <div className="inst-top-col">
                                    <div className="inst-item_track">
                                        <h1 className="inst-card-H">What can you do</h1>
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
                        </div>
                    )}
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
          <div className="comment">
            <div className="comment-container">
                <div className="comment-text">Leave a comment</div>
            </div>
            <div className="message-frame">
                <div className="message-header">Message *</div>
                <div className="message-box"></div>
            </div>
            <div className="submit-button">
                <div className="feature-text-active">Submit</div>
            </div>
            <div className="contact-text-combined">
                Or reach out to us at  
                <span className="contact-email"> contact@tylo.ai</span>
            </div>

          </div>
          <div className="all-rights"></div>
          
          {/* Other content of your About page goes here */}
        </div>
      );
}
export default About;