import spike from "../assets/spike.jpg"
import stewie from "../assets/stewie.png"
import tom from "../assets/tom.png"

const characters:Array<{url:string , alt:string}> = [{url:spike,alt:"Spike"},{url:stewie,alt:"Stewie"},{url:tom,alt:"Tom"}];


function Modal(){
    return     <div className="h-screen z-[1000] w-screen fixed top-0 bg-gray-200/70"><div className=" rounded-lg text-center fixed translate-x-[-50%] translate-y-[-50%] left-[50%] top-[45%] border p-2 border-white bg-gray-900/90 text-white space-y-2"> <h1 className="text-md md:text-4xl ">Welcome !</h1>
    
    <h1 className="font-mono text-sm md:text-[20px]">Find these characters in the image</h1>
    <div className="flex gap-2 flex-col items-center">
    {characters.map(i => {
   return <div key={i.alt} className=" flex-1 font-mono w-[15vw]     items-center   flex justify-evenly  "> <img className="w-[100px] h-auto" src={i.url}   alt={i.alt}/> <h1 className="text-lg md:text-2xl">{i.alt}</h1> </div>
  })}
  <button className="bg-gray-300 hover:bg-purple-200 active:bg-green-200 md:hover:scale-110 transition duration-500 ease-in-out text-black rounded-md px-2 py-1 font-sans my-6 w-18 md:w-24 md:text-3xl  text-2xl">Play</button>
  </div>
    </div>
    </div>
}


export default Modal;