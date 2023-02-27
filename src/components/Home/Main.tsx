import univ from "../../assets/univ.jpg";
import Modal from "./startModal";
import FeedBack from "./Feedback";
import AimMenu from "./ContextMenu";
import { checkLocation } from "../../Firebase/gameData";
import {charFindContext} from "./HomePage"
import { useEffect, useState, useRef, useContext } from "react";

function Main() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // const [clickCords, setClickCords] = useState<[number, number]>([0, 0]);
  const [aimVisible, setAimVisible] = useState(false);
  const {charList} = useContext(charFindContext)

  function handleRightClick(posX: number, posY: number) {
  
    setPosX(posX);
    setPosY(posY);
    setAimVisible(true);
  }
  function hideAim() {
    setAimVisible(false);
  }
  function handleCharacterClick(name: string) {
    // setAimVisible(false);
    // setHiddenCharacters(hiddenCharacters.filter(c=>c!==name))
    if (imgRef.current) {
 
     
      const yPer =
        parseFloat(
          ((y / imgRef.current?.offsetHeight) * 100).toFixed(2)
        ) ?? 0;
      const xPer = 
        parseFloat(
          ((x/ imgRef.current.offsetWidth) * 100).toFixed(2)
        ) ?? 0;

      checkLocation(name,xPer,yPer);
    }
    hideAim();
  }

  const handleContextClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    const img = imgRef.current;
    if (img) {
      const imgRect = img.getBoundingClientRect();
      const x = e.clientX - imgRect.left;
      const y = e.clientY - imgRect.top;
     setX(x); setY(y);
 
    }
  
     handleRightClick(e.pageX,e.pageY);
    
    
  };

  return (

    <div
      className="main-app  cursor-aim  caret-black"
      onContextMenu={handleContextClick}
      onClick={(e) => hideAim()}
      onDoubleClick={(e) => {
        e.preventDefault();
        handleRightClick(e.pageX, e.pageY);
      }}
    >
      <img src={univ} ref={imgRef} alt="univ" />

      {/* <FeedBack isCorrect={false} char="spike"/> */}
      {aimVisible ? (
        <AimMenu
          posTop={posY}
          posLeft={posX}
          characters={charList}
          handleCharacterClick={handleCharacterClick}
        />
      ) : null}
    </div>
  );
}

/*
Now 
- oncontexMenu show aimmenu

*/

export default Main;
