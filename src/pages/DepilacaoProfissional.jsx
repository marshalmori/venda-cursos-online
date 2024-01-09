import Navbar from "../features/Navbar";
import Section from "../features/Section";
import Headline from "../features/Headline";
import SectionCourseContent from "../features/SectionCourseContent";

const DepilacaoProfissional = () => {
  const linkToButton = "https://www.google.com";
  const textButton = "Começar Agora";
  const textColorButton = "text-white";
  const bgColorButton = "bg-[#18765F]";

  const bgColorNavbarFrom = "from-[#a64142]";
  const bgColorNavbarTo = "to-[#fff1e4]";
  const textColorNavbar = "text-white";
  const textNavbar = "Curso de depilação";

  const bgColorHeadlineFrom = "from-[#a64142]";
  const bgColorHeadlineTo = "to-[#fff1e4]";
  const textHeadlineH1 =
    "Conquiste sua independência financeira como profissional de DEPILAÇÃO!";
  const textHeadlineParagraph =
    "Tenha seu próprio negócio, trabalhe de casa ou monte sua própria clínica. Ensinaremos como ser um profissional partindo do absoluto ZERO.";
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

      <SectionCourseContent
        linkToButton={linkToButton}
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
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
