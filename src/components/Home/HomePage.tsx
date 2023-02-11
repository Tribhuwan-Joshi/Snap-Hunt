import EndModal from "./endModal";
import Header from "./Header"
import Main from "./Main"
import Modal from "./startModal";
import {createContext,useState} from "react"


function Home():React.ReactElement {
const [gameState , setGameState] = useState<boolean>(false);
const GameContext = createContext(false);
    return (
      <GameContext.Provider value={gameState}>
      <Header />
      <Main/>
    {!gameState ? <Modal startGame={ () => setGameState(!gameState)}/> : null}
      {/* <EndModal/> */}
      </GameContext.Provider>)
  }
  

export default Home