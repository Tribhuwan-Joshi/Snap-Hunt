import Header from "./components/Home/Header"
import Main from "./components/Home/Main"
import Modal from "./components/startModal";
import { contextMenu,handleClick } from './utility';



function App():React.ReactElement {

  return (
    <>
    <Header />
    <Main contextMenu = {contextMenu} handleClick={handleClick} />
    <Modal/>
    </>)
}


export default App;
