interface FeedBackProp {
  isCorrect: boolean;
  char: string;
}

function FeedBack({ isCorrect, char }: FeedBackProp) {
  const message = isCorrect ? `  You found ${char}   !` : `That's not ${char}`;
  const bg = isCorrect?'bg-green-600/80':'bg-red-600/80'
  return (
    <div className={`p-1 md:p-2 cursor-pointer  border-2 font-sans tracking-wide mx-auto left-[50%] translate-x-[-50%]  border-white fixed top-14 md:top-[13vh]  rounded-lg ${bg} text-white md:text-lg`}>
      {message}
    </div>
  );
}

export default FeedBack;
