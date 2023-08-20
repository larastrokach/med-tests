import { data } from './data';
import  image  from './test.jpeg';
import { useState } from "react";
import './App.css';
 
function App() {
  const [tests, setTests] = useState (data);
  const [showText, setShowText] = useState (false)
  
  const removeTest = (id) =>{

    let newTests = tests.filter(test=> test.id !== id )
    setTests(newTests)
  }

  const showTextClick  = (element) => {
    element.showMore = !element.showMore
    setShowText(!showText)
  }

  return (
    <div>
      <div className= "">
   <h1>List of {tests.length} tests every woman needs in her 40s</h1>
   </div>
   <div  className= "image">
        <img src = {image} width="500px" alt ="women"/>
      </div>

   {tests.map((element => {
    const {id, test, description, showMore} = element;

    return(
      <div className= "box" key={id}>
      <div className= "container">
       <h2>{id}. {test}</h2>
       </div>
       
       <div className= "container">
       <h3>{ showMore ? description : description.substring (0,200) + "..."}
       <button className= "show" onClick= {() => showTextClick (element)} > {showMore ? "Show less" : "Show more"}</button>
       </h3>
       </div>

      <div className= "container">
      <button className= "btn" onClick={() => removeTest (id)}>Remove test</button>
      </div>
      </div> )
   }))}

<div className= "container">
   <button className= "btn"onClick={() => setTests([])}>Delete all</button>
    </div>
  </div>

  )
}

export default App;
