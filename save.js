import React from 'react'

function Save({saved}) {
  return (
    <div>  
    <button  onClick={saved} className="styled-button">Save / discard</button>
  </div>
  )
}

export default Save