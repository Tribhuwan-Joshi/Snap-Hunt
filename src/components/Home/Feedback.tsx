interface FeedBackProp {
  isCorrect: boolean;
  char: string;
}

function FeedBack({ isCorrect, char }: FeedBackProp) {
  const message = isCorrect ? `You Found ${char}  !` : "Keep looking";
  return (
    <div className="p-2 cursor-pointer  border-2 font-sans tracking-wide mx-auto left-[50%] translate-x-[-50%]  border-white fixed top-14 md:top-[13vh]  rounded-lg bg-red-600/80 text-white md:text-lg">
      {message}
    </div>
  );
}

export default FeedBack;
