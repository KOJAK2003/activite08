import React from 'react'
// import Canar from './canar03.jpeg'
import image1 from './ninja.jpg';
import image2 from './ninja2.png'
function Profile({Person1,Person2}) {
  console.log(Person1);
  return (
    
    <div className='images'> <div class="profile-card">
      <img className="profile-image" src={image1} alt="Person 1" />
      <div className="profile-name">Abdessamad</div>
      <div class="player-container">
    <div class="points-icon">+</div>
    <div class="points-text">{Person1}</div>
  </div>
    </div>
    
      <div className="profile-card">
        <img className="profile-image" src={image2} alt="Person 2" />
        <div className="profile-name">Morad</div>
        <div class="player-container">
    <div class="points-icon">+</div>
    <div class="points-text">{Person2}</div>
  </div>
      </div>
    </div>
  )
}

export default Profile