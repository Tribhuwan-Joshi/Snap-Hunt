import { createContext, useState } from "react";

import Home from "./components/Home/HomePage";
import LeaderBoard from "./components/LeaderBoard/scorePage";

const GameContext = createContext(false);

function App(): React.ReactElement {
  const [gameState, setGameState] = useState<boolean>(false);
  function startGame(): void {
    setGameState(true);
  }

  return (
    <GameContext.Provider value={gameState}>
      {/* <LeaderBoard/> */}

      <Home gameState={gameState} startGame={startGame} />
    </GameContext.Provider>
  );
}

export default App;
export {GameContext}