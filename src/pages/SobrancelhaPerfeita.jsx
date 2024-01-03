import Navbar from "../features/Navbar";
import Section from "../features/Section";
import Headline from "../features/Headline";

const SobrancelhaPerfeita = () => {
  const textButton = "Compre já";
  const textColorButton = "text-white";
  const bgColorButton = "bg-red-700";

  const bgColorNavbarFrom = "from-green-400";
  const bgColorNavbarTo = "to-blue-500";
  const textColorNavbar = "text-white";
  const textNavbar = "sobrancelha";

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

export default SobrancelhaPerfeita;
