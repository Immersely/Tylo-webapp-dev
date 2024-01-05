import React, { useEffect } from "react";
import infoImg from "../../assets/images/info.svg";
import vector2 from "../../assets/images/vector2.svg";
import vector1 from "../../assets/images/vector.svg";
import layer1 from "../../assets/images/layer1.svg";
import buttonGoggle from "../../assets/images/button-google.svg";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import axios from "axios";
import "../welcome/welcome.scss";
import { setToken } from "../../services/userService";

function Welcome() {
  const WatchAppURL = "https://play.google.com/store/apps/details?id=ai.immersely.immersely&hl=en-US&ah=RzHLH8j1fwVpyqskEGJIxuPy4X8";
  const DesktopURL = "https://www.overwolf.com/app/Immersely-Immersely_Labs";
  const navigate = useNavigate();
  useEffect(() => {
    // Load the Google API client library
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.onload = () => {
      // Initialize the Google API client library
      gapi.load("auth2", () => {
        gapi.auth2.init({
          client_id:
            "1071233103855-orpereurl2c1fkikd5r9bclqecibdh9e.apps.googleusercontent.com",
          scope: "profile email",
          redirect_uri: "https://dashboard.immersely.ai/welcome",
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
      .then((data) => {
        axios
          .post(
            "https://brain.immersely.ai/api/v1/auth",
            { idToken: data.xc.id_token },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
          .then((data) => {
            console.log(data);
            // Save the JWT token to local storage
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("immerselyEmail",data.data.user.email)
            console.log("email",data.data.user.email)
            console.log("name", data.data.user.name)
            console.log("username", data.data.user.username)
            setToken(data.data.token);
            if (data.data.user.name){
              localStorage.setItem("name", data.data.user.name)
              localStorage.setItem("username", data.data.user.username)

              navigate("/welcome?profile_completed=true");
            }
            else{navigate("/welcome?profile_completed=false");}
            
          });
        console.log("User signed in.", data.xc.id_token);
      });
  };
  return (
    <div className="main-sec">
      <div className="bgBlue p-relative h-100 p-5">
        <img className="vectorImg1" src={vector1} alt="vector1" />
        <img className="vectorImg2" src={vector2} alt="vector2" />
        <div className="text-center">
          <img src={infoImg} alt="info" />
        </div>
        <div className="z9">
          <div className="welcomeText">Welcome to Immersely</div>
          <div className="white text-center mt-4">
          Welcome to Immersely Labs beta! Wear your WearOS watch to track emotions 
          in real-time and enhance game interactivity. 
          We appreciate your feedback to refine the platform, 
          you can find out watch app <a href={WatchAppURL}>here</a>.
          <br /> Some interactivity is unavaiable at this time and our desktop app is <a href={DesktopURL}>here</a>. Please sign in and take a look around.
          </div>
          <div className="welcome-btn d-flex justify-center mt-5 mb-4 mb-sm-0">
            {/* <Link to="/welcome" className="buttonDiv"> */}
            <img
              className="buttonGoggle"
              src={buttonGoggle}
              alt=""
              onClick={handleSignInClick}
            />
            {/* </Link> */}
            <div className="media-layer mly1 d-flex">
              <img className="layer1" src={layer1} alt="" />
              <img className="layer2" src={layer1} alt="" />
              <img className="layer3" src={layer1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
