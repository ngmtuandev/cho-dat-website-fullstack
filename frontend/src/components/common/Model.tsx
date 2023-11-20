import { useState } from "react";

const Model = () => {
  const [stateModel, setStateModel] = useState("login");
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[350px] h-[450px] rounded-md bg-white flex justify-center"
    >
      <div className="flex justify-center items-center gap-14 mt-4 w-[80%] h-[10%]">
        <div
          onClick={() => setStateModel("login")}
          className={`${
            stateModel === "login"
              ? "bg-bg-gray-support-400 p-2 text-white rounded-sm"
              : "cursor-pointer"
          }`}
        >
          <span>Đăng nhập</span>
        </div>
        <div
          onClick={() => setStateModel("register")}
          className={`${
            stateModel === "register"
              ? "bg-bg-gray-support-400 p-2 text-white rounded-sm"
              : "cursor-pointer"
          }`}
        >
          <span>Đăng kí</span>
        </div>
      </div>
    </div>
  );
};

export default Model;
