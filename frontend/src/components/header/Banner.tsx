import banner from "../../assets/banner2.jpg";

const Banner = () => {
  return (
    <div className="h-[400px] overflow-hidden">
      <img className="object-contain" src={banner}></img>
    </div>
  );
};

export default Banner;
