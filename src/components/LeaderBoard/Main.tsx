import styled from "styled-components"


const TableWrapper = styled.div`
width : 100%;
display:flex;
justify-content : center;

`

const  Table = styled.table`

table-layout : auto;
border-collapse : collapse;
width:50%;
background-color:#94b8b8;
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

const fakeData = [{name:"tjsm" , tt:"123"} , {name:"lol" , tt:"321"} , {name:"pol" , tt:"999"}, {name:"xyz" ,tt:"908.12"}

]


function TableContainer(){

    return <TableWrapper>
<Table>
    <caption className="text-base md:text-xl p-1">Your Rank : 129</caption>
    <thead className="bg-gray-800 text-base md:text-xl   ">
        <tr>
            <th className="whitespace-nowrap  w-[20%] p-1 md:p-2 lg:p-3">
                Rank
            </th>
            <th className="whitespace-nowrap  w-[40%] p-1 md:p-2 lg:p-3">
                Name
            </th>
            <th className="whitespace-nowrap  w-[40%] p-1 md:p-2 lg:p-3">
                Time Taken (sec)
            </th>
        </tr>
    </thead>
    <tbody className="text-base text-black lg:text-xl md:text-lg">
        {
        fakeData.map((data,rank) => <tr className="border  text-center even:bg-gray-400" key={data.name+rank}><TableData>{rank+1===1?"🥇 ":'\u00A0 \u00A0 \u00A0'}{(rank+1)}</TableData> <TableData className="font-semibold">{data.name.slice(0,1).toUpperCase().concat(data.name.slice(1))}</TableData> <TableData>{data.tt}</TableData> </tr>)}
    </tbody>
    </Table>
   </TableWrapper>
}




function Main(){
    return <div className="flex flex-col gap-4 ">
    <div className="mx-auto w-max pt-4">
        <button className="text-lg md:text-2xl cursor-pointer bg-gray-300 p-1 rounded-md hover:shadow-md active:bg-gray-200  font-mono border-2 border-black">Play again</button>
    </div>
    <TableContainer/>
    </div>
}

export default Main