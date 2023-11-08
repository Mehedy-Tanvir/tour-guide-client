import Carousel from "../../Components/Carousel/Carousel";
import Banner from "../../Components/Home/Banner/Banner";
import HomeServices from "../../Components/HomeServices/HomeServices";
import Subscribe from "../../Components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <Carousel></Carousel>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
