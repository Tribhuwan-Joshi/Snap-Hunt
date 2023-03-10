import styled from "styled-components";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";
import { GameContext } from "../../App";
import { Link } from "react-router-dom";

const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  table-layout: auto;
  border-collapse: collapse;
  width: 50%;
  background-color: #d3d3d3;
  text-align: center;
  color: rgb(229 231 235);
  border-radius: 10px;
`;

const TableData = styled.td`
  padding: p-1;
  letter-spacing: 1px;
  border: 2px solid black;
  &.name {
    font-weight: 600;
  }
`;

function TableContainer() {
  const username = useContext(GameContext)[1];
  const [rank, setRank] = useState(0);
  const [boardData, setBoardData] = useState<{ [x: string]: any }[]>([]);
  const leaderBoardRef = collection(db, "leaderboard");
  useEffect(() => {
    const getData = async () => {
      const q = query(leaderBoardRef, orderBy("totalTime"));
      const res = await getDocs(q);
      const filteredData = res.docs.map((doc) => ({
        ...doc.data(),
      }));
      const rank = filteredData.findIndex((i) => i.name === username);
      setRank(rank + 1);

      setBoardData(filteredData);
    };
    getData();
  });

  return (
    <TableWrapper>
      <Table>
        <caption className="text-base md:text-xl p-1">
          Your Rank : {rank}
        </caption>
        <thead className="bg-blue-600 text-base md:text-xl   ">
          <tr>
            <th className="whitespace-nowrap  w-[20%] p-1 md:p-2">Rank</th>
            <th className="whitespace-nowrap  w-[60%] p-1 md:p-2">Name</th>
            <th className="whitespace-nowrap  w-[20%] p-1 md:p-2">
              Time Taken (sec)
            </th>
          </tr>
        </thead>
        {boardData ? (
          <tbody className="text-base text-black lg:text-xl md:text-lg">
            {boardData.map((data, rank) => (
              <tr
                className="border  text-center odd:bg-red-100 even:bg-slate-100"
                key={data.name + rank}
              >
                <TableData>
                  {rank + 1 === 1 ? "???? " : "\u00A0 \u00A0 \u00A0"}
                  {rank + 1}
                </TableData>
                <TableData>
                  {data.name
                    .slice(0, 1)
                    .toUpperCase()
                    .concat(data.name.slice(1))
                    .slice(0, 20)}
                </TableData>
                <TableData>{data.totalTime}</TableData>
              </tr>
            ))}
          </tbody>
        ) : (
          <tr>
            <td rowSpan={3}>Loading...</td>
          </tr>
        )}
      </Table>
    </TableWrapper>
  );
}

function Main({ handleRestart }: { handleRestart: () => void }) {
  return (
    <div className="flex flex-col gap-4  ">
      <div className="mx-auto w-max pt-4">
        <Link to="../">
          <button
            className="text-lg md:text-2xl cursor-pointer bg-gray-300 p-1 rounded-md hover:shadow-md    active:bg-gray-200  font-mono border-2 border-black"
            onClick={handleRestart}
          >
            Play again
          </button>
        </Link>
      </div>
      <TableContainer />
    </div>
  );
}

export default Main;
