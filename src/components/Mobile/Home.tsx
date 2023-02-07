import spike from "../../assets/spike.jpg"
import stewie from "../../assets/stewie.png"
import tom from "../../assets/tom.png"

const characters:Array<{url:string , alt:string}> = [{url:spike,alt:"Spike"},{url:stewie,alt:"Stewie"},{url:tom,alt:"Tom"}];

function CharacterMobile(){
    return <div className='mobile-char md:hidden  hidden fixed left-[50%] translate-x-[-50%] origin-center mx-auto w-[80%] text-white h-14 bg-gray-700/70 '>
 
 {characters.map(i => {
  return <div key={i.alt} className=" flex-1   duration-500 font-mono  items-center transistion ease-in-out flex  "> <img  src={i.url} className="w-[10vw] min-w-[40px] h-auto"  title={i.alt} alt={i.alt}/> <div className='text-xs'>{i.alt}</div> </div>
 })}
   </div>
 }