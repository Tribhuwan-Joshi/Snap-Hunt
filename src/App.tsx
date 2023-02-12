import {createContext,  useState } from "react";

import Home from "./components/Home/HomePage";
import LeaderBoard from "./components/LeaderBoard/scorePage";


function App():React.ReactElement {
  const [ gameStart , setGameState]  = useState(false);
  const GameContext = createContext<boolean>(gameStart)
  return (
    <GameContext.Provider value={gameStart}>
   {/* <LeaderBoard/> */}

   <Home/>
    </GameContext.Provider>)
}


export default App;
