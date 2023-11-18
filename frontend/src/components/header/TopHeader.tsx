import icons from "../../utils/icons";

const TopHeader = () => {
  const { MdOutlineHeadphones } = icons;

  return (
    <div className="">
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
                  <li>
                    <a>Giới thiệu</a>
                  </li>
                  <li>
                    <a>Sản phẩm</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                  <li>
                    <a>Đăng bài</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Giới thiệu</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <MdOutlineHeadphones size={25}></MdOutlineHeadphones>
            <span className="font-normal text-[14px]">0363073476</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
