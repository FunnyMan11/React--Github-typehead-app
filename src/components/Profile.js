import React, { useState } from "react";
import './components.css'
import DisplayTable from "./DisplayTable";


const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [showProfile, setShowProfile] =useState(false);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setShowProfile(true)
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (

   
   <div >
        <div className="wrapper">
          <div className="container">
            <div className="search_wrap">
              <div className="search_box">
                <input type="text" className="input" placeholder="search..." onChange={onChangeHandler} value={username}/>
                <button className="btn" onClick={submitHandler}>
                  Search
                </button>
              </div>
            </div>
          </div>
       </div>
       {showProfile &&
        <DisplayTable data={data} repositories={repositories}/>
       }
     </div>

   
  );
};
export default Profile;
