import styled from "styled-components";

type Props = { characters: Array<string>; posTop: number; posLeft: number };
const StyledMenu = styled.div<{ posLeft: number; posTop: number }>`
  top: ${(props) => String(props.posTop)}px;
  left: ${(props) => String(props.posLeft)}px;
`;

function Menu({ characters, posTop, posLeft }: Props) {
  return (
    <StyledMenu
      className="menu rounded-md z-50 px-1 md:px-2 gap-1 md:gap-2 cursor-pointer text-white w-16 md:w-24 flex flex-col py-1 justify-center absolute text-center border border-black bg-black/80"
      posTop={posTop + 20}
      posLeft={posLeft + 20}
    >
      {characters.map((c) => {
        return (
          <h1
            key={c}
            onClick={(e) => {
              e.stopPropagation();
              
            }}
            data-character = {c}
            className="  py-1 cursor-pointer active:bg-gray-500/70 hover:bg-gray-700/70 border-gray-500 rounded-sm text-sm md:text-base"
          >
            {c}
          </h1>
        );
      })}
    </StyledMenu>
  );
} 

const AimDiv = styled.div<{ left: number; top: number }>`
  top: ${(props) => String(props.top)}px;
  left: ${(props) => String(props.left)}px;
`;

function Aim({ posTop, posLeft }: { posTop: number; posLeft: number }) {
  return (
    <AimDiv
      className="aim rounded-full border-4 border-dashed border-red-600 bg-white/40 absolute w-[50px] h-[50px]"
      top={posTop - 25}
      left={posLeft - 25}
    ></AimDiv>
  );
}

export default function AimMenu({ posTop, posLeft, characters }: Props) {
  return (
    <>
      <Aim posTop={posTop} posLeft={posLeft} />
      <Menu posTop={posTop} posLeft={posLeft} characters={characters} />
    </>
  );
}
