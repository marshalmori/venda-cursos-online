import Navbar from "../features/Navbar";
// import Section from "../features/Section";
import Headline from "../features/Headline";
import Footer from "../features/Footer";
import LearningResources from "../features/LearningResources";
import SectionCourseContent from "../features/SectionCourseContent";
import Bonus from "../features/Bonus";
import StudyMaterials from "../features/StudyMaterials";
import Testimonial from "../features/Testimonial";
import SuccessStories from "../features/SuccessStories";
import CustomerSatisfaction from "../features/CustomerSatisfaction";
import CertificateOfCompletion from "../features/CertificateOfCompletion";
import Faq from "../features/Faq";
import BottonBarNavegation from "../features/BottonBarNavegation";

const DepilacaoProfissional = () => {
  const linkToButton = "https://hotm.art/OSRmOy";
  const textButton = "Começar Agora";
  const textColorButton = "text-white";
  // const bgColorButton = "bg-[#18765F]";
  const bgColorButton = "bg-[#3DD552]";

  // const bgColorNavbarFrom = "from-[#a64142]";
  const bgColorNavbarFrom = "from-[#512D5D]";
  const bgColorNavbarTo = "to-[#9779AB]";
  // const bgColorNavbarTo = "to-[#fff1e4]";
  const textColorNavbar = "text-white";
  const textNavbar = "Curso de depilação";

  // const bgColorHeadlineFrom = "from-[#a64142]";
  const bgColorHeadlineFrom = "from-[#512D5D]";
  const bgColorHeadlineTo = "to-[#9779AB]";
  const textHeadlineH1 =
    "Conquiste sua independência financeira como profissional de DEPILAÇÃO!";
  const textHeadlineParagraph =
    "Tenha seu próprio negócio, trabalhe de casa ou monte sua própria clínica. Ensinaremos como ser um profissional partindo do absoluto ZERO. Tudo isso de forma ONLINE no aconchego de sua casa.";
  const imgHeadline = "images/super_women.svg";

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

      <LearningResources />

      <Bonus />

      <StudyMaterials
        linkToButton={linkToButton}
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
      />

      <Testimonial />

      <SuccessStories
        linkToButton={linkToButton}
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
      />

      <CustomerSatisfaction />

      <CertificateOfCompletion />

      <Faq
        linkToButton={linkToButton}
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
      />
      {/*
      <Section
        linkToButton={linkToButton}
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
      /> */}

      <Footer />

      <BottonBarNavegation
        linkToButton={linkToButton}
        textButton={textButton}
        textColorButton={textColorButton}
        bgColorButton={bgColorButton}
        bgColorNavbarFrom={bgColorNavbarFrom}
        bgColorNavbarTo={bgColorNavbarTo}
        textColorNavbar={textColorButton}
      />
    </>
  );
};

export default DepilacaoProfissional;
