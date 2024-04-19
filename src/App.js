import Navbar from "./components/navbar";
import Input from "./Input";
import './App.css';
import Card from "./components/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function App  () {

  const [isBlack, setIsBlack] = useState(true);

  const toggle = () => {
    setIsBlack(!isBlack);
  }



  return(
    <div className={isBlack ? 'background-black' : 'background-white'}> 
    <div className="iconn">
    <FontAwesomeIcon icon={faLightbulb} onClick={toggle} className='icon'/>
    </div>
    <Card/>
   
    </div>

  )



}

export default App;