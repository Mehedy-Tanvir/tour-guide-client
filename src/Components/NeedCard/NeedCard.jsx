import PropTypes from "prop-types";
const NeedCard = ({ item }) => {
  return (
    <div className="w-[300px] h-[278px] drop-shadow-md rounded-xl p-[20px] bg-white">
      <img src={item.image} alt="" />
      <div className="mt-[40px]">
        <h1 className="text-[24px] font-semibold text-[#222]">{item.title}</h1>
        <p className="text-[16px] text-[#666] text-normal mt-[16px]">
          {item.description}
        </p>
      </div>
    </div>
  );
};
NeedCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default NeedCard;
