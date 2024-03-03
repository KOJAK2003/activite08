import React from 'react'


function Player({incrementplayer1,incrementplayer2}) {
    
  return (
    <div  className='devops'>
        
        <button onClick={incrementplayer1} className='div2'>Point Joueur 1</button>
        <button onClick={incrementplayer2} className='div2'>Point Joueur 2</button>
       
    </div>
  )
}

export default Player