import React, { useState } from "react";
import infoImg from "../../assets/images/info.svg";
import profileImg from "../../assets/images/profile.svg";
import notification from "../../assets/images/notification.svg";
import pubg from "../../assets/images/pubg-corporation-seeklogo.com.svg";
import RL from "../../assets/images/icons8-rocket-league-68.svg";
import CSGO from "../../assets/images/counter-strike-global-offensive-2-logo-svgrepo-com.svg";
import RSS from  "../../assets/images/rainbow-six-siege-logo.svg";
import CoDV from  "../../assets/images/Call-of-Duty-Vanguard.svg";
import WoT from  "../../assets/images/world-of-tanks-3.svg";
import WoWarship from  "../../assets/images/world-of-warships-logo.svg";
import FManager from  "../../assets/images/football-manager-vector-logo.svg";
import clip1 from "../../assets/images/clip1.svg";
import clip2 from "../../assets/images/clip2.svg";
import clip3 from "../../assets/images/clip3.svg";
import coins from "../../assets/images/coins.svg";
import VideoModal from "./video-modal";
import ReactDOM from "react-dom";
import "./dashboard.scss";
import { Link, useNavigate } from "react-router-dom";
import buttonBg from "../../assets/images/buttonBg.svg";
import layer2 from "../../assets/images/layer2.svg";
import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";


function Dashboard() {
  const [showModalClip1, ShowModalClip1] = useState(false);
  const [showModalClip2, ShowModalClip2] = useState(false);
  const [showModalClip3, ShowModalClip3] = useState(false);
  const navigate = useNavigate();
  
  let arr = new Array(0);
  let currentGamesList = [
    { name: "Player unknown battleground", image: pubg },
    { name: "Rocket League", image: RL },
  ];
  let newGamesList = [
    { name: "Rainbow Six Siege", image: RSS },
    { name: "Call of Duty: Vanguard", image: CoDV },
    { name: "Counter-Strike: GO", image: CSGO },
    { name: "Football Manager 2022", image: FManager },
    { name: "World of Tanks", image: WoT },
    { name: "World of Warship", image: WoWarship },
  ];
  for (let i = 0; i < arr.length; i++) {
    currentGamesList.push(i + 1);
  }
  for (let i = 0; i < arr.length; i++) {
    newGamesList.push(i + 1);
  }

  const handleLogout = () => {
    // Clear the JWT token from the local storage
    localStorage.removeItem('token');
    // Navigate back to the login page
    navigate('/');
  };
  

  return (
    <div className="dashboard-sec">
      <div className="bgBlue p-relative h-100 p-4">
        <div className="justify-between">
          <img src={infoImg} alt="info" />
          <div className="d-flex">
            <img className="mr-3" src={notification} alt="info" />
            <Dropdown>
              <Dropdown.Toggle id="menu-dropdown">
                <img className="mr-1" src={profileImg} alt="profile" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Rewards</Dropdown.Item>
                <Dropdown.Item>Invite Friends</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-12 mt-4">
            <div className="game-card mb-4">
              <div className="white font-18 mb-3">Current Games Supported</div>
              {currentGamesList.map((game, index) => (
                <div className="d-flex mb-3" key={index}>
                  <div>
                    <img className="mr-1" src={game.image}/>
                  </div>
                  <div className="pl-2">
                    <div className="white font-16">{game.name}</div>
                    <div className="black font-12">PC</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="game-card">
              <div className="white font-18 mb-3">New Games Incoming</div>
              {newGamesList.map((game, index) => (
                <div className="d-flex mb-3" key={index}>
                  <div>
                    <img className="mr-1" src={game.image} />
                  </div>
                  <div className="pl-2">
                    <div className="white font-16">{game.name}</div>
                    <div className="black font-12">PC</div>
                  </div>
                </div>
                
              ))}
            </div>
          </div>
          <div className="col-xxl-10 col-xl-9 col-lg-8 col-md-8 col-12 mt-4">
          <div className="download-reminder">
            <p className="white font-18 mb-3">In case you don't have them:</p>
            <div className="d-flex">
              <a className="mr-3" href="https://play.google.com/store/apps/details?id=ai.immersely.immersely&hl=en-US&ah=RzHLH8j1fwVpyqskEGJIxuPy4X8">
                Download the Immersely Watch App
              </a>
              <a href="https://www.overwolf.com/app/Immersely-Immersely_Labs">
                Download the Immersely Desktop App
              </a>
            </div>
          </div>

            <div className="video-sec">
              <video width="100%" height="340px" controls>
                <source
                  src="https://d2lzom8fkne0uo.cloudfront.net/Default-videos/OpenAiPitch.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="row">
              <div className="col-xxl-10 col-xl-8 col-lg-8 col-md-7 col-12 mt-4">
                <div className="saved-clips">
                  <div className="white poppins fw-6 font-18 mb-3">
                    Saved Clips
                  </div>
                  <div className="clip-sec mb-3">
                    <img
                      className="img-fluid cursor"
                      onClick={() => ShowModalClip1(true)}
                      src={clip1}
                      alt="clip1"
                    />
                    {showModalClip1 &&
                      ReactDOM.createPortal(
                        <VideoModal
                          videoPath="https://d2lzom8fkne0uo.cloudfront.net/Default-videos/Fortnite%202022.08.23%20-%2022.08.37.08.DVR.mp4"
                          onClose={() => ShowModalClip1(false)}
                        />,
                        document.body
                      )}
                  </div>
                  <div className="clip-sec mb-3">
                    <img
                      className="img-fluid cursor"
                      onClick={() => ShowModalClip2(true)}
                      src={clip2}
                      alt="clip2"
                    />
                    {showModalClip2 &&
                      ReactDOM.createPortal(
                        <VideoModal
                          videoPath="https://d2lzom8fkne0uo.cloudfront.net/Default-videos/Fortnite 2022.08.23 - 22.05.16.05.DVR.mp4"
                          onClose={() => ShowModalClip2(false)}
                        />,
                        document.body
                      )}
                  </div>
                  <div className="clip-sec mb-3">
                    <img
                      className="img-fluid cursor"
                      onClick={() => ShowModalClip3(true)}
                      src={clip3}
                      alt="clip3"
                    />
                    {showModalClip3 &&
                      ReactDOM.createPortal(
                        <VideoModal
                          videoPath="http://d2lzom8fkne0uo.cloudfront.net/Default-videos/OpenAiPitch.mp4"
                          onClose={() => ShowModalClip3(false)}
                        />,
                        document.body
                      )}
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-4 col-lg-4 col-md-5 col-12 mt-4">
                <div className="game-card poppins mt43">
                  <div className="white fw-6 font-18 mb-3">Leader Board</div>
                  <div className="d-flex mb-3">
                    <div>
                      <img
                        className="leaderBoardProfileImg"
                        src={profileImg}
                        alt="profileImg"
                      />
                    </div>
                    <div className="pl-2">
                      <div className="white font-16">GameMaster</div>
                      <div className="grey font-12 d-flex">
                        <img
                          className="coinImg mr-1"
                          src={coins}
                          alt="coinImg"
                        />
                        999999
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div>
                      <img
                        className="leaderBoardProfileImg"
                        src={profileImg}
                        alt="profileImg"
                      />
                    </div>
                    <div className="pl-2">
                      <div className="white font-16">Whitefoxy</div>
                      <div className="grey font-12 d-flex">
                        <img
                          className="coinImg mr-1"
                          src={coins}
                          alt="coinImg"
                        />
                        2200
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div>
                      <img
                        className="leaderBoardProfileImg"
                        src={profileImg}
                        alt="profileImg"
                      />
                    </div>
                    <div className="pl-2">
                      <div className="white font-16">NickSlat</div>
                      <div className="grey font-12 d-flex">
                        <img
                          className="coinImg mr-1"
                          src={coins}
                          alt="coinImg"
                        />
                        2000
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div>
                      <img
                        className="leaderBoardProfileImg"
                        src={profileImg}
                        alt="profileImg"
                      />
                    </div>
                    <div className="pl-2">
                      <div className="white font-16">Goodboi79</div>
                      <div className="grey font-12 d-flex">
                        <img
                          className="coinImg mr-1"
                          src={coins}
                          alt="coinImg"
                        />
                        1900
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div>
                      <img
                        className="leaderBoardProfileImg"
                        src={profileImg}
                        alt="profileImg"
                      />
                    </div>
                    <div className="pl-2">
                      <div className="white font-16">DemoUser</div>
                      <div className="grey font-12 d-flex">
                        <img
                          className="coinImg mr-1"
                          src={coins}
                          alt="coinImg"
                        />
                        190
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-moment-button mt-4">
                <div className="justify-end mr-4">
                  <div className="buttonDiv" onClick={() => navigate('/upload-new-video')}>
                    <span className="btntext poppins font-14 white fw-6">
                      VIEW MOMENTS
                    </span>
                    <img className="buttonGoggle" src={buttonBg} alt="" />
                  </div>
                  <div className="media-layer mly1 d-flex">
                    <img className="layer1" src={layer2} alt="" />
                    <img className="layer2" src={layer2} alt="" />
                    <img className="layer3" src={layer2} alt="" />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
