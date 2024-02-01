const CertificateOfCompletion = () => {
  return (
    <div>
      {/* <!-- Features Heading --> */}
      <section id="features" className="py-4">
        <div className="container mx-auto mt-12 px-6">
          <h2 className="mb-6 text-4xl font-bold text-center">
            Certificado de Conclusão
          </h2>
        </div>
      </section>

      {/* <!-- Features Tabs --> */}
      <section>
        {/* <!-- Container --> */}
        <div className="container relative mx-auto my-6 mb-10 mt-4 px-6">
          <div className="container mx-auto">
            {/* <!-- Panel 1 --> */}
            <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
              {/* <!-- Panel Image --> */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src="images/certificado.png"
                  alt=""
                  className="relative w-96 md:w-full z-10"
                />
              </div>
              {/* <!-- Panel Content --> */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-12 text-3xl font-semibold text-center mx-auto md:mt-0 md:text-left">
                  Certificado
                </h3>
                <p className="max-w-md mx-auto text-center text-gray-600 text-lg  md:max-w-md">
                  Ao finalizar as aulas você receberá o certificado de conclusão
                  do curso. Além disso, continuará com acesso a todas as
                  atualizações que forem lançadas no decorrer dos 12 meses e
                  também terá a mentoria online por 3 meses com a professora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateOfCompletion;
