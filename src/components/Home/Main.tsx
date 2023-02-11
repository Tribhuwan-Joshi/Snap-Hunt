import univ from "../../assets/univ.jpg"
import Modal from "./startModal"
import FeedBack from "./Feedback"
import AimMenu from "./ContextMenu"


function Main(){
  
    return <div className= 'main-app  cursor-aim  caret-black'>
    <img src={univ} alt="univ" />
    {/* <FeedBack isCorrect={false} char="spike"/> */}
    <AimMenu posTop={400} posLeft={400} characters={["Spike" ,"Stewie" , "Tom"]}/>

    </div>
  }



export default Main