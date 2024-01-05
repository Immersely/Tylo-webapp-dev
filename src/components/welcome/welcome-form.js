import React, { useState, useMemo, useEffect } from "react";
import infoImg from "../../assets/images/info.svg";
import vector2 from "../../assets/images/vector2.svg";
import vector1 from "../../assets/images/vector.svg";
import profileImg from "../../assets/images/profile.svg";
import "../welcome/welcome.scss";
import { Link, useNavigate, useLocation} from "react-router-dom";
import axios from "axios";
import Select from 'react-select'
import countryList from 'react-select-country-list'




function WelcomeForm() {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [genre, setGenrePreference] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducationLevel] = useState('');
  const [gender, setSex] = useState('');
  const [annualSpendOnGames, setAnnualSpend] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  
  //query parameter to check profile_completed

  const queryParams = new URLSearchParams(location.search);
  const isProfileCompleted = queryParams.get("profile_completed") == "true";

  // if (isProfileCompleted) {
  //   navigate("/dashboard");
  // }
  
  useEffect(() => {
    // Check if the JWT token and the formSubmitted flag are set
  if (isProfileCompleted) {
    // Navigate to the dashboard
    navigate('/dashboard');
  }
  }, [isProfileCompleted, navigate]);

  
  

  const changeHandler = value => {
    setValue(value)
  }

console.log('JWT token:', token);

const handleSubmit = (e) => {
  e.preventDefault();

    // Check if name and username fields are filled
    if (name.trim() === '' || username.trim() === '') {
      alert('Name and username fields are required!');
      return;
    }

  const formData = {
    name,
    username,
    genre,
    age,
    education,
    gender,
    annualSpendOnGames,
    ethnicity,
  };

  // Get the JWT token from local storage
  localStorage.setItem("name", name)
  localStorage.setItem("username", username)

  
  console.log('Form data:', formData);

    // Send the form data to the backend using Axios with the Authorization header
    axios
    .post('https://brain.immersely.ai/api/v1/profile', formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then((response) => {
      
      console.log('Form submitted successfully', response);
      // Perform any additional actions, such as redirecting the user
        // Set the flag in the local storage
      localStorage.setItem('formSubmitted', 'true');
      navigate('/dashboard');
    })
    .catch((error) => {
      console.error('Error submitting the form', error);
    });
};

  const clearForm = () => {
    setName('');
    setUserName('');
    setGenrePreference('');
    setAge('');
    setEducationLevel('');
    setSex('');
    setAnnualSpend('');
    setEthnicity('');
    setValue('');
  };



  return (
    
    <div className="main-sec">
      <div className="bgBlue p-relative h-100 p-5">
        <img className="vectorImg1" src={vector1} alt="vector1" />
        <img className="vectorImg2" src={vector2} alt="vector2" />
        <div className="justify-between">
          <img src={infoImg} alt="info" />
          <img src={profileImg} alt="profile" />
        </div>
        <div className="z9 center h-100">
          <div className="col-lg-6 col-md-7 col-sm-12 form-card">
            <div className="font-32 fw-6 poppins white text-center">
              WELCOME TO IMMERSELY
            </div>
            <div className="white text-center mt-3">
              Please tell us little bit about yourself
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="form-group">
                <span style={{ color: 'red' }}>*</span>
                  <input className="form-control" placeholder="Name" 
                    value={name} onChange={(e) => setName(e.target.value)}
                                     
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="form-group">
                <span style={{ color: 'red' }}>*</span>
                  <input className="form-control" placeholder="User Name" 
                    value={username} onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="form-group">
                  <select
                    className="form-control"
                    placeholder="Genre preference"
                    value={genre}
                    onChange={(e) => setGenrePreference(e.target.value)}
                  >
                    <option
                      value="Genre"
                      className="placeholder-select"
                      selected
                    >
                      Genre preference
                    </option>
                    <option value="RPG">RPG</option>
                    <option value="FPS">FPS</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Sports & Racing">Sports & Racing</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
              
                <div className="form-group">
                  <Select placeholder="Country" 
                    options={options} value={value} onChange={changeHandler}
                    >
                    <select className="form-control"> </select>
                  </Select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="form-group">
                  <select className="form-control" placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    
                  >
                    <option value="Age" className="placeholder-select" selected>
                      Age
                    </option>
                    <option value="16-19">16-19</option>
                    <option value="20-25">20-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46-55">46-55</option>
                    <option value="56+">56+</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="form-group">
                  <select
                    className="form-control"
                    placeholder="Education Level"
                    value={education}
                    onChange={(e) => setEducationLevel(e.target.value)}
                  >
                    <option
                      value="Education Level"
                      className="placeholder-select"
                      selected
                    >
                      Education Level
                    </option>
                    <option value="Highschool">Graduation</option>
                    <option value="College">College</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="form-group">
                  <select className="form-control" placeholder="Birth Sex"
                    value={gender}
                    onChange={(e) => setSex(e.target.value)}
                  >
                    <option
                      value="Birth Sex"
                      className="placeholder-select"
                      selected
                    >
                      Birth Sex
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="form-group">
                  <select
                    className="form-control"
                    placeholder="Annual spend on Games"
                    value={annualSpendOnGames}
                    onChange={(e) => setAnnualSpend(e.target.value)}
                  >
                    <option
                      value="Annual spend on Games"
                      className="placeholder-select"
                      selected
                    >
                      Annual spend on Games
                    </option>
                    <option value="0-99">0-100</option>
                    <option value="100-499">100-499</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <div className="form-group">
                  <select className="form-control" placeholder="Ethnicity"
                    value={ethnicity}
                    onChange={(e) => setEthnicity(e.target.value)}
                  >
                    <option
                      value="Ethnicity"
                      className="placeholder-select"
                      selected
                    >
                      Ethnicity
                    </option>
                    <option value="Mixed">Mixed</option>
                    <option value="White British">White British</option>
                    <option value="Black British">Black British</option>
                    <option value="British Asian">British Asian</option>
                    <option value="Other Asian">Other Asian</option>
                    <option value="Other Black">Other Black</option>{" "}
                    <option value="Other Black">White British</option>
                    <option value="Other White">Other White</option>
                    <option value="Welsh">Welsh</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              {/* <div className="col-lg-12">
                <div className="white">Accept Terms & Conditions</div>
              </div> */}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 justify-center">
                <button className="theme-btn bradius tp-border"
                  onClick={() => clearForm()}
                >
                  CLEAR
                </button>
                <button className="theme-btn bradius theme-color ml-3" 
                  // onClick={handleSubmit}
                >
                    SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WelcomeForm;
