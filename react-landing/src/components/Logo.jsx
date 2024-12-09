import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="">
      <img
        className="h-8 max-w-min"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
