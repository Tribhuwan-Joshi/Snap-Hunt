function EndModal() {
  return (
    <div className="h-screen z-[1000] w-screen fixed top-0 bg-gray-200/70">
      <div className=" rounded-lg text-center fixed translate-x-[-50%] translate-y-[-50%] left-[50%] top-[45%] border flex flex-col justify-between h-max  p-2 md:p-4 border-white bg-gray-900/90 text-white gap-4 space-y-2 md:space-y-4">
        <h1 className="text-md md:text-4xl ">Awesome !</h1>

        <h1 className="font-mono text-sm md:text-[20px]">
          You took 103.3 seconds{" "}
        </h1>
        <div className="flex gap-2 flex-col items-center justify-evenly">
          <input
            placeholder="Username"
            name="username"
            minLength={3}
            maxLength={20}
            className="p-1 text-black"
          />
          {/* <div className="username-feedback text-sm ">Username already taken</div> */}
          <button className="bg-gray-300 hover:bg-purple-200 active:bg-green-200 md:hover:scale-110 transition duration-500 ease-in-out text-black rounded-md px-2 py-1 font-sans my-4   md:text-xl  text-lg">
            Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default EndModal;
