import clsx from "clsx";

/**
 * @param {{
 * color: string,
 * }} props
 */

const UiButton = ({ children, color }) => {
  const buttonClassName = clsx(
    "font-semibold  px-5 py-2 flex justify-center items-center rounded-lg ease-in-out",
    {
      white: "bg-white hover:bg-gray-100",
      violet: "bg-main-violet hover:bg-main-violet-hover text-white",
    }[color]
  );
  return <button className={buttonClassName}>{children}</button>;
};

export default UiButton;
