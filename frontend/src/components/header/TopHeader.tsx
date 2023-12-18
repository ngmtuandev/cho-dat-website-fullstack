import { NavLink } from "react-router-dom";
import icons from "../../utils/icons";
import Button from "../common/Button";
import withCommon from "../../hocs/withCommon";
import { memo } from "react";
import clsx from "clsx";
import NAVIGATE_LIST from "../../constans/navigate";
import useAppStore from "../../store/useAppStore";
import { Model } from "..";
import { useUserStore } from "../../store/useUserStore";
const TopHeader = () => {
  const { MdOutlineHeadphones } = icons;

  const { setShowModel, isShowModel } = useAppStore();

  const handlePostNew = () => {
    console.log("dsadsa");
  };
  const { user_current, setToken } = useUserStore();

  return (
    <div className="absolute">
      {!isShowModel && (
        <div className="navbar h-[40px] bg-opacity-60 pr-5 z-50 fixed  text-white bg-bg-brown-main-50">
          <div className="navbar-start">
            <a className="btn btn-ghost text-2xl">Chợ Đất</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Trang chủ</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Chi tiết</summary>
                  <ul className="p-2 w-[200px] text-white">
                    {NAVIGATE_LIST.map((el) => {
                      return (
                        <li key={el.id}>
                          <NavLink
                            to={el.path}
                            className={({ isActive }) =>
                              clsx(isActive && "text-yellow-400")
                            }
                          >
                            <a>{el.name}</a>
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </li>
              {user_current?.name ? (
                <li>
                  <a>{user_current?.name}</a>
                </li>
              ) : (
                <li onClick={() => setShowModel(true, <Model></Model>)}>
                  <a>Đăng nhập</a>
                </li>
              )}
            </ul>
            <li
              onClick={() => {
                window.localStorage.removeItem("user");
                console.log("click");
              }}
            >
              <a>Logout Test</a>
            </li>
          </div>
          <div className="navbar-end gap-4">
            <div className="flex items-center gap-2">
              <MdOutlineHeadphones size={25}></MdOutlineHeadphones>
              <span className="font-normal text-[14px]">0363073476</span>
            </div>
            <div>
              <Button
                text={"Đăng bài"}
                className={"hover:bg-opacity-60"}
                onSubmit={handlePostNew}
              ></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(withCommon(TopHeader));
