// import { useState } from "react";
import Button from "../ui/Button";

const Headline = ({
  linkToButton,
  textButton,
  textColorButton,
  bgColorButton,
  bgColorHeadlineFrom,
  bgColorHeadlineTo,
  textHeadlineH1,
  textHeadlineParagraph,
  imgHeadline,
}) => {
  const base = "pt-24 leading-normal tracking-normal text-white";
  const gradiente = `bg-gradient-to-r ${bgColorHeadlineFrom} ${bgColorHeadlineTo}`;
  return (
    <>
      <div className={`${base} ${gradiente}`}>
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="leading-normal text-2xl mb-10"></p>
            <h1 className="my-7 text-5xl font-bold leading-tight">
              {textHeadlineH1}
            </h1>
            <p className="leading-normal text-2xl mb-8">
              {textHeadlineParagraph}
            </p>
            <Button
              linkToButton={linkToButton}
              text={textButton}
              textColor={textColorButton}
              bgColor={bgColorButton}
            />
          </div>

          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src={imgHeadline} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Headline;
