import React from "react"
// import styled from 'styled-components';

type FeedBackProp = {isCorrect:boolean}

function FeedBack({isCorrect}:FeedBackProp){
const message = isCorrect ? "Correct !" : "Oops , wrong match ."
    return <div className="py-2 px-1  border-2 font-sans tracking-wide mx-auto left-[50%] translate-x-[-50%]  border-white fixed top-14 md:top-[13vh]  rounded-lg bg-green-600 text-white md:text-xl">{message}</div>
}

export default FeedBack;

// const  Wrapper = styled.