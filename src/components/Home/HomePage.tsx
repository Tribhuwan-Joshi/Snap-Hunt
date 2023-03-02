import EndModal from "./endModal";
import Header from "./Header";
import Main from "./Main";
import Modal from "./startModal";
import { createContext, useEffect, useState } from "react";
type CharFindContextType = {
  charList: string[];
  onCharFind: (name: string) => void;
  timeString: string;
};

const charFindContext = createContext<CharFindContextType>({
  charList: ["spike", "stewie", "tom"],
  onCharFind: () => {},
  timeString: "",
});
function Home({
  gameState,
  startGame,
  endGame,
  timeString,
  getAndResetTimer,
  handleUser,
}: {
  gameState: boolean;
  timeString: string;
  startGame: () => void;
  endGame: () => void;
  handleUser:(name:string)=>void;

  getAndResetTimer: () => number;
}): React.ReactElement {
  const [charList, setCharList] = useState(["spike", "stewie", "tom"]);
  const [totalTime, setTotalTime] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);

  function onCharFind(name: string) {
    setCharList((prev) => prev.filter((c) => c !== name));
  }
  useEffect(() => {
    if (charList.length === 0) {
      setTotalTime(getAndResetTimer());
      endGame();
    } // setGameEnd true // set time to getSec
    // show End Modal
  }, [charList.length]);
  useEffect(() => {
    if (totalTime !== 0) {
      setGameEnd(true);
    }
  }, [totalTime]);

  const contextValue = {
    charList,
    onCharFind,
    timeString,
  };

  return (
    <charFindContext.Provider value={contextValue}>
      <Header />
      <Main />
      {!gameState && !gameEnd && <Modal startGame={() => startGame()} />}
      {gameEnd && <EndModal totalTime={totalTime} handleUser={handleUser} />}
    </charFindContext.Provider>
  );
}

export default Home;
export { charFindContext };

/*
 positions 

1194 6492 - spike  x - 59.7 y - 6429
1871 6456 - stweie x- 93.55% y - 76.63%
1682 7959 - tom    x-84.1% y -94.5%

check difference using math.abs() and into the result by 100 
*/
