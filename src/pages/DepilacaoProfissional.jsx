import Navbar from "../features/Navbar";
import Section from "../features/Section";
import Headline from "../features/Headline";

const DepilacaoProfissional = () => {
  const linkToButton = "https://www.google.com";
  const textButton = "Compre já";
  const textColorButton = "text-white";
  const bgColorButton = "bg-orange-700";

  const bgColorNavbarFrom = "from-cyan-500";
  const bgColorNavbarTo = "to-blue-500";
  const textColorNavbar = "text-white";
  const textNavbar = "Depilação";

  const bgColorHeadlineFrom = "from-cyan-500";
  const bgColorHeadlineTo = "to-blue-500";
  const textHeadlineH1 = "Main Hero Message to sell yourself!";
  const textHeadlineParagraph =
    "Sub-hero message, not too long and not too short. Make it just.";
  const imgHeadline = "hero.png";

  return (
    <>
      <Navbar
        linkToButton={linkToButton}
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
        bgColorNavbarFrom={bgColorNavbarFrom}
        bgColorNavbarTo={bgColorNavbarTo}
        textColorNavbar={textColorNavbar}
        textNavbar={textNavbar}
      />
      <Headline
        linkToButton={linkToButton}
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
        linkToButton={linkToButton}
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
      />
    </>
  );
};

export default DepilacaoProfissional;
