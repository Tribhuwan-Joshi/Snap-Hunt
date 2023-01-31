import React from 'react';
import univ from "./assets/univ.jpg"
import spike from "./assets/spike.jpg"
import stewie from "./assets/stewie.png"
import tom from "./assets/tom.png"

const characters:Array<{url:string , alt:string}> = [{url:spike,alt:"Spike"},{url:stewie,alt:"Stewie"},{url:tom,alt:"Tom"}];


function Timer(){
  return(<div className='flex text-2xl font-mono md:text-3xl lg:text-5xl gap-1'>
  <h1>00</h1><span>:</span><h1>00</h1>
  </div>)
}

function Characters(){
  return <div className='hidden md:flex lg:flex  justify-evenly flex- gap-10  items-center'>
{characters.map(i => {
 return <div key={i.alt} className=" flex-1 w-[5vw]  duration-500  items-center flex-col transistion ease-in-out flex md:hover:scale-110 "> <img  src={i.url}   alt={i.alt}/> <div className='text-xs'>{i.alt}</div> </div>
})}

  </div>
}


function CharacterMobile(){
  return <div className='character-mobile md:hidden flex  fixed left-[50%] translate-x-[-50%] origin-center mx-auto w-[80%] text-white h-14 bg-red-500/70 '>

{characters.map(i => {
 return <div key={i.alt} className=" flex-1   duration-500  items-center transistion ease-in-out flex  "> <img  src={i.url} className="w-[12vw] min-w-[45px] h-auto"  title={i.alt} alt={i.alt}/> <div className='text-xs'>{i.alt}</div> </div>
})}
  </div>
}

function Hamburger(){
  return <div className='bg-gray-500 hover:cursor-pointer md:hidden flex-grow-0 flex flex-col gap-1 w-[30px] py-1 items-center rounded-md'><span className='w-[16px] bg-white h-[2px]'></span> <span className='w-[16px] bg-white h-[2px]'></span> <span className='w-[16px] bg-white h-[2px]'></span></div>
}

function Header(){
  
  return <div className='h-12  md:px-2 lg:px-3 text-white  md:h-[13vh] flex justify-around lg:justify-between  md:justify-between items-center sticky top-0 z-50  w-full bg-gray-900 border-red-400  border-b-2 '>
<h1 className='text-[28px] md:text-[40px] lg:text-[48px] md:ml-2'>Snap<span className='text-red-500'>Hunt</span></h1>
<Timer/>
<Characters/>
<Hamburger/>
  </div>
  
}
function Main(){
  return <div className= 'main-app cursor-aim  caret-black'>
  <img src={univ} alt="univ" />
  </div>
}

function App():React.ReactElement {
  return (
    <>
    <Header />
    <CharacterMobile/>
    <Main/>
    
    </>)
}

export default App;
