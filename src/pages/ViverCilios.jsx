import Navbar from "../features/Navbar";
import Section from "../features/Section";
import Headline from "../features/Headline";

const ViverCilios = () => {
  const textButton = "Compre já";
  const textColorButton = "text-gray-600";
  const bgColorButton = "bg-yellow-300";

  const bgColorNavbarFrom = "from-indigo-500";
  const bgColorNavbarTo = "to-yellow-500";
  const textColorNavbar = "text-white";
  const textNavbar = "Viver de Cílios";

  return (
    <>
      <Navbar
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
        bgColorNavbarFrom={bgColorNavbarFrom}
        bgColorNavbarTo={bgColorNavbarTo}
        textColorNavbar={textColorNavbar}
        textNavbar={textNavbar}
      />
      <Headline
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
      />
      <Section
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
      />
    </>
  );
};

export default ViverCilios;
