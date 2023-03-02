import Main from "./Main";
import Header from "./Header";
import styled from "styled-components";
const Wrapper  = styled.div `
height:100%;
overflow : auto;
padding-bottom:4px;
`

function LeaderBoard({handleRestart}:{handleRestart:()=>void}){
    return <Wrapper>
    <Header/>
    <Main handleRestart={handleRestart}/>
    </Wrapper>
}


export default LeaderBoard;
