import Navbar from "../features/Navbar";
import Section from "../features/Section";
import Headline from "../features/Headline";

const SobrancelhaPerfeita = () => {
  const textButton = "Compre já";
  const textColorButton = "text-white";
  const bgColorButton = "bg-rose-400";

  const bgColorNavbarFrom = "from-blue-400";
  const bgColorNavbarTo = "to-green-500";
  const textColorNavbar = "text-white";
  const textNavbar = "sobrancelha";

  const bgColorHeadlineFrom = "from-blue-400";
  const bgColorHeadlineTo = "to-green-500";
  const textHeadlineH1 = "Main Hero Message to sell yourself!";
  const textHeadlineParagraph =
    "Sub-hero message, not too long and not too short. Make it just.";
  const imgHeadline = "hero4.svg";

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

export default SobrancelhaPerfeita;
