import EndModal from "./endModal";
import Header from "./Header"
import Main from "./Main"
import Modal from "./startModal";
import {createContext,useState} from "react"

function Home({gameState , startGame,timeString}:{gameState:boolean , timeString:string , startGame:()=>void}):React.ReactElement {


    return (
      <>
      <Header timeString={timeString}/>
      <Main />
    {!gameState && <Modal startGame={ () => startGame()}/>}
      { /* <EndModal/> */ }
      </>)
  }
  

export default Home
