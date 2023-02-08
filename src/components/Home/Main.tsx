import univ from "../../assets/univ.jpg"
import Modal from "./startModal"
import FeedBack from "./Feedback"


function Main({contextMenu,handleClick} : {contextMenu : (e: React.MouseEvent<HTMLDivElement>)=>void , handleClick:()=>void}){
  
    return <div className= 'main-app  cursor-aim  caret-black' onContextMenu={contextMenu} onClick={handleClick}>
    <img src={univ} alt="univ" />
    <FeedBack isCorrect={false}/>

    </div>
  }



export default Main