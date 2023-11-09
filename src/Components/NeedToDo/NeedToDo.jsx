import NeedCard from "../NeedCard/NeedCard";

const NeedToDo = () => {
  const items = [
    {
      title: "Sign Up",
      description:
        "Completes all the work associated with planning and processing",
      image: "/need1.svg",
    },
    {
      title: "Worth of Money",
      description:
        "After successful access then book from exclusive deals & pricing",
      image: "/need2.svg",
    },
    {
      title: "Exciting Tour",
      description:
        "Start and explore a wide range of exciting travel experience.",
      image: "/need3.svg",
    },
  ];
  return (
    <div
      className="max-w-[1400px] rounded-lg flex items-center justify-center flex-col
     mt-[40px] gap-[64px] py-[30px] mb-[40px] mx-auto px-2 bg-[#F7F8FC] min-h-[700px]"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl mb-[40px] font-semibold text-center font-volkhov">
          Things you need <span className="text-[#FA7436]">to do</span>
        </h1>
        <p className="text-[18px] font-normal text-center text-[#666] max-w-[482px]">
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] max-w-[1170px]">
          {items.map((item, idx) => (
            <NeedCard key={idx} item={item}></NeedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeedToDo;
