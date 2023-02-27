import styled from "styled-components"
import React from "react"
import {useState,useEffect} from "react"

const TableWrapper = styled.div`
width : 100%;
display:flex;
justify-content : center;

`

const  Table = styled.table`

table-layout : auto;
border-collapse : collapse;
width:50%;
background-color:	#D3D3D3;
text-align : center;
color:rgb(229 231 235);
border-radius:10px;

`

const TableData = styled.td`
padding : p-1;
letter-spacing:1px;
border:2px solid black;
&.name {
    font-weight : 600;
}
`



function TableContainer(){

interface Data{
    userId:number;
    title:string;

}
// const [loaded , setIsLoaded] = useState(false);
const [fakeData,setFakeData] = useState<Data[]>([]);
useEffect(()=>{
const getData = async () => {
    const res =  await  fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json());
    setFakeData(res);
   
}
 getData();
})

    return <TableWrapper>
<Table>
    <caption className="text-base md:text-xl p-1">Your Rank : 129</caption>
    <thead className="bg-blue-600 text-base md:text-xl   ">
        <tr>
            <th className="whitespace-nowrap  w-[20%] p-1 md:p-2">
                Rank
            </th>
            <th className="whitespace-nowrap  w-[60%] p-1 md:p-2">
                Name
            </th>
            <th className="whitespace-nowrap  w-[20%] p-1 md:p-2">
                Time Taken (sec)
            </th>
        </tr>
    </thead>
    {fakeData ?    <tbody className="text-base text-black lg:text-xl md:text-lg">
        {
        fakeData.map((data,rank) => <tr className="border  text-center even:bg-[#C0C0C0]" key={data.title+rank}><TableData>{rank+1===1?"🥇 ":'\u00A0 \u00A0 \u00A0'}{(rank+1)}</TableData> <TableData>{data.title.slice(0,1).toUpperCase().concat(data.title.slice(1)).slice(1,20)}</TableData> <TableData>{data.userId}</TableData> </tr>)}
    </tbody> : <tr><td rowSpan={3}>Loading...</td></tr>}
    </Table>
   </TableWrapper>
}




function Main(){
    return <div className="flex flex-col gap-4 ">
    <div className="mx-auto w-max pt-4">
        <button className="text-lg md:text-2xl cursor-pointer bg-gray-300 p-1 rounded-md hover:shadow-md hover:shadow-white active:bg-gray-200  font-mono border-2 border-black">Play again</button>
    </div>
    <TableContainer/>
    </div>
}

export default Main