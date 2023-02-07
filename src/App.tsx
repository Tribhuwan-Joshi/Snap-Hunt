import Header from "./components/Home/Header"
import Main from "./components/Home/Main"
import { contextMenu,handleClick } from './utility';



function App():React.ReactElement {

  return (
    <>
    <Header />
    <Main contextMenu = {contextMenu} handleClick={handleClick} />
    
    </>)
}


export default App;
