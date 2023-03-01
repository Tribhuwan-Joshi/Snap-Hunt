import univ from "../../assets/univ.jpg";
import Modal from "./startModal";
import FeedBack from "./Feedback";
import AimMenu from "./ContextMenu";
import { checkLocation } from "../../Firebase/gameData";
import { charFindContext } from "./HomePage";
import { useEffect, useState, useRef, useContext } from "react";

function Main() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [showFeed, setShowFeed] = useState<boolean>(false);
  const [clickRes, setClickRes] = useState(true);
  const [currentChar, setCurrentChar] = useState("");

  const [aimVisible, setAimVisible] = useState(false);
  const { charList, onCharFind } = useContext(charFindContext);

  function handleRightClick(posX: number, posY: number) {
    setPosX(posX);
    setPosY(posY);
    setAimVisible(true);
  }
  function hideAim() {
    setAimVisible(false);
  }
  async function handleCharacterClick(name: string) {
    if (imgRef.current) {
      const yPer =
        parseFloat(((y / imgRef.current?.offsetHeight) * 100).toFixed(2)) ?? 0;
      const xPer =
        parseFloat(((x / imgRef.current.offsetWidth) * 100).toFixed(2)) ?? 0;

      const res = await checkLocation(name, xPer, yPer);
      setClickRes(res);
      setShowFeed(true);
      setCurrentChar(name);
      setTimeout(() => setShowFeed(false), 1500);
      if (res) onCharFind(name);
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
      setX(x);
      setY(y);
    }

    handleRightClick(e.pageX, e.pageY);
  };

  return (
    <div
      className="main-app  cursor-aim  caret-black"
      onContextMenu={handleContextClick}
      onClick={(e) => hideAim()}
      onDoubleClick={handleContextClick}
    >
      <img src={univ} ref={imgRef} alt="univ" />

      {showFeed && <FeedBack isCorrect={clickRes} char={currentChar} />}
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
