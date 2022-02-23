import React from "react";
import Profile from "./components/Profile";
import ProfilesList from './mainSector/ProfilesList'


function App() {
  
  return (
    <div>
      <div className="search-bar">
        <Profile />
      </div>
    <div>
      <ProfilesList />  
    </div>
    </div>
  );
}

export default App;
