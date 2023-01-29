import React from 'react';
import univ from "./assets/univ.jpg"
import spike from "./assets/spike.jpg"
import stewie from "./assets/stewie.png"
import tom from "./assets/tom.png"

const characters:Array<{url:string , alt:string}> = [{url:spike,alt:"spike"},{url:stewie,alt:"stewie"},{url:tom,alt:"tom"}];


function Timer(){
  return(<div className='flex text-xl font-mono md:text-2xl lg:text-4xl gap-1'>
  <h1>00</h1><span>:</span><h1>00</h1>
  </div>)
}

function Characters(){
  return <div className='hidden md:flex lg:flex justify-evenly gap-10  items-center'>
{characters.map(i => {
 return <div key={i.alt} className="w-16"> <img src={i.url} className="w-full" title={i.alt} alt={i.alt}/> </div>
})}

  </div>
}


function Header(){
  
  return <div className='h-[7vh] md:px-2 lg:px-3 text-white md:h-[10vh] flex justify-around lg:justify-between  md:justify-between items-center sticky top-0 z-50  w-full bg-gray-900 border-red-400  border-b-2 '>
<h1 className='text-[28px] md:text-[40px] lg:text-[48px] md:ml-2'>Snap<span className='text-red-500'>Hunt</span></h1>
<Timer/>
<Characters/>
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
