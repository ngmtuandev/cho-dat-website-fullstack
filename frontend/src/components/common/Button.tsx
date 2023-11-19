import clsx from "clsx";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

type TChildren = {
  text: string;
  className: string;
  onSubmit: () => void;
};

const Button = ({ text, className, onSubmit }: TChildren) => {
  return (
    <button
      onClick={onSubmit}
      className={twMerge(
        clsx("px-4 py-2 rounded-sm bg-bg-brown-main-50 text-white", className)
      )}
    >
      {text}
    </button>
  );
};

export default memo(Button);
