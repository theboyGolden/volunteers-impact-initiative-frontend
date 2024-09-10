import React from "react";
import './Home.css';
import MissionSection from "../Components/MissionSection";

function Home() {
    return (
       <div>
          <div className="home-container">
                <div className="overlay">
                    <h1>Welcome to Volunteers Impact Initiative</h1>
                    <p>Making a difference one step at a time</p>
                </div>
          </div>
                <div>
                  <MissionSection />
                </div>
       </div>
    );
}

export default Home;
