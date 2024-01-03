import Navbar from "../features/Navbar";
import Section from "../features/Section";
import Headline from "../features/Headline";

const DepilacaoProfissional = () => {
  const textButton = "Compre já";
  const textColorButton = "text-white";
  const bgColorButton = "bg-orange-700";

  return (
    <>
      <Navbar
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
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

export default DepilacaoProfissional;
