import { createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from "./components/Home/HomePage";
import LeaderBoard from "./components/LeaderBoard/scorePage";
import "./Firebase/gameData";
import { secondsToTimeFormat } from "./utility";
const GameContext = createContext([false, ""]);

function App(): React.ReactElement {
  const [gameState, setGameState] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [secs, setSecs] = useState(0);
  function startGame(): void {
    setGameState(true);
  }

  function endGame() {
    setGameState(false);
  }
  function handleRestart() {
    setGameState(false);
    setSecs(0);
  }
  function getAndResetTimer() {
    return secs;
  }
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (gameState) {
      interval = setInterval(() => setSecs((prev) => prev + 1), 1000);
    }

    return () => {
      clearInterval(interval);
      // Reset the timer to 0 when the game ends
    };
  }, [gameState]);
  const timeString = secondsToTimeFormat(secs);

  return (
    <Router basename="/Snap-Hunt">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              gameState={gameState}
              startGame={startGame}
              endGame={endGame}
              timeString={timeString}
              getAndResetTimer={getAndResetTimer}
              handleUser={(name) => setUsername(name)}
            />
          }
        />

        <Route
          path="/leaderboard"
          element={
            <GameContext.Provider value={[gameState, username]}>
              <LeaderBoard handleRestart={handleRestart} />
            </GameContext.Provider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
export { GameContext };
