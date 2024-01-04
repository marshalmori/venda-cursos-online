import Navbar from "../features/Navbar";
import Section from "../features/Section";
import Headline from "../features/Headline";

const ViverCilios = () => {
  const textButton = "Compre já";
  const textColorButton = "text-white";
  const bgColorButton = "bg-sky-500";

  const bgColorNavbarFrom = "from-indigo-500";
  const bgColorNavbarTo = "to-yellow-500";
  const textColorNavbar = "text-white";
  const textNavbar = "Viver Cílios";

  const bgColorHeadlineFrom = "from-indigo-500";
  const bgColorHeadlineTo = "to-yellow-500";
  const textHeadlineH1 = "Main Hero Message to sell yourself!";
  const textHeadlineParagraph =
    "Sub-hero message, not too long and not too short. Make it just.";
  const imgHeadline = "hero3.svg";

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
        bgColorHeadlineFrom={bgColorHeadlineFrom}
        bgColorHeadlineTo={bgColorHeadlineTo}
        textHeadlineH1={textHeadlineH1}
        textHeadlineParagraph={textHeadlineParagraph}
        imgHeadline={imgHeadline}
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
