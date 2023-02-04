import React from "react";

const contextMenu =  (e:React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if(document.querySelector(".menu")){
      document.querySelector(".menu")?.remove();
      
    }
   
      const menu = document.createElement("div");
      menu.classList.add("menu","z-1000", "w-[100px]" , "h-[100px]", "absolute","text-center","border","border-solid","border-black","bg-gray-400");
      menu.innerHTML = `<ul className='list-none min-w-[100px]'>
      <li className='border border-solid border-black hover:bg-gray-200/50'>Spike</li>
      <li className='border border-solid border-black hover:bg-gray-200/50'>Stewie</li>
      <li className='border border-solid border-black hover:bg-gray-200/50'>Tom</li>
    </ul>`;
    menu.style.left =`${e.pageX}px`;
    menu.style.top =`${e.pageY}px`;

    document.body.appendChild(menu);
    

 
    };

const handleClick = () =>{
  if(document.querySelector(".menu")){
    document.querySelector(".menu")?.remove();
  }

}

export {contextMenu ,handleClick}