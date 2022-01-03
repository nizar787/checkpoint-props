import React from 'react'

const Profile = ({profile,addition}) => {
  console.log(profile);
    return (
        <div className='profile'>
          <img src={profile.img} alt={profile.name} />
          <h1> profile name: {profile.name}</h1>
          <p>price:{profile.price}</p>
          <button onClick={()=> addition(profile.name)}>click</button>
        </div>
    )
}

export default Profile
