import clsx from "clsx";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

const InputForm = ({
  type = "text",
  style = "form-input",
  placeholder,
  register,
  errors,
  containerClassName,
  inputClassName,
  validate,
  label,
  id,
}: TFormInput) => {
  console.log("validate : ", errors);
  return (
    <div
      className={twMerge(
        clsx(
          "flex flex-col w-full gap-4 mb-6 justify-center items-center",
          containerClassName
        )
      )}
    >
      {label && (
        <label className="font-medium text-[12px] -mb-3" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={twMerge(
          clsx(
            inputClassName,
            style,
            "justify-center h-[35px] text-[13px] -mb-3"
          )
        )}
        placeholder={placeholder}
        {...register(id, validate)}
        type={type}
        id={id}
      ></input>
      {errors && errors[id] && (
        <small className="-mb-3 text-red-500 font-medium">
          {errors[id].message}
        </small>
      )}
    </div>
  );
};

export default memo(InputForm);
