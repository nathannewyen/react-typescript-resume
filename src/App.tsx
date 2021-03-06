import React, {useState} from 'react';
import './App.css';
import { Left } from "./components/Left";
import { Right } from "./components/Right";

const profileData = {
  name: "Hey, I'm Nhan Nguyen",
  subtext: "Developer based in Dallas, TX",
  jobStatus: "Software Engineer @ CMINDLLC",
  githubURL: 'https://github.com/nathannewyen',
  linkedinURL: 'https://www.linkedin.com/in/nhannguyen3112',
  resumeURL: 'https://nathan-v1.netlify.app/resume.pdf'
}

function App() {
  const [showScroll, setShowScroll] = useState(true);

  const scrollDownFunction = () => {
    const y = window.scrollY;
    if (y <= 3) {
      setShowScroll(true);
    } else if (y > 3) {
      setShowScroll(false);
    }
  }

  return (
    <div className="app">
      <Left profile={profileData} showScroll={showScroll} scrollDownFunc={scrollDownFunction} />
      <Right profile={profileData} />
    </div>
  );
}

export default App;
