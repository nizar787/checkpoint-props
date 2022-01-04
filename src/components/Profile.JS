import React from 'react'

function Profile({profile,addition}) {
  return (
    <div className='profiles'>
      <img src={profile.Image} alt={profile.fullname} />
          <h1> profile name: {profile.fullname}</h1>
          <p>bio:{profile.bio}</p>
          <button onClick={()=>addition(profile.fullname)} >click</button>
    </div>
  )
}

export default Profile
