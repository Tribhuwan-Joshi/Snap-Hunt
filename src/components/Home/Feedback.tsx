import React from "react"
// import styled from 'styled-components';

type FeedBackProp = {isCorrect:boolean}

function FeedBack({isCorrect}:FeedBackProp){
const message = isCorrect ? "Correct !" : "Wrong Match"
    return <div className="p-2 cursor-pointer  border-2 font-sans tracking-wide mx-auto left-[50%] translate-x-[-50%]  border-white fixed top-14 md:top-[13vh]  rounded-lg bg-red-600/80 text-white md:text-lg">{message}</div>
}

export default FeedBack;

// const  Wrapper = styled.