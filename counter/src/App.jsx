import { useState } from "react";

function App() {

let [counter , setCounter] = useState(0);

const increase = ()=>{
  if(counter == 20){
    setCounter(counter = 20);
    console.log(counter);

  }else{
    setCounter(counter+1);
    console.log(counter);

  }
}

const decrease= ()=>{
  if(counter <= 0){
    setCounter(counter = 0);
    console.log(counter);
  }else{
    setCounter(counter -1);
    console.log(counter);

  }
}
  return (
    <>
      <h1>Hello Srijan</h1>

     <div>
     <h2>The Count is : {counter}</h2>
      <button onClick={increase}>Increase by 1 and the value will be = {counter}</button>
      <br />
      <button onClick={decrease}>Decrease value by 1 and the value will be = {counter}</button>
     </div>
    </>
  )
}

export default App
