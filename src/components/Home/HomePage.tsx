import EndModal from "./endModal";
import Header from "./Header"
import Main from "./Main"
import Modal from "./startModal";
import { contextMenu,handleClick } from '../../utility';

function Home():React.ReactElement {

    return (
      <>
      <Header />
      <Main contextMenu = {contextMenu} handleClick={handleClick} />
      {/* <Modal/> */}
      {/* <EndModal/> */}
      </>)
  }
  

export default Home