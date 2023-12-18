import { useEffect } from "react";
import { Banner } from "../../components";
import { useUserStore } from "../../store/useUserStore";

const Home = () => {
  const { getUserCurrent, token, user_current } = useUserStore();
  console.log("user_current ????????????", user_current);
  useEffect(() => {
    getUserCurrent();
  }, [token]);
  return (
    <div className="">
      <div>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
