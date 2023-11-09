const Subscribe = () => {
  return (
    <div className="max-w-[1400px] mx-auto min-h-[450px] bg-[#FA7436] mb-[40px] rounded-[16px] drop-shadow-lg relative">
      <img className="absolute top-4 right-4" src="/Element.svg" alt="" />
      <img className="absolute bottom-4 left-4" src="/Element.svg" alt="" />
      <div className="absolute flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-white text-center font-semibold font-Volkhov text-[32px] md:text-[48px]">
          Subscribe and get exclusive <br />
          deals & offer
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 mt-4 md:block join">
          <input
            className="input input-bordered md:join-item"
            placeholder="Email"
          />
          <button className="rounded-r-xl bg-[#FA7436] border-2 normal-case text-[16px] hover:text-[#FA7436] border-white text-white btn md:join-item">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
