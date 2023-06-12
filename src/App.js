import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originals,action,romance } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall={true} />
      <RowPost url={romance} title='Romance' isSmall={true} />      
    </div>
  );
}

export default App;
