import ArrowRight from "./icons/arrow-right";

const LoginButton = () => {
  return (
    <a href="#" className="hidden lg:flex justify-center items-center gap-1">
      <span>Log in</span>
      <ArrowRight />
    </a>
  );
};

export default LoginButton;
