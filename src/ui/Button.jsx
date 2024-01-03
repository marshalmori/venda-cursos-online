const Button = ({ text, textColor, bgColor }) => {
  const base =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out";

  return <button className={`${base} ${bgColor} ${textColor}`}>{text}</button>;
};

export default Button;
