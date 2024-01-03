import Navbar from "../features/Navbar";
import Section from "../features/Section";
import Headline from "../features/Headline";

const SobrancelhaPerfeita = () => {
  const textButton = "Compre já";
  const textColorButton = "text-white";
  const bgColorButton = "bg-red-700";

  const bgColorNavbarFrom = "#243b4a";
  const bgColorNavbarTo = "#87bcde";
  const textColorNavbar = "text-white";
  const textNavbar = "Marshal Mori";

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
