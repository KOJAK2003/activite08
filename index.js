import { createStore } from 'redux';



const reducerEn= (state={counter1:0,counter2:0,Person1:0,Person2:0},action)=>{

 if(action.type==='INC1'){
        if(state.counter1==30){
            return { ...state, counter1: state.counter1 +10};
        }else{
            return { ...state, counter1: state.counter1 + 15};
        }
        
    }
if(action.type==='INC2'){
        if(state.counter2==30){
            return { ...state, counter2: state.counter2 +10};
        }else{
            return { ...state, counter2: state.counter2 +15};
        }
    }


    if(action.type==='Ref1'){
      
         return {...state, counter1:0}
    }
    if(action.type==='Ref2'){
      
        return {...state, counter2:0}
   }

   if(action.type==='pause'){
      
    return { ...state, counter2: state.counter2 };
   }
    if(action.type==='pause'){
      
    return { ...state, counter1: state.counter1 };
   }

   if(action.type==='point1'){
      
    return { ...state, Person1: state.Person1+=0.5};
  
   }
   if(action.type==='point2'){
      
    return { ...state, Person2: state.Person2+=0.5};
   }
   


if(action.type==='notsaved1'){
      
    return { ...state, Person1:0};
   }
if(action.type==='notsaved2'){
      
    return { ...state, Person2:0};
   }


if(action.type==='fex1'){
      
    return { ...state, counter2: state.counter2 };
   }
if(action.type==='fex2'){
      
    return { ...state, counter1: state.counter1 };
   }
return state;
}
const store = createStore(reducerEn);
export default store;