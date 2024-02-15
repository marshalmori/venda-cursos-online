import Button from "../ui/Button";

const Navbar = ({
  linkToButton,
  textButton,
  textColorButton,
  bgColorButton,
  bgColorNavbarFrom,
  bgColorNavbarTo,
  textColorNavbar,
  textNavbar,
}) => {
  const base = `fixed w-full z-30 top-0 ${textColorNavbar}`;
  const gradiente = `bg-gradient-to-r ${bgColorNavbarFrom} ${bgColorNavbarTo}`;

  return (
    <nav className={`${base} ${gradiente} `}>
      <div className="w-full container flex flex-wrap items-center justify-between mt-0 py-2 ">
        <div className="flex pl-4 mx-auto py-4 ">
          <a
            className={`${textColorNavbar} no-underline hover:no-underline font-bold text-2xl lg:text-4xl uppercase`}
            href="#"
          >
            {textNavbar}
          </a>
        </div>

        <div className="lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
          <Button
            linkToButton={linkToButton}
            text={textButton}
            textColor={textColorButton}
            bgColor={bgColorButton}
          />
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0 " />
    </nav>
  );
};

export default Navbar;
