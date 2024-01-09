import { Link } from "react-router-dom";

const Button = ({ text, textColor, bgColor, linkToButton }) => {
  const base =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full my-4 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out uppercase";

  return (
    <Link to={linkToButton}>
      <button className={`${base} ${bgColor} ${textColor}`}>{text}</button>
    </Link>
  );
};

export default Button;
