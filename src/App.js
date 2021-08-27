import React from "react";
import "./App.css";
import Pads from "./components/Pads";
import DISCOBALL from './assets/noun_Disco Ball_108176.svg'

function App() {

  const [isSpining, setIsSpining] = React.useState('disco-ball')

  return (
    <div className="App">
    <img alt='disco' src={DISCOBALL} className={isSpining}/>
      <Pads 
        setIsSpining={setIsSpining}
      />
      <img alt='disco' src={DISCOBALL} className={isSpining}/>
    </div>
  );
}
export default App;
