import React from 'react';
import univ from "./assets/univ.jpg"

function Header(){
  
  return <div className='h-[7vh] md:h-[10vh] sticky top-0 z-50  w-full bg-gray-900 border-red-400  border-b-2 '>

  </div>
}
function Main(){
  return <div className='main-app'>
  <img src={univ} alt="univ" />
  </div>
}

function App():React.ReactElement {
  return (
    <>
    <Header />
    <Main/>
    
    </>)
}

export default App;
