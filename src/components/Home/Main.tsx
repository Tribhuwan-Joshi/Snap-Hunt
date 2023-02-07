import univ from "../../assets/univ.jpg"
import FeedBack from "./Feedback"


function Main({contextMenu,handleClick} : {contextMenu : (e: React.MouseEvent<HTMLDivElement>)=>void , handleClick:()=>void}){
  
    return <div className= 'main-app  cursor-aim  caret-black' onContextMenu={contextMenu} onClick={handleClick}>
    <img src={univ} alt="univ" />
    <FeedBack isCorrect={true}/>
    </div>
  }



export default Main