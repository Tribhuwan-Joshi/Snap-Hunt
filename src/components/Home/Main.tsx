import univ from "../../assets/univ.jpg"
import Modal from "./startModal"
import FeedBack from "./Feedback"
import AimMenu from "./ContextMenu"
import { useEffect, useState } from "react"


function Main(){
  const [posX,setPosX]  =  useState(0);
  const [posY,setPosY]  = useState(0);
  const [aimVisible , setAimVisible] = useState(false);




function handleRightClick(posX:number , posY:number){
setPosX(posX);
setPosY(posY);
setAimVisible(true);
}
function hideAim(){
  setAimVisible(false);

}

function handleChoose(e: React.MouseEvent<HTMLButtonElement>){
e.stopPropagation();

}

    return <div className= 'main-app  cursor-aim  caret-black' onContextMenu={(e)=>{e.preventDefault(); handleRightClick(e.pageX,e.pageY)}} onClick={(e)=>hideAim()} onDoubleClick={(e)=>{ e.preventDefault(); handleRightClick(e.pageX,e.pageY)}} >
    <img src={univ} alt="univ"  />
    {/* <FeedBack isCorrect={false} char="spike"/> */}
    { aimVisible ? 
    
    <AimMenu posTop={posY} posLeft={posX} characters={["Spike" ,"Stewie" , "Tom"]} /> : null
}

    </div>
  }



/*
Now 
- oncontexMenu show aimmenu

*/

export default Main