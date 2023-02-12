import EndModal from "./endModal";
import Header from "./Header"
import Main from "./Main"
import Modal from "./startModal";
import {createContext,useState} from "react"

function Home({gameState , startGame}:{gameState:boolean , startGame:()=>void}):React.ReactElement {


    return (
      <>
      <Header />
      <Main />
    {!gameState ? <Modal startGame={ () => startGame()}/> : null}
      { /* <EndModal/> */ }
      </>)
  }
  

export default Home
