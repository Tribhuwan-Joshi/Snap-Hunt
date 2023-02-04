import React from "react";

const contextMenu =  (e:React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    if(document.querySelector(".menu")){
      document.querySelector(".menu")?.remove();
      
    }
   
      const menu = document.createElement("div");
      menu.classList.add("menu","z-1000","text-white","w-20", "flex","flex-col","justify-between", "min-w-16", "absolute","text-center","border","border-solid","border-black","bg-black/70");
      menu.innerHTML = `
      <h1 class="border-b-2 cursor-pointer border-gray-500">Spike</h1>
      <h1 class="border-b-2 cursor-pointer border-gray-500">Stewie</h1>
      <h1 class="cursor-pointer">Tom</h1>
     `;
    menu.style.left =`${e.pageX}px`;
    menu.style.top =`${e.pageY}px`;

    document.body.appendChild(menu);
    

 
    };

const handleClick = () =>{
  if(document.querySelector(".menu")){
    document.querySelector(".menu")?.remove();
    console.log("cool");
  }

}

export {contextMenu ,handleClick}