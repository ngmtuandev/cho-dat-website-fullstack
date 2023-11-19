import { memo } from "react";
import banner from "../../assets/banner2.jpg";

const Banner = () => {
  return (
    <div className="h-[500px] overflow-hidden">
      <img className="object-contain transition-all" src={banner}></img>
    </div>
  );
};

export default memo(Banner);
