import React from 'react'

const Follower = ({ avatar_url, html_url, login,}) => {
  return (
    <article className='card'>
     <a href={html_url} target="_blank"> 
      <img src={avatar_url} alt={login} /> 
    </a>
      <h4>{login}</h4>
      <a href={html_url} className='main-btn' target ="_blank">
        View Profile
      </a>
    </article>
  )
}

export default Follower
