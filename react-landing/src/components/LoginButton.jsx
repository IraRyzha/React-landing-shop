import clsx from "clsx";
import ArrowRight from "./icons/arrow-right";

const LoginButton = ({ className }) => {
  return (
    <a
      href="#"
      className={clsx(
        "font-semibold justify-center items-center gap-1",
        className
      )}
    >
      <span>Log in</span>
      <ArrowRight />
    </a>
  );
};

export default LoginButton;
