import Carousal from "@itseasy21/react-elastic-carousel";

const Carousel = () => {
  const items = [
    {
      id: 1,
      image: "https://imagizer.imageshack.com/img923/8731/kQRVEd.jpg",
      title: "City Tour",
      area: "New York",
    },
    {
      id: 2,
      image: "https://imagizer.imageshack.com/img924/325/O44sVQ.jpg",
      title: "Historical Walking Tour",
      area: "London",
    },
    {
      id: 3,
      image: "https://imagizer.imageshack.com/img923/2627/VsrxAV.jpg",
      title: "Cycling Around The City",
      area: "Paris",
    },
    {
      id: 4,
      image: "https://imagizer.imageshack.com/img922/4031/DKQrvO.jpg",
      title: "Beach Excursion",
      area: "Miami",
    },
    {
      id: 5,
      image: "https://imagizer.imageshack.com/img922/4642/kUwUlr.jpg",
      title: "Mountain Hike",
      area: "Denver",
    },
  ];

  return (
    <div className="max-w-[1400px] mt-[40px] mb-[40px] mx-auto px-2">
      <h1 className="text-5xl mb-[40px] font-semibold text-center font-volkhov">
        Our <span className="text-[#FA7436]">Memories</span>
      </h1>
      <Carousal>
        {items.map((item) => (
          <div className="" key={item.id}>
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="min-h-[180px] rounded-lg max-h-[500px] object-cover object-center"
                src={item.image}
                alt=""
              />
              <h1 className="text-3xl font-semibold text-center text-black ">
                {item.title}
              </h1>
              <h1 className="text-2xl font-semibold text-center text-gray-500 ">
                {item.area}
              </h1>
            </div>
          </div>
        ))}
      </Carousal>
    </div>
  );
};

export default Carousel;
