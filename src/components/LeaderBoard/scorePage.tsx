import Main from "./Main";
import Header from "./Header";
import styled from "styled-components";
import bg from "../../assets/scorebg.jpg"
const Wrapper  = styled.div `

background-color:#696969;
height:100%;
overflow : auto;
`

function LeaderBoard(){
    return <Wrapper>
    <Header/>
    <Main/>
    </Wrapper>
}


export default LeaderBoard;