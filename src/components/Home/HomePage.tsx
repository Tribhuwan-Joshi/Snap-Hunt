import EndModal from "./endModal";
import Header from "./Header"
import Main from "./Main"
import Modal from "./startModal";
import { contextMenu,handleClick } from '../../utility';
import {createContext,useState} from "react"


function Home():React.ReactElement {
const [gameState , setGameState] = useState<boolean>(false);
const GameContext = createContext(false);
    return (
      <GameContext.Provider value={gameState}>
      <Header />
      <Main contextMenu = {contextMenu} handleClick={handleClick} />
    {!gameState ? <Modal handlePlay={setGameState}/> : null}
      {/* <EndModal/> */}
      </GameContext.Provider>)
  }
  

export default Home