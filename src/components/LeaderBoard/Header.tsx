import git from "../../assets/github.png"
import dollar from "../../assets/dollar.png"


function Logo(){
    return   <h1 className='text-[28px] hidden  md:block md:text-[40px] lg:text-[48px] '>Snap<span className='text-red-500'>Hunt</span></h1>
}

function Icons(){
    return <div className="flex gap-4 items-center justify-between">

   <a href="https://github.com/Tribhuwan-Joshi/Snap-Hunt" target="_blank" rel="noopener noreferrer" title="github"><img src={git} className="md:w-[36px] lg:w-[40px] w-[24px] cursor-pointer "  alt="github"/></a>
   <a href="https://www.buymeacoffee.com/tjsm" target="_blank" rel="noopener noreferrer" title="support"> <img src={dollar}  className="md:w-[36px] lg:w-[40px] cursor-pointer w-[24px]" alt="donate"/></a>


    </div>
}

  function Header(){
  
    return <div className='h-12  px-2 md:px-2 lg:px-3 text-white  md:h-[11vh] flex justify-between items-center sticky top-0 z-50  w-full bg-gray-900 border-red-400  border-b-2 '>
<Logo/>
  <div className="text-2xl   md:text-3xl lg:text-4xl">LeaderBoard</div>
  <Icons/>
    </div>
    
  }

  export default Header