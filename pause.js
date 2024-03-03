import React from 'react'

function Pause({refreshing,pause}){
    return (
        <div className='devops2'>
            <button onClick={refreshing} className='div2'>Remettre à zéro</button>
            <button  onClick={pause} className='div2'>Pause / Reprendre</button>
        </div>
    )
}

export default Pause