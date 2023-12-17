import { useEffect, useState } from "react";
import { Button, InputForm } from "..";
import { useForm } from "react-hook-form";
import { Select, Option } from "@material-tailwind/react";
import { useRegister } from "../../hooks/auth/useRegister";
import Swal from "sweetalert";
import withCommon from "../../hocs/withCommon";
import { useLogin } from "../../hooks/auth/useLogin";
import useAppStore from "../../store/useAppStore";
import { useUserStore } from "../../store/useUserStore";

const ROLE = [
  {
    id: 1,
    name: "ADMIN",
  },
  {
    id: 2,
    name: "CLIENT",
  },
  {
    id: 3,
    name: "AGENT",
  },
];

const Model = () => {
  const [stateModel, setStateModel] = useState("login");
  const [role, setRole] = useState("");

  const { mutate: $register, isPending } = useRegister();
  const { mutate: $login } = useLogin();
  const { setShowModel } = useAppStore() as any;
  const { setToken, token } = useUserStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  useEffect(() => {
    reset();
  }, [stateModel]);
  const handleOnSubmitForm = async (data: {
    name: string;
    phone: number;
    email: string;
    password: string;
  }) => {
    const dataFull = { ...data, role };
    if (stateModel === "register") {
      $register(dataFull, {
        onSuccess: (rs) => {
          console.log("rs: ", rs);
          if (rs?.data?.status === 0) {
            Swal({
              title: "Đăng ký tài khoản thành công",
              text: "Vui lòng đăng nhập !",
              icon: "success",
            }).then(() => {
              setStateModel("login");
            });
          } else {
            Swal({
              title: "Tạo tài khoản thất bại",
              text: "Vui lòng tạo lại tài khoản mới",
              icon: "warning",
            });
          }
        },
      });
    }
    if (stateModel === "login") {
      $login(data, {
        onSuccess: (rs) => {
          if (rs.status == 0) {
            console.log("token", rs?.token);
            setToken(rs?.token);
            Swal({
              title: "Đăng nhập tài khoản thành công",
              text: "Vui lòng đăng nhập !",
              icon: "success",
            }).then(() => {
              setShowModel(false, null);
            });
          } else {
            Swal({
              title: "Đăng nhập thất bại",
              text: "Vui lòng đăng nhập lại",
              icon: "warning",
            });
          }
        },
      });
    }
  };
  console.log("token >>>>", token);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[350px] h-[450px] flex-col justify-center items-center rounded-md bg-white  "
    >
      <div className="flex justify-center items-center gap-14 mt-4 w-[100%] h-[10%]">
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
      <div className="flex-col mt-5 w-[100%] px-5 text-center justify-center items-center">
        <form>
          {stateModel === "register" && (
            <div>
              <InputForm
                id="name"
                placeholder="Tên người dùng"
                register={register}
                label="Tên người dùng"
                containerClassName="w-[100%]"
                inputClassName="w-[100%] rounded-md outline-none"
                errors={errors}
                validate={{ required: "Bạn không được bỏ trống" }}
                type="text"
                style="form-input"
              ></InputForm>
            </div>
          )}
          <div>
            <InputForm
              id="phone"
              placeholder="Nhập số điện thoại"
              register={register}
              label="Số điện thoại"
              containerClassName="w-[100%]"
              inputClassName="w-[100%] rounded-md outline-none"
              errors={errors}
              validate={{
                required: "Bạn không được bỏ trống",
                pattern: {
                  value: /(0[3|5|7|9])+([0-9]{8})\b/, // validate phỏn : số đầu phải là 03 05 07 09 số sau từ 0-9
                  message: "Số điện thoại không hợp lệ",
                },
              }}
              type="text"
              style="form-input"
            ></InputForm>
          </div>
          <div>
            <InputForm
              id="password"
              placeholder="Nhập mật khẩu"
              register={register}
              label="Mật khẩu"
              containerClassName="w-[100%]"
              inputClassName="w-[100%] bg-opacity-0 rounded-md outline-none"
              errors={errors}
              validate={{ required: "Bạn không được bỏ trống" }}
              type="password"
              style="form-input"
            ></InputForm>
          </div>
          <div className="mb-4 mt-10">
            {stateModel == "register" && (
              <div>
                <Select
                  onChange={(value) => setRole(value!)}
                  variant="outlined"
                  label="Tài khoản dùng để"
                >
                  {ROLE.map((item) => {
                    return (
                      <Option key={item.id} value={item.name}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            )}
          </div>
        </form>
        {stateModel == "login" ? (
          <Button
            text={isPending ? "..." : "Đăng nhập"}
            onSubmit={handleSubmit(handleOnSubmitForm)}
            className="w-[100%] rounded-md"
          ></Button>
        ) : (
          <Button
            text={isPending ? "..." : "Đăng kí"}
            onSubmit={handleSubmit(handleOnSubmitForm)}
            className="w-[100%] rounded-md"
          ></Button>
        )}
        {stateModel === "login" && (
          <div>
            <span className="text-[12px] cursor-pointer hover:underline mt-2">
              Quên mật khẩu
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default withCommon(Model);
