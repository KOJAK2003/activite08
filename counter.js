import React from 'react'



function Counter({counter1,counter2,test,setTest,isPlayerWinner,setIsPlayerWinner,pointplayer1,pointplayer2,showAlert,fixed}) {
    let value=``;
    if(counter1<50 && counter2<50 && test==true){
         value=`Le score est: ${counter1}-${counter2}`
    }
    if((parseInt(counter1) == parseInt(counter2)) && (parseInt(counter1)!=0 )&&(parseInt(counter2)!=0)){
        value=`Egalité`;
        
    }
    if(counter1>40){
        value=`Player 1 gagné`;
        fixed();
        if(isPlayerWinner==='open'){
            setIsPlayerWinner('close');
            pointplayer1();
            showAlert();
        }
        
        console.log(counter1);
    }
    if(counter2>40){
        value=`Player 2 gagné`;
        fixed();
        if(isPlayerWinner==='open'){
            setIsPlayerWinner('close');
            pointplayer2();
            console.log(isPlayerWinner);
            showAlert();
        }
        
    }
    if(test==false){
        value=`Pause`;
        
        
    }
  return (
    <div className='div1'>{value}</div>
  )
}

export default Counter