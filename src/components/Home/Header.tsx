import spike from "../../assets/spike.jpg"
import stewie from "../../assets/stewie.png"
import tom from "../../assets/tom.png"
import hamburger from "../../assets/hamburger.png"
import { useState } from "react";

const characters:Array<{url:string , alt:string}> = [{url:spike,alt:"Spike"},{url:stewie,alt:"Stewie"},{url:tom,alt:"Tom"}];


function Characters(){
    return <div className='hidden md:flex lg:flex  justify-evenly  gap-10  items-center'>
  {characters.map(i => {
   return <div key={i.alt} className=" flex-1 font-mono w-[5vw] max-w-[50px]  duration-500  items-center flex-col transistion ease-in-out flex md:hover:scale-110 "> <img  src={i.url}   alt={i.alt}/> <div>{i.alt}</div> </div>
  })}
  
    </div>
  }
  function CharacterMobile(){
    return <div className='mobile-char md:hidden top-12 flex fixed left-[50%] translate-x-[-50%] origin-center mx-auto w-[80%] text-white h-14 bg-gray-700/70 '>
 
 {characters.map(i => {
  return <div key={i.alt} className=" flex-1   duration-500 font-mono  items-center transistion ease-in-out flex  "> <img  src={i.url} className="w-[10vw] min-w-[40px] h-auto"  title={i.alt} alt={i.alt}/> <div className='text-xs'>{i.alt}</div> </div>
 })}
   </div>
 }

  

  
 function Hamburger({handleBarClick}:{handleBarClick:()=>void}){
    return <img src={hamburger} className="cursor-pointer hamburger md:hidden lg:hidden"  alt="show"  onClick={()=>handleBarClick()}/>
  }

function Timer(){
    return(<div className='flex text-2xl font-mono md:text-3xl lg:text-4xl gap-1'>
    <h1>00</h1><span>:</span><h1>00</h1>
    </div>)
  }


function Logo(){
    return   <h1 className='text-[28px] md:text-[40px] lg:text-[48px] md:ml-2'>Snap<span className='text-red-500'>Hunt</span></h1>
}
function Header(){
  const [barVisible , setBarVisible] = useState(false);
  function handleBarClick(){
   
    setBarVisible(prev => !prev);
  }
    return <div className='h-12  md:px-2 lg:px-3 text-white  md:h-[11vh] flex justify-around lg:justify-between  md:justify-between items-center sticky top-0 z-50  w-full bg-gray-900 border-red-400  border-b-2 '>
<Logo/>
  <Timer/>
  <Characters/>
 
  <Hamburger handleBarClick={handleBarClick}/> 
{barVisible ? <CharacterMobile/> :null}
    </div>
    
  }

  export default Header;