import Button from "../ui/Button";

const StudyMaterials = ({
  linkToButton,
  textButton,
  textColorButton,
  bgColorButton,
}) => {
  return (
    <div>
      {/* <!-- Features Heading --> */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-4xl font-bold text-center">
            Fornecemos Materiais de Estudo e Apoio
          </h2>
          <p className="max-w-md mx-auto text-center text-gray-600 text-lg  md:max-w-md">
            Para auxiliar nos estudos você receberá materiais completos em{" "}
            <strong className="uppercase">PDF</strong>. Isso lhe ajudará muito
            na construção do seu <strong className="uppercase">Negócio.</strong>
          </p>
        </div>
      </section>

      {/* <!-- Features Tabs --> */}
      <section>
        {/* <!-- Tabs/Panels Container --> */}
        <div className="container relative mx-auto mb-12 px-6 pb-12">
          <div className="container mx-auto">
            {/* <!-- Panel 1 --> */}
            <div className="flex flex-col  md:flex-row md:space-x-7 panel panel-1">
              {/* <!-- Panel Image --> */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src="images/women_reading.svg"
                  alt=""
                  className="relative z-10"
                />
              </div>
              {/* <!-- Panel Content --> */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-12 text-3xl font-semibold text-center md:mt-0 md:text-left">
                  PDFs do Curso
                </h3>
                <ul className="list-inside text-gray-600">
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="uppercase font-bold">Apostila &nbsp;</span>
                    completa de depilação
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="uppercase font-bold">Ficha &nbsp;</span>
                    pronta de Anamnese Depilação
                  </li>
                  <li className="flex items-center mb-3">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="uppercase font-bold">Ficha &nbsp;</span>{" "}
                    pronta de Anamnese Argiloterapia
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="uppercase font-bold">Guia &nbsp;</span>{" "}
                    prático de intercorrência
                  </li>
                </ul>

                <div className="mx-auto md:mx-0">
                  {/* Box botão e preço parcelado */}
                  <div className="flex flex-col mx-auto justify-center space-x-2 items-center">
                    <Button
                      linkToButton={linkToButton}
                      text={textButton}
                      textColor={textColorButton}
                      bgColor={bgColorButton}
                    />

                    {/* Price */}
                    <div className="flex flex-col w-full mb-4 space-y-3 text-center border-2 p-3 md:p-4 rounded-lg border-green-400">
                      <p className="uppercase text-2xl text-gray-600">
                        12x de <span className="font-bold">R$14,67</span> ou à
                        vista por <span className="font-bold">R$147,00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyMaterials;
