import React,{ useState } from 'react'

import Counter from './counter'
import './App.css'
import Player from './player'
import Pause from './pause'
import {useSelector,useDispatch} from 'react-redux';
import Swal from 'sweetalert2';

import Profile from './profile'
import Save from './save'


function App() {
  const [isPlayerWinner,setIsPlayerWinner]=useState('open')
  const [test2,setTest2]=useState(true)
  
  
  function pointplayer1(){
    dispatch({type:'point1'});
  }

  function pointplayer2(){
    dispatch({type:'point2'});
  }

 function showAlert(){
    Swal.fire({
      title: 'We Have a Winner, Congratulations',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };
const saved=()=>{
    Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      dispatch({type:'notsaved1'});
      dispatch({type:'notsaved2'});
      Swal.fire("Changes are not saved", "", "info");
    }
  });
}
  const counter1=useSelector((state=>state.counter1));
  const counter2=useSelector((state=>state.counter2));
  const Person1=useSelector((state=>state.Person1));
  const Person2=useSelector((state=>state.Person2));
  const dispatch=useDispatch()

  const fixed=()=>{
    dispatch({type:'fex1'});
    dispatch({type:'fex2'});
    setTest2(false);
  }
  const incrementplayer1=()=>{
    if(test2 && test){
      dispatch({type:'INC1'});
      
    }
   
  }
  const incrementplayer2=()=>{
    if(test2 && test){
      dispatch({type:'INC2'});
    }
    
  }
  const refreshing =()=>{
    dispatch({type:'Ref1'});
    dispatch({type:'Ref2'});
    setIsPlayerWinner('open');
    setTest(true);
    setTest2(true);
   
  }
  const [test,setTest]=useState(true)
  const pause=()=>{
     if(test){
      dispatch({type:'pause'});
      setTest(false);
      console.log(test);
    }else{
      setTest(true);
      console.log(test);
    }
       
  }
  return (
    <div className='container'>
      <Profile Person1={Person1} Person2={Person2}/>
     <Counter counter1={counter1} counter2={counter2} setTest={setTest} setIsPlayerWinner={setIsPlayerWinner} isPlayerWinner={isPlayerWinner} test={test} pointplayer2={pointplayer2} pointplayer1={pointplayer1} showAlert={showAlert} fixed={fixed}/>
     <Player incrementplayer1={incrementplayer1} incrementplayer2={incrementplayer2}/>
     <Pause refreshing ={refreshing } pause={pause}/>
     <Save  saved={saved} />

    </div>
  )
}

export default App