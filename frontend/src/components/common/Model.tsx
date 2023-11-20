import { useEffect, useState } from "react";
import { Button, InputForm } from "..";
import { useForm } from "react-hook-form";

const Model = () => {
  const [stateModel, setStateModel] = useState("login");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  useEffect(() => {
    reset();
  }, [stateModel]);
  const handleOnSubmitForm = () => {};
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
                id="phone"
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
              validate={{ required: "Bạn không được bỏ trống" }}
              type="text"
              style="form-input"
            ></InputForm>
          </div>
          <div>
            <InputForm
              id="phone"
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
        </form>
        {stateModel == "login" ? (
          <Button
            text="Đăng nhập"
            onSubmit={handleSubmit(handleOnSubmitForm)}
            className="w-[100%] rounded-md"
          ></Button>
        ) : (
          <Button
            text="Đăng kí"
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

export default Model;
