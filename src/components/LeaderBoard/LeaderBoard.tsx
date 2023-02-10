import Main from "./Main";
import Header from "./Header";
import styled from "styled-components";

const Wrapper  = styled.div `
background: rgb(210,143,183);
background: linear-gradient(90deg, rgba(210,143,183,1) 0%, rgba(181,162,242,1) 39%, rgba(152,151,238,1) 78%);
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