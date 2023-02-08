import EndModal from "./components/Home/endModal";
import Header from "./components/Home/Header"
import Main from "./components/Home/Main"
import Modal from "./components/Home/startModal";
import { contextMenu,handleClick } from './utility';



function App():React.ReactElement {

  return (
    <>
    <Header />
    <Main contextMenu = {contextMenu} handleClick={handleClick} />
    {/* <Modal/> */}
    <EndModal/>
    </>)
}


export default App;
