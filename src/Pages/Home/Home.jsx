import Carousel from "../../Components/Carousel/Carousel";
import Banner from "../../Components/Home/Banner/Banner";
import HomeServices from "../../Components/HomeServices/HomeServices";
import NeedToDo from "../../Components/NeedToDo/NeedToDo";
import Subscribe from "../../Components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <NeedToDo></NeedToDo>
      <Carousel></Carousel>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
